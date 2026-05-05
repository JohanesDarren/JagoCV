const API_URL = 'http://localhost:5000/api';

export const api = {
  // Fungsi umum untuk fetch dengan Auth Token
  async request(endpoint: string, options: any = {}) {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...options.headers,
    };

    const response = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
    const data = await response.json();
    
    if (!response.ok) throw new Error(data.error || 'Terjadi kesalahan');
    return data;
  },

  // Auth
  login: (credentials: any) => api.request('/auth/login', { method: 'POST', body: JSON.stringify(credentials) }),
  register: (user: any) => api.request('/auth/register', { method: 'POST', body: JSON.stringify(user) }),

  // Documents — Per User (tidak global)
  getDocuments: () => api.request('/documents'),
  
  saveDocument: (doc: {
    title: string;
    type: string;
    content?: any;
    status?: string;
    templateId?: string;   // Pilihan template user
    fontFamily?: string;   // Pilihan font user
    themeColor?: string;   // Pilihan warna tema user
  }) => api.request('/documents', { method: 'POST', body: JSON.stringify(doc) }),

  updateDocument: (id: string, data: {
    title?: string;
    status?: string;
    templateId?: string;
    fontFamily?: string;
    themeColor?: string;
    content?: any;
  }) => api.request(`/documents/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),

  deleteDocument: (id: string) => api.request(`/documents/${id}`, { method: 'DELETE' }),

  // Chat
  saveChatMessage: (msg: any) => api.request('/chat', { method: 'POST', body: JSON.stringify(msg) }),
  getChatHistory: () => api.request('/chat'),
};
