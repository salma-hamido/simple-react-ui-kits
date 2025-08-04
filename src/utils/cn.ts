/**
 * Utility function to combine class names
 * @param classes - Array of class names or objects with conditional classes
 * @returns Combined class string
 */
export function cn(...classes: (string | undefined | null | false | Record<string, boolean>)[]): string {
  return classes
    .filter(Boolean)
    .map((cls) => {
      if (typeof cls === 'string') return cls;
      if (typeof cls === 'object' && cls !== null && !Array.isArray(cls)) {
        return Object.entries(cls as Record<string, boolean>)
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(' ');
      }
      return '';
    })
    .join(' ')
    .trim();
} 