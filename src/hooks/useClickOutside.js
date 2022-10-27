import { onMounted, onBeforeUnmount } from 'vue';

export function useClickOutside(element, callback) {
  function click(event) {
    if (!element.value.contains(event.target)) callback();
  }

  function init() {
    document.addEventListener('click', click);
  }

  function destroy() {
    document.removeEventListener('click', click);
  }

  onMounted(init);

  onBeforeUnmount(destroy);
}
