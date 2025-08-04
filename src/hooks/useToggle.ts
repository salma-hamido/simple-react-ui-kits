import { useState, useCallback } from 'react';

/**
 * Custom hook for toggle functionality
 * @param initialValue - Initial toggle state
 * @returns [state, toggle, setState] - Current state, toggle function, and setter
 */
export function useToggle(initialValue = false): [boolean, () => void, (value: boolean) => void] {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => {
    setState(prev => !prev);
  }, []);

  return [state, toggle, setState];
} 