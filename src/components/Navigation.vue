<template>
  <nav
  class="fixed top-0 left-0 w-full bg-blue-300 bg-opacity-95 backdrop-blur-md text-white px-8 py-4 flex items-center justify-between shadow-lg rounded-lg transition-shadow duration-300 ease-in-out z-50"
  >
    <!-- Logo and Name with Link to Home -->
    <div class="flex items-center space-x-4">
      <a href="/" class="flex items-center space-x-4">
        <img
          src="po.png"
          alt="Company Logo"
          class="h-12 w-12 rounded-full shadow-md transition-transform duration-300 hover:scale-105"
        />
        <span class="text-3xl font-bold tracking-wide text-blue-800">
          Poscar
        </span>
      </a>
    </div>

    <!-- Navigation Links -->
    <ul class="flex space-x-8">
      <li>
        <a
          href="/"
          class="text-lg font-semibold hover:text-blue-600 transition-colors duration-200"
          >Home</a
        >
      </li>

      <!-- Dropdown Menu for Products & Services -->
      <li class="relative group">
        <a
          href="/products-services"
          class="text-lg font-semibold hover:text-blue-600 transition-colors duration-200 focus:outline-none"
        >
          Products & Services
        </a>
        <div
          class="absolute left-0 hidden w-72 bg-white text-gray-800 group-hover:flex shadow-2xl rounded-lg p-4 transform transition-all duration-300 ease-in-out"
        >
          <div class="grid grid-cols-1 gap-4">
            <!-- Education Section -->
            <div>
              <h3 class="font-semibold text-lg text-blue-700 mb-2">
                Education
              </h3>
              <ul class="space-y-1">
                <li>
                  <a
                    href="https://wikischool.asia"
                    target="_blank"
                    class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >Kindergarten & K12</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >University Solution</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >Enrollment</a
                  >
                </li>
              </ul>
            </div>
            <!-- Enterprise Section -->
            <div>
              <h3 class="font-semibold text-lg text-blue-700 mb-2">
                Enterprise
              </h3>
              <ul class="space-y-1">
                <li>
                  <a
                    href="https://vithean.com"
                    target="_blank"
                    class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >Vithean Page</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >Attendance Solutions</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >HRM Solution</a
                  >
                </li>
              </ul>
            </div>
            <!-- Custom Solutions Section -->
            <div>
              <h3 class="font-semibold text-lg text-blue-700 mb-2">
                Custom Solution
              </h3>
              <ul class="space-y-1">
                <li>
                  <a
                    href="#"
                    class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >Custom Solutions</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >Outsourcing</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>

      <!-- About Us with Dropdown -->
      <li class="relative group">
        <a
          href="/about-us"
          class="text-lg font-semibold hover:text-blue-600 transition-colors duration-200 focus:outline-none"
        >
          About Us
        </a>
        <div
          class="absolute left-0 hidden w-52 bg-white text-gray-800 group-hover:flex shadow-2xl rounded-lg p-4 transform transition-all duration-300 ease-in-out"
        >
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >Company Profile</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >Our Customers</a
              >
            </li>
            <li class="relative group">
              <a
                href="#"
                class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >Legal</a
              >
              <div
                class="absolute left-52 hidden w-40 bg-white text-gray-800 group-hover:flex shadow-lg rounded-lg p-2 transform transition-all duration-300 ease-in-out"
              >
                <ul class="space-y-1">
                  <li>
                    <a
                      href="#"
                      class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      >Privacy</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      >Terms and Conditions</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>

      <li>
        <a
          href="/blog"
          class="text-lg font-semibold hover:text-blue-600 transition-colors duration-200"
          >Blogs</a
        >
      </li>
      <li>
        <a
          href="/contact"
          class="text-lg font-semibold hover:text-blue-600 transition-colors duration-200"
          >Contact Us</a
        >
      </li>
    </ul>
  </nav>
</template>
