import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic sanity check
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'JagoCV API is running' });
});

// Auth Routes (Mocks for now)
app.post('/api/auth/register', async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    // In a real app, hash password and save to DB
    // const user = await prisma.user.create({ data: { email, password, name } });
    res.status(201).json({ message: 'User registered successfully', user: { email, name } });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
});

// Document Routes
app.get('/api/documents', async (req: Request, res: Response) => {
  try {
    // const documents = await prisma.document.findMany();
    // For now returning mock empty list or placeholder
    res.json([]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
