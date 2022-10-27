<script setup>
import { ref, onMounted } from 'vue';
import { ANIMATIONS } from '@/config/animations';
import anime from 'animejs';

const background = 0x000000;

const model = ref(null);

function animate() {
  anime({
    targets: [model.value.group.position],
    y: [-0.25, -1],
    duration: ANIMATIONS.POSITION,
    direction: 'alternate',
    easing: 'easeInOutQuad',
    loop: true,
  });

  anime({
    targets: [model.value.group.rotation],
    y: [0, Math.PI * 2],
    duration: ANIMATIONS.ROTATION,
    easing: 'linear',
    loop: true,
  });
}

onMounted(animate);
</script>

<template>
  <section id="model">
    <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-4">
      <div
        class="card relative bg-violet-700 lg:w-1/2 before:w-full before:h-full before:absolute before:top-4 before:left-4 before:bg-violet-800 before:rounded-xl before:-z-10"
      >
        <h1 class="mb-3 text-4xl font-normal lg:text-5xl">Custom Model</h1>

        <h4 class="text-md">
          This is a Rocket, pretty neat right? It was made in
          <strong class="font-bold">Blender</strong> and was my first ever
          model, also my first experience with the software.
        </h4>
      </div>

      <div
        ref="canvas"
        class="h-60 -order-1 sm:h-80 lg:w-1/2 lg:h-96 lg:order-1"
      >
        <Renderer
          resize
          alpha
          antialias
        >
          <Scene :background="background">
            <Camera
              :position="{
                z: 7.5,
              }"
            />

            <PointLight
              :position="{
                z: 20,
              }"
            />

            <Group ref="model">
              <GltfModel src="rocket.glb" />
            </Group>
          </Scene>
        </Renderer>
      </div>
    </div>
  </section>
</template>
