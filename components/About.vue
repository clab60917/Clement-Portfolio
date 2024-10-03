<template>
  <section id="about" class="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <h1 class="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Clément Arthaud-Berthet
          </h1>
          <h2 class="text-3xl font-bold mb-6 text-cyan-300">Ingénieur en Cybersécurité</h2>
          <div class="space-y-4">
            <p class="text-lg">
              Passionné par la cybersécurité, je bénéficie d'expériences en sécurité offensive et réponse à incidents. 
              Actuellement en Mastère Spécialisé Cybersécurité délivré par CentraleSupelec et IMT Atlantique.
              Je suis également très intéressé par les domaines de l'intelligence artificielle et la Blockchain.
            </p>
            <div class="flex space-x-4">
              <span class="bg-blue-700 text-white px-3 py-1 rounded-full text-sm">Pentesting</span>
              <span class="bg-blue-700 text-white px-3 py-1 rounded-full text-sm">Réponse à incidents</span>
              <span class="bg-blue-700 text-white px-3 py-1 rounded-full text-sm">OSINT</span>
              <span class="bg-blue-700 text-white px-3 py-1 rounded-full text-sm">Sécurité des SI</span>
            </div>
          </div>
          <div class="flex space-x-6">
            <a href="mailto:clement.arthaud-berthet@student-cs.fr" class="text-cyan-300 hover:text-white transition-colors">
              <i class="fas fa-envelope text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/cl%C3%A9ment-arthaud-berthet-42b57618a/" target="_blank" rel="noopener noreferrer" class="text-cyan-300 hover:text-white transition-colors">
              <i class="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://github.com/clab60917" target="_blank" rel="noopener noreferrer" class="text-cyan-300 hover:text-white transition-colors">
              <i class="fab fa-github text-2xl"></i>
            </a>
            <a href="https://publish.obsidian.md/130101" target="_blank" rel="noopener noreferrer" 
   class="bg-cyan-600 text-white px-4 py-2 rounded-full hover:bg-cyan-700 transition-colors flex items-center gap-2">
  <i class="fas fa-book-open text-lg"></i>
  <span>Notes Cybersécurité</span>
</a>
          </div>
        </div>
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl transform -rotate-6"></div>
          <img src="~/assets/img/pc.png" alt="Clément Arthaud-Berthet" class="relative z-10 rounded-xl shadow-2xl w-full h-auto object-cover" />
        </div>
      </div>
      <div class="mt-16">
        <h3 class="text-2xl font-bold mb-6 text-cyan-300">Compétences clés</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
            <i class="fas fa-shield-alt text-4xl text-cyan-300 mb-4"></i>
            <h4 class="text-xl font-semibold mb-2">Sécurité Offensive</h4>
            <p>Réalisation de quelques pentests web et réseaux, participation à des challenges CTF.</p>
          </div>
          <div class="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
            <i class="fas fa-search text-4xl text-cyan-300 mb-4"></i>
            <h4 class="text-xl font-semibold mb-2">OSINT</h4>
            <p>Maîtrise des techniques de recherche et d'analyse d'informations en sources ouvertes pour évaluer les risques.</p>
          </div>
          <div class="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
            <i class="fas fa-network-wired text-4xl text-cyan-300 mb-4"></i>
            <h4 class="text-xl font-semibold mb-2">Réponse à incidents</h4>
            <p>Connaissance approfondie des enjeux et des meilleures pratiques en matière de réponse à incident. Dispose d'une premiere expérience en analyse forensic.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

#about {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
</style>