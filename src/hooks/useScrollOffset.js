import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useScrollOffset() {
  const offset = ref(false);

  function scroll() {
    if (!window.scrollY) {
      offset.value = false;
      return;
    }

    offset.value = true;
  }

  function init() {
    scroll();

    window.addEventListener('scroll', scroll);
  }

  function destroy() {
    window.removeEventListener('scroll', scroll);
  }

  onMounted(init);

  onBeforeUnmount(destroy);

  return {
    offset,
  };
}
