/**
 * Utility untuk menggabungkan className secara kondisional.
 * Menyaring nilai falsy (false, undefined, null, '') dan menggabungkan sisanya.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
