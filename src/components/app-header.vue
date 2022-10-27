<script setup>
import { ref, onMounted } from 'vue';

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

onMounted(init);
</script>

<template>
  <header
    class="w-full h-20 fixed top-0 left-0 border-b border-transparent transition-colors z-10"
    :class="{
      'bg-violet-700 border-white': offset,
    }"
  >
    <div class="content h-full flex items-center justify-between">
      <app-logo />

      <nav>
        <ul class="flex gap-4 uppercase">
          <li>
            <a href="#model" class="link">Model</a>
          </li>

          <li>
            <a href="#about" class="link">About</a>
          </li>

          <li>
            <a href="#help" class="link">Help</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
