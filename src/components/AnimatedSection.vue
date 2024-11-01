<template>
    <section class="p-10" data-aos="fade-up">
      <h1 class="text-4xl font-bold">Hello from Vue!</h1>
      <p class="mt-4">This section is animated with AOS.</p>
    </section>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  export default {
    name: 'AnimatedSection',
    setup() {
      onMounted(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
        });
      });
    },
  };
  </script>
  