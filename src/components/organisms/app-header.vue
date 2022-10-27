<script setup>
import { useScrollOffset } from '@/hooks/useScrollOffset';

const { offset } = useScrollOffset();
</script>

<template>
  <header
    class="w-full h-20 fixed top-0 left-0 bg-violet-900 border-b border-white transition-colors z-10"
    :class="{
      'bg-violet-700': offset,
    }"
  >
    <div
      class="content h-full flex items-center justify-between after:w-8 after:lg:hidden"
    >
      <app-hamburger />

      <app-logo />

      <app-nav />
    </div>
  </header>
</template>
