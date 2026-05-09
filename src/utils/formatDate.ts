/**
 * Format tanggal ISO menjadi string lokal Indonesia: "12 Mei 2026"
 */
export function formatDate(isoString: string): string {
  if (!isoString) return '-';
  try {
    return new Date(isoString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return '-';
  }
}

/**
 * Format tanggal ISO menjadi string pendek: "12 Mei"
 */
export function formatDateShort(isoString: string): string {
  if (!isoString) return '-';
  try {
    return new Date(isoString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
    });
  } catch {
    return '-';
  }
}
