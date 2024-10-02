<template>
  <section id="projects" class="bg-gray-900 py-16 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center text-cyan-400">Projets</h2>
      <div class="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Projet 1 -->
        <div
          class="project p-6 bg-gray-800 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 class="text-2xl font-bold mb-4 text-cyan-400">
            Finaliste Concours Cyber de Devoteam
          </h3>
          <p class="mb-4 text-gray-300">
            Finaliste du concours de cybersécurité "Devogame" sur plus de 3800 participants. Proposition
            d'un système de vérification des logs utilisant une blockchain privée et un consensus via clés privées.
          </p>
          <div class="mt-4">
            <span class="inline-block bg-cyan-600 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Blockchain</span>
            <span class="inline-block bg-cyan-600 text-gray-900 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">Cybersécurité</span>
          </div>
        </div>
        
        <!-- Projet 2 -->
        <div
          class="project bg-gray-800 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 class="text-2xl font-bold mb-4 text-cyan-400">Participation à des CTF</h3>
          <p class="mb-4 text-gray-300">
            Participation active à divers Capture The Flag (CTF) pour renforcer mes compétences en cybersécurité :
          </p>
          <div class="logos-container grid grid-cols-2 gap-4 mt-4">
            <div class="bg-white p-2 rounded-md flex items-center justify-center">
              <img class="h-12 object-contain" src="~/assets/img/pico.png" alt="PicoCTF" />
            </div>
            <div class="bg-white p-2 rounded-md flex items-center justify-center">
              <img class="h-12 object-contain" src="~/assets/img/blackbox-500x500_resize.png" alt="MidnightCTF" />
            </div>
            <div class="bg-white p-2 rounded-md flex items-center justify-center">
              <img class="h-12 object-contain" src="~/assets/img/rootme.png" alt="Root Me" />
            </div>
            <div class="bg-white p-2 rounded-md flex items-center justify-center">
              <img class="h-12 object-contain" src="~/assets/img/téléchargement5.jpeg" alt="OverTheWire" />
            </div>
          </div>
        </div>

        <!-- Projet 3 -->
        <div
          class="project p-6 bg-gray-800 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 class="text-2xl font-bold mb-4 text-cyan-400">RAG LLM Analyst SOC</h3>
          <p class="mb-4 text-gray-300">
            POC explorant l'utilisation d'un modèle RAG LLM pour assister ou remplacer un analyste SOC de niveau 1. 
            Ce projet de recherche vise à améliorer l'efficacité des opérations de sécurité.
          </p>
          <a
            href="https://github.com/clab60917/RAG-LLM-SOC_analyst"
            target="_blank"
            class="text-cyan-400 hover:text-cyan-300 transition-colors"
          >Voir le projet sur GitHub</a>
          <div class="mt-4">
            <img 
              src="https://github-readme-stats.vercel.app/api/pin/?username=clab60917&repo=RAG-LLM-SOC_analyst&theme=dark"
              alt="GitHub Repo Card"
              class="w-full rounded-md shadow-md"
            />
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
</style>