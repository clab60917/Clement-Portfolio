<template>
  <header class="bg-gray-900 text-white shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="text-2xl font-bold">
          <span class="text-cyan-400">Cyber</span>Portfolio
        </div>
        <nav class="hidden md:flex space-x-6">
          <a v-for="item in menuItems" :key="item.href" :href="item.href"
             class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group">
            {{ item.text }}
            <span class="absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </nav>
        <button @click="toggleMenu" class="md:hidden focus:outline-none bg-gray-800 p-2 rounded-md">
          <i class="fas fa-bars text-cyan-400"></i>
        </button>
      </div>
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-if="menuOpen" class="md:hidden absolute top-16 inset-x-0 bg-gray-900 shadow-lg py-2">
        <div class="container mx-auto px-4">
          <div class="flex flex-col space-y-2">
            <a v-for="item in menuItems" :key="item.href" :href="item.href"
               @click="closeMenu"
               class="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">
              {{ item.text }}
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuOpen: false,
      menuItems: [
        { href: "#about", text: "À propos" },
        { href: "#skills", text: "Compétences" },
        { href: "#timeline", text: "Parcours" },
        { href: "#projects", text: "Projets" },
        { href: "#contact", text: "Contact" }
      ]
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

<style scoped>
.container {
  max-width: 1200px;
}
</style>