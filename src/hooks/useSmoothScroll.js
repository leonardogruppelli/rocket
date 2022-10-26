import { onMounted } from "vue";

export function useSmoothScroll() {
  const offset = 120;
  const duration = 500;

  function easing(time) {
    return time < 0.5
      ? 4 * time * time * time
      : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
  }

  function init() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        event.preventDefault();

        const position =
          window.pageYOffset +
          document.querySelector(anchor.hash).getBoundingClientRect().top -
          offset;
        const target = window.pageYOffset;
        const diff = position - target;

        let start;

        window.requestAnimationFrame(function step(timestamp) {
          if (!start) start = timestamp;

          const time = timestamp - start;
          const percent = easing(Math.min(time / duration, 1));

          window.scrollTo(0, target + diff * percent);

          if (time < duration) {
            window.requestAnimationFrame(step);
          }
        });
      });
    });
  }

  onMounted(init);
}
