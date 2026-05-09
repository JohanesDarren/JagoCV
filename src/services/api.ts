import type { SaveDocumentPayload } from '../models/document';
import type { LoginCredentials, RegisterData, AuthResponse } from '../models/user';

const API_URL = 'http://localhost:5000/api';

/**
 * Service API — Abstraksi fetch dengan auth token.
 * Semua method return typed data.
 */
class ApiService {
  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  async request<T = any>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token = this.getToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers as Record<string, string> || {}),
    };

    const response = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
    const data = await response.json();

    if (!response.ok) throw new Error(data.error || 'Terjadi kesalahan');
    return data as T;
  }

  // === Auth ===
  login(credentials: LoginCredentials): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/login', { method: 'POST', body: JSON.stringify(credentials) });
  }

  register(data: RegisterData): Promise<{ message: string }> {
    return this.request('/auth/register', { method: 'POST', body: JSON.stringify(data) });
  }

  getMe(): Promise<any> {
    return this.request('/auth/me');
  }

  updateUser(data: { fname?: string; lname?: string; role?: string; location?: string }): Promise<any> {
    return this.request('/auth/update', { method: 'POST', body: JSON.stringify(data) });
  }

  // === Documents ===
  getDocuments(): Promise<any[]> {
    return this.request('/documents');
  }

  saveDocument(doc: SaveDocumentPayload): Promise<any> {
    return this.request('/documents', { method: 'POST', body: JSON.stringify(doc) });
  }

  updateDocument(id: string, data: Partial<SaveDocumentPayload>): Promise<any> {
    return this.request(`/documents/${id}`, { method: 'PATCH', body: JSON.stringify(data) });
  }

  deleteDocument(id: string): Promise<any> {
    return this.request(`/documents/${id}`, { method: 'DELETE' });
  }

  // === Chat ===
  saveChatMessage(msg: { content: string; role: string }): Promise<any> {
    return this.request('/chat', { method: 'POST', body: JSON.stringify(msg) });
  }

  getChatHistory(): Promise<any[]> {
    return this.request('/chat');
  }

  generateAiChat(prompt: string, documentId?: string): Promise<{ id: string, content: string, role: string }> {
    return this.request('/chat/generate', {
      method: 'POST',
      body: JSON.stringify({ prompt, documentId })
    });
  }
}

/** Singleton API instance */
export const api = new ApiService();
