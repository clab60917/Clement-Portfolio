<template>
  <section id="contact" class="py-16 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center text-cyan-400">Contact</h2>
      <div class="contact-container grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Email -->
        <div
          class="contact-item flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
        >
          <div class="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
            <i class="fas fa-envelope text-3xl text-gray-900"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-cyan-400">Email</h3>
          <a href="mailto:clement.arthaud-berthet@student-cs.fr" class="text-lg text-center hover:text-cyan-300 transition-colors">
            clement.arthaud-berthet@student-cs.fr
          </a>
        </div>
        <!-- LinkedIn -->
        <div
          class="contact-item flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
        >
          <div class="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
            <i class="fab fa-linkedin-in text-3xl text-gray-900"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-cyan-400">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-arthaud-berthet-42b57618a/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg text-center hover:text-cyan-300 transition-colors"
          >
            Clément Arthaud-Berthet
          </a>
        </div>
        <!-- GitHub -->
        <div
          class="contact-item flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
        >
          <div class="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mb-4">
            <i class="fab fa-github text-3xl text-gray-900"></i>
          </div>
          <h3 class="text-2xl font-bold mb-4 text-cyan-400">GitHub</h3>
          <a
            href="https://github.com/clab60917"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg text-center hover:text-cyan-300 transition-colors"
          >
            @clab60917
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
.container {
  max-width: 1200px;
}
</style>