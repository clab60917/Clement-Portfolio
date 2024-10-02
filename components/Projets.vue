<template>
  <section id="projects" class="bg-gray-900 py-16 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center text-cyan-400">Projets</h2>
      <div class="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Projet 1: Ping Status -->
        <div
          class="project bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="github-preview-container" style="height: 200px;">
            <iframe 
              src="https://github-readme-stats.vercel.app/api/pin/?username=clab60917&repo=ping_status&theme=dark" 
              frameborder="0" 
              scrolling="no" 
              width="100%" 
              height="100%"
            ></iframe>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-4 text-cyan-400">
              Ping Status
            </h3>
            <p class="mb-4 text-gray-300">
              Une application Python pour surveiller l'état de connectivité des appareils sur un réseau. Utilise une interface graphique Tkinter et des threads pour des vérifications en temps réel.
            </p>
            <div class="mb-4">
              <span class="inline-block bg-cyan-600 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Python</span>
              <span class="inline-block bg-cyan-600 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Tkinter</span>
              <span class="inline-block bg-cyan-600 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Networking</span>
            </div>
            <a
              href="https://github.com/clab60917/ping_status"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Voir sur GitHub <i class="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
        </div>
        
        <!-- Projet 2: Final DApp Timeless -->
        <div
          class="project bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="github-preview-container" style="height: 200px;">
            <iframe 
              src="https://github-readme-stats.vercel.app/api/pin/?username=clab60917&repo=final-dapp-timeless&theme=dark" 
              frameborder="0" 
              scrolling="no" 
              width="100%" 
              height="100%"
            ></iframe>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-4 text-cyan-400">
              Final DApp Timeless
            </h3>
            <p class="mb-4 text-gray-300">
              Une application décentralisée (DApp) basée sur Ethereum pour la gestion et la vente de NFTs. Utilise Solidity pour les contrats intelligents et React pour l'interface utilisateur.
            </p>
            <div class="mb-4">
              <span class="inline-block bg-cyan-600 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Solidity</span>
              <span class="inline-block bg-cyan-600 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">React</span>
              <span class="inline-block bg-cyan-600 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Ethereum</span>
            </div>
            <a
              href="https://github.com/clab60917/final-dapp-timeless"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Voir sur GitHub <i class="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
        </div>

        <!-- Projet 3: RAG LLM Analyst SOC -->
        <div
          class="project bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div class="github-preview-container" style="height: 200px;">
            <iframe 
              src="https://github-readme-stats.vercel.app/api/pin/?username=clab60917&repo=RAG-LLM-SOC_analyst&theme=dark" 
              frameborder="0" 
              scrolling="no" 
              width="100%" 
              height="100%"
            ></iframe>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-4 text-cyan-400">RAG LLM Analyst SOC</h3>
            <p class="mb-4 text-gray-300">
              POC explorant l'utilisation d'un modèle RAG LLM pour assister ou remplacer un analyste SOC de niveau 1. 
              Ce projet de recherche vise à améliorer l'efficacité des opérations de sécurité.
            </p>
            <div class="mb-4">
              <span class="inline-block bg-cyan-600 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">AI</span>
              <span class="inline-block bg-cyan-600 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Cybersecurity</span>
              <span class="inline-block bg-cyan-600 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">LLM</span>
            </div>
            <a
              href="https://github.com/clab60917/RAG-LLM-SOC_analyst"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Voir sur GitHub <i class="fas fa-external-link-alt ml-2"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "Projects",
  mounted() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.github-preview-container {
  background-color: #0d1117; /* GitHub dark theme background color */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>