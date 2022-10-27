<script setup>
import IonLogoGithub from '~icons/ion/logo-github';
import IonLogoLinkedin from '~icons/ion/logo-linkedin';

const year = new Date().getFullYear();
const links = [
  {
    href: 'https://github.com/leonardogruppelli/rocket',
    icon: IonLogoGithub,
  },
  {
    href: 'https://www.linkedin.com/in/leonardo-gruppelli/',
    icon: IonLogoLinkedin,
  },
];
</script>

<template>
  <div class="p-6 bg-gray-200 text-gray-800 text-center lg:text-left">
    <div
      class="content flex flex-col items-center justify-between gap-6 lg:flex-row"
    >
      <p class="text-md">Copyright © {{ year }} Leonardo Gruppelli</p>

      <div class="flex gap-4">
        <a
          v-for="link in links"
          :key="link.href"
          class="text-xl text-gray-500 transition-colors hover:text-gray-800"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <component :is="link.icon" />
        </a>
      </div>
    </div>
  </div>
</template>
