import { useLayoutEffect } from 'react';

export default function useResizeWindow() {
  useLayoutEffect(() => {
    function resizeWindow() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    window.addEventListener('resize', resizeWindow);

    // Call resizeWindow once on mount
    resizeWindow();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', resizeWindow);
  });
}
