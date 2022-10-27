<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUiStore } from '@/store/ui';
import { useScrollOffset } from '@/hooks/useScrollOffset';
import { useClickOutside } from '@/hooks/useClickOutside';

const uiStore = useUiStore();

const { menuOpen } = storeToRefs(uiStore);

const { closeMenu } = uiStore;

const { offset } = useScrollOffset();

const nav = ref(null);

useClickOutside(nav, closeMenu);
</script>

<template>
  <nav
    ref="nav"
    class="w-72 h-full max-w-[80%] fixed top-0 left-0 px-8 py-14 bg-violet-900 border-r border-white transition-transform lg:w-auto lg:h-auto lg:static lg:p-0 lg:bg-transparent lg:border-0 lg:translate-x-0"
    :class="{
      '-translate-x-full': !menuOpen,
      'bg-violet-700': offset,
    }"
  >
    <ul class="flex flex-col gap-4 uppercase lg:flex-row lg:mt-0">
      <li>
        <a
          href="#model"
          class="link"
        >
          Model
        </a>
      </li>

      <li>
        <a
          href="#about"
          class="link"
        >
          About
        </a>
      </li>

      <li>
        <a
          href="#help"
          class="link"
        >
          Help
        </a>
      </li>
    </ul>

    <button
      class="w-6 h-6 flex flex-col items-center justify-center absolute top-4 right-4 px-2 lg:hidden"
      @click="closeMenu"
    >
      <span
        class="absolute-center w-full h-[2px] bg-white rounded-sm rotate-45"
      ></span>

      <span
        class="absolute-center w-full h-[2px] bg-white rounded-sm -rotate-45"
      ></span>
    </button>
  </nav>
</template>
