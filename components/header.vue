<template>
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-6">
          <div class="text-3xl font-semibold">
            Portfolio de Clément
          </div>
          <nav class="hidden md:flex space-x-8">
            <a href="#about" class="text-lg hover:text-gray-700 transition-colors">À propos</a>
            <a href="#skills" class="text-lg hover:text-gray-700 transition-colors">Compétences</a>
            <a href="#timeline" class="text-lg hover:text-gray-700 transition-colors">Parcours</a>
            <a href="#projects" class="text-lg hover:text-gray-700 transition-colors">Projets</a>
            <a href="#contact" class="text-lg hover:text-gray-700 transition-colors">Contact</a>
          </nav>
          <button @click="toggleMenu" class="md:hidden focus:outline-none">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
        <div v-if="menuOpen" class="flex flex-col space-y-4 mt-4 md:hidden">
          <a href="#about" @click="closeMenu" class="text-lg hover:text-gray-700 transition-colors">À propos</a>
          <a href="#skills" @click="closeMenu" class="text-lg hover:text-gray-700 transition-colors">Compétences</a>
          <a href="#timeline" @click="closeMenu" class="text-lg hover:text-gray-700 transition-colors">Parcours</a>
          <a href="#projects" @click="closeMenu" class="text-lg hover:text-gray-700 transition-colors">Projets</a>
          <a href="#contact" @click="closeMenu" class="text-lg hover:text-gray-700 transition-colors">Contact</a>
        </div>
      </div>
    </header>
  </template>
  
  
  <script>
  export default {
    name: "Header",
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      },
      closeMenu() {
        this.menuOpen = false;
      },
    },
  };
  </script>
  