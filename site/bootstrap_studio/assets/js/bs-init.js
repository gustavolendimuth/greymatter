if (window.innerWidth < 768) {
  [].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach((elem) => {
    elem.classList.remove('animated');
    elem.removeAttribute('data-bss-hover-animate');
    elem.removeAttribute('data-aos');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  AOS.init();

  (function () {
    if (!('requestAnimationFrame' in window)) return;
    if (/Mobile|Android/.test(navigator.userAgent)) return;

    const backgrounds = [];
    const backgroundToSpeed = new WeakMap();
    const parallaxBackgrounds = document.querySelectorAll('[data-bss-scroll-zoom]');

    for (const el of parallaxBackgrounds) {
      const bg = document.createElement('div');

      bg.style.backgroundImage = el.style.backgroundImage;
      bg.style.backgroundSize = 'cover';
      bg.style.backgroundPosition = 'center';
      bg.style.position = 'absolute';
      bg.style.height = '100%';
      bg.style.width = '100%';
      bg.style.top = 0;
      bg.style.left = 0;
      bg.style.zIndex = -100;

      el.appendChild(bg);
      backgrounds.push(bg);
      backgroundToSpeed.set(bg, el.getAttribute('data-bss-scroll-zoom-speed') || 1);

      el.style.position = 'relative';
      el.style.background = 'transparent';
      el.style.overflow = 'hidden';
    }

    if (!backgrounds.length) return;

    const visible = [];
    let scheduled;

    window.addEventListener('scroll', scroll);
    window.addEventListener('resize', scroll);

    scroll();

    function scroll() {
      visible.length = 0;

      for (let i = 0; i < backgrounds.length; i++) {
        const rect = backgrounds[i].parentNode.getBoundingClientRect();

        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          visible.push({
            rect,
            node: backgrounds[i],
            speed: backgroundToSpeed.get(backgrounds[i]),
          });
        }
      }

      cancelAnimationFrame(scheduled);

      if (visible.length) {
        scheduled = requestAnimationFrame(update);
      }
    }

    function update() {
      for (let i = 0; i < visible.length; i++) {
        const { rect } = visible[i];
        const { node } = visible[i];
        const { speed } = visible[i];

        const quot = rect.top < 0 ? Math.abs(rect.top) / rect.height : 0;

        node.style.transform = `scale3d(${1 + quot * speed}, ${1 + quot * speed}, 1)`;
      }
    }
  }());

  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bss-tooltip]'));
  const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
}, false);
