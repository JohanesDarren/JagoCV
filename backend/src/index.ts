import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());

// --- Middleware Autentikasi ---
const authenticateToken = (req: any, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Akses ditolak, token hilang' });

  jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(403).json({ error: 'Token tidak valid' });
    req.user = user;
    next();
  });
};

// --- AUTH ROUTES ---

// 1. Registrasi User
app.post('/api/auth/register', async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, name }
    });
    res.status(201).json({ message: 'User berhasil didaftarkan', userId: user.id });
  } catch (error) {
    res.status(400).json({ error: 'Email sudah terdaftar atau data tidak valid' });
  }
});

// 2. Login User
app.post('/api/auth/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Email atau password salah' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        subscriptionTier: user.subscriptionTier,
        aiCredits: user.aiCredits
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan pada server' });
  }
});

// --- DOCUMENT ROUTES ---

// 3. Ambil Semua Dokumen Milik User (Dashboard)
app.get('/api/documents', authenticateToken, async (req: any, res: Response) => {
  try {
    const docs = await prisma.document.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' }
    });
    res.json(docs);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data dokumen' });
  }
});

// 4. Simpan Dokumen Baru (CV/Portfolio)
app.post('/api/documents', authenticateToken, async (req: any, res: Response) => {
  const { title, type, content, status, templateId, fontFamily, themeColor } = req.body;
  try {
    const newDoc = await prisma.document.create({
      data: {
        title,
        type,
        content,
        status: status || 'Draf',
        date: new Date().toLocaleDateString('id-ID'),
        templateId: templateId || 'standard',
        fontFamily: fontFamily || 'Inter',
        themeColor: themeColor || 'blue',
        userId: req.user.id
      }
    });
    res.status(201).json(newDoc);
  } catch (error) {
    res.status(400).json({ error: 'Gagal menyimpan dokumen' });
  }
});

// 4b. Update Dokumen (ubah template/font/status)
app.patch('/api/documents/:id', authenticateToken, async (req: any, res: Response) => {
  const { id } = req.params;
  const { title, status, templateId, fontFamily, themeColor, content } = req.body;
  try {
    // Pastikan dokumen milik user yang sedang login
    const doc = await prisma.document.findFirst({ where: { id, userId: req.user.id } });
    if (!doc) return res.status(404).json({ error: 'Dokumen tidak ditemukan' });

    const updated = await prisma.document.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(status && { status }),
        ...(templateId && { templateId }),
        ...(fontFamily && { fontFamily }),
        ...(themeColor && { themeColor }),
        ...(content && { content }),
      }
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Gagal memperbarui dokumen' });
  }
});

// 4c. Hapus Dokumen
app.delete('/api/documents/:id', authenticateToken, async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const doc = await prisma.document.findFirst({ where: { id, userId: req.user.id } });
    if (!doc) return res.status(404).json({ error: 'Dokumen tidak ditemukan' });
    await prisma.document.delete({ where: { id } });
    res.json({ message: 'Dokumen berhasil dihapus' });
  } catch (error) {
    res.status(400).json({ error: 'Gagal menghapus dokumen' });
  }
});


// --- CHAT ROUTES ---

// 5. Simpan Pesan Chat AI
app.post('/api/chat', authenticateToken, async (req: any, res: Response) => {
  const { content, role, documentId } = req.body;
  try {
    const message = await prisma.chatMessage.create({
      data: {
        content,
        role,
        userId: req.user.id,
        documentId: documentId || null
      }
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: 'Gagal menyimpan pesan chat' });
  }
});

app.listen(PORT, () => {
  console.log(`JagoCV Backend aktif di http://localhost:${PORT}`);
});
