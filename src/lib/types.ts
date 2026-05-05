export type DocType = "ATS CV" | "Visual Resume" | "Web Portfolio";
export type DocStatus = "Selesai" | "Draf" | "Diterbitkan";

export interface RecentDocument {
  id: string;
  title: string;
  type: DocType;
  status: DocStatus;
  date: string;
  // Preferensi desain per dokumen — bukan data global
  templateId?: string;  // Layout yang dipilih user saat membuat dokumen
  fontFamily?: string;  // Font yang dipilih user
  themeColor?: string;  // Warna tema yang dipilih user
}

export interface UserDashboardData {
  name: string;
  role: string;
  profileImageUrl: string;
  portfolioViews: number;
  recentDocs: RecentDocument[];
}
