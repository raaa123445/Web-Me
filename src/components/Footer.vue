<template>
  <footer class="bg-blue-900 text-white py-10">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <!-- Quick Links -->
      <div class="footer-links">
        <h3 class="text-2xl font-semibold mb-5 border-b-2 border-blue-400">Quick Links</h3>
        <ul class="space-y-3">
          <li><a href="/" class="text-gray-300 hover:text-blue-300 transition duration-200">Home</a></li>
          <li><a href="/products-services" class="text-gray-300 hover:text-blue-300 transition duration-200">Products & Services</a></li>
          <li><a href="/about" class="text-gray-300 hover:text-blue-300 transition duration-200">About Us</a></li>
          <li><a href="/blogs" class="text-gray-300 hover:text-blue-300 transition duration-200">Blogs</a></li>
          <li><a href="/contact" class="text-gray-300 hover:text-blue-300 transition duration-200">Contact Us</a></li>
        </ul>
      </div>
      
      <!-- Contact Us -->
      <div class="footer-info">
        <h3 class="text-2xl font-semibold mb-5 border-b-2 border-blue-400">Contact Us</h3>
        <p>Email: <a href="mailto:info@poscar.com" class="text-gray-300 hover:text-blue-300 transition duration-200">info@poscar.com</a></p>
        <p>Phone: <a href="tel:+1234567890" class="text-gray-300 hover:text-blue-300 transition duration-200">+1 (234) 567-890</a></p>
      </div>
      
      <!-- Social Links -->
      <div class="footer-social">
        <h3 class="text-2xl font-semibold mb-5 border-b-2 border-blue-400">Follow Us</h3>
        <ul class="space-y-3">
          <li><a href="https://www.facebook.com" target="_blank" class="text-gray-300 hover:text-blue-300 transition duration-200">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" class="text-gray-300 hover:text-blue-300 transition duration-200">Twitter</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" class="text-gray-300 hover:text-blue-300 transition duration-200">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <!-- Footer Bottom -->
    <div class="mt-8 text-center text-gray-400 text-sm">
      <p>&copy; {{ year }} Poscar. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
