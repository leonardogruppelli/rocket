<script setup>
defineProps({
  negative: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <a
    href="#model"
    class="flex text-2xl font-bold uppercase"
  >
    <p>Ro</p>

    <p
      class="text-yellow-500"
      :class="{
        'text-gray-800': negative,
      }"
    >
      .
    </p>

    <p
      class="text-red-500"
      :class="{
        'text-gray-800': negative,
      }"
    >
      cket
    </p>
  </a>
</template>
