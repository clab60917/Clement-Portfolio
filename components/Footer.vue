<template>
  <footer class="bg-gray-900 text-gray-300 py-12 border-t border-cyan-800">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-cyan-400 mb-4">À propos</h3>
          <p class="text-sm leading-relaxed">
            Étudiant ingénieur passionné par la cybersécurité, je me spécialise dans la protection des systèmes d'information et la réponse aux incidents. Toujours à l'affût des dernières innovations en matière de sécurité numérique.
          </p>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-cyan-400 mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li v-for="item in navigationItems" :key="item.href">
              <a :href="item.href" class="hover:text-cyan-400 transition-colors duration-300">{{ item.label }}</a>
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-cyan-400 mb-4">Contact</h3>
          <p class="text-sm">clement.arthaud-berthet@student-cs.fr</p>
          <div class="flex space-x-4 mt-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <i :class="['fab', social.icon, 'text-2xl']"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-sm">
          &copy; {{ new Date().getFullYear() }} Clément Arthaud-Berthet. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      email: '',
      navigationItems: [
        { href: "#about", label: "À propos" },
        { href: "#skills", label: "Compétences" },
        { href: "#timeline", label: "Parcours" },
        { href: "#projects", label: "Projets" },
        { href: "#contact", label: "Contact" }
      ],
      socialLinks: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/cl%C3%A9ment-arthaud-berthet-42b57618a/", icon: "fa-linkedin-in" },
        { name: "GitHub", url: "https://github.com/clab60917", icon: "fa-github" }
      ]
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>