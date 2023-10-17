import { useEffect, useState } from 'react';

function useScript(src: string) {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return loaded;
}

export default useScript;
