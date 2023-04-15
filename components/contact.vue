<template>
    <section id="contact" class="py-12 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-12 text-center">Contact</h2>
        <div class="contact-container grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Email -->
          <div class="contact-item flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <i class="fas fa-envelope text-4xl mb-4 text-blue-500"></i>
            <h3 class="text-2xl font-semibold mb-4">Email</h3>
            <p class="text-lg">clement.arthaud-berthet@garageisep.com</p>
          </div>
          <!-- LinkedIn -->
          <div class="contact-item relative flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-arthaud-berthet-42b57618a/" target="_blank" class="absolute text-center">
              <h3 class="text-2xl font-semibold mb-4">LinkedIn</h3>
              <i class="fab fa-linkedin text-4xl text-blue-500"></i>
            </a>
          </div>
          <!-- GitHub -->
          <div class="contact-item relative flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <a href="https://github.com/clab60917" target="_blank" class="absolute text-center">
              <h3 class="text-2xl font-semibold mb-4">GitHub</h3>
              <i class="fab fa-github text-4xl text-gray-800"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactSection",
  };
  </script>
  
  <style scoped>
  /* Ajoutez ici vos styles CSS spécifiques à ce composant */
  </style>
  