<template>
    <section class="hero min-h-screen bg-blue-100 flex items-center justify-center">
      <div ref="heroText" class="text-center">
        <h1 class="text-6xl font-bold text-blue-800">Welcome to Our Bank</h1>
        <p class="mt-4 text-lg text-gray-700">
          Discover world-class financial services and solutions.
        </p>
        <button class="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </section>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { gsap } from 'gsap';
  
  export default {
    name: 'HeroSection',
    setup() {
      const heroText = ref(null);
  
      onMounted(() => {
        gsap.fromTo(
          heroText.value,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
        );
      });
  
      return { heroText };
    },
  };
  </script>
  
  <style scoped>
  .hero {
    background-image: url('/assets/hero-bg.jpg');
    background-size: cover;
    background-position: center;
  }
  </style>
  