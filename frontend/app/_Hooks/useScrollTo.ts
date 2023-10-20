import { useEffect } from 'react'; /* eslint-disable react-hooks/rules-of-hooks */

export default function useScrollTo() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);

    if (hash) {
      const targetElement = document.getElementById(hash);

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView();
        }, 0);
      }
    }
  });
}
