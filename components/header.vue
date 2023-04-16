<template>
    <header class="bg-white shadow-md">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <div class="font-semibold text-xl">
          Portfolio de Clément
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#about" class="text-gray-800 hover:text-blue-600">À propos</a>
          <a href="#skills" class="text-gray-800 hover:text-blue-600">Compétences</a>
          <a href="#timeline" class="text-gray-800 hover:text-blue-600">Parcours</a>
          <a href="#projects" class="text-gray-800 hover:text-blue-600">Projets</a>
          <a href="#contact" class="text-gray-800 hover:text-blue-600">Contact</a>
        </div>
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-800">
            <i class="fas fa-bars"></i>
          </button>
          <div v-if="menuOpen" class="absolute bg-white mt-2 right-0 py-2 w-48 shadow-md z-10">
            <a href="#about" @click="closeMenu" class="block px-4 py-2 text-gray-800 hover:text-blue-600">À propos</a>
            <a href="#skills" @click="closeMenu" class="block px-4 py-2 text-gray-800 hover:text-blue-600">Compétences</a>
            <a href="#timeline" @click="closeMenu" class="block px-4 py-2 text-gray-800 hover:text-blue-600">Parcours</a>
            <a href="#projects" @click="closeMenu" class="block px-4 py-2 text-gray-800 hover:text-blue-600">Projets</a>
            <a href="#contact" @click="closeMenu" class="block px-4 py-2 text-gray-800 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>
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
  