<script setup>
import { useUiStore } from '@/store/ui';

const uiStore = useUiStore();

const { openMenu } = uiStore;
</script>

<template>
  <button
    class="w-8 h-8 flex flex-col items-center justify-center gap-1 px-1 cursor-pointer lg:hidden"
    @click.stop="openMenu"
  >
    <span
      v-for="line in 3"
      :key="line"
      class="w-full h-[2px] bg-white rounded-sm"
    ></span>
  </button>
</template>
