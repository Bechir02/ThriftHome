<template>
  <footer class="bg-primary-800 text-white mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">Thrift Home</h3>
          <p class="text-gray-300">
            Curated vintage and thrift items for your home.
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/about" class="text-gray-300 hover:text-white">
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-gray-300 hover:text-white">
                Contact
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="text-gray-300 hover:text-white">
                FAQ
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Connect With Us</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-white">
              Instagram
            </a>
            <a href="#" class="text-gray-300 hover:text-white">
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
        <p>&copy; {{ new Date().getFullYear() }} Thrift Home. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>