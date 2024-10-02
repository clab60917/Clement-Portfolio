<template>
  <section id="projects" class="py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-8 text-center">Projets</h2>
      <div class="projects-container grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Projet 1 -->
        <div
          class="project p-6 bg-white shadow-md rounded-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 class="text-2xl font-semibold mb-4">
            Finaliste Concours Cyber de Devoteam
          </h3>
          <p class="mb-4">
            Finaliste du concours de cybersécurité "Devogame" organisé par
            l'entreprise Devoteam sur plus de 3800 participants. Proposition
            d'un système de vérification des logs d'une entreprise en utilisant
            une blockchain privée et un système de consensus via clés privées.
          </p>
        </div>
        <!-- Projet 2 -->
        <div
          class="project2 bg-white shadow-md rounded-lg p-6 mb-4"
          data-aos="fade-up"
        >
          <h3 class="text-2xl font-semibold mb-4">Participation à des CTF</h3>
          <p class="mb-4">
            Participation à différents CTF dont : PicoCTF MidnightCTF RootmeCTF OverTheWire
            
          </p>
          <div class="logos-container flex flex-wrap justify-center">
            <img
              class="project-logo w-1/2"
              src="~/assets/img/pico.png"
              alt="Logo 1"
            />
            <img
              class="project-logo w-1/2"
              src="~/assets/img/blackbox-500x500_resize.png"
              alt="Logo 2"
            />
            <img
              class="project-logo w-1/2"
              src="~/assets/img/rootme.png"
              alt="Logo 3"
            />
            <img
              class="project-logo w-1/2"
              src="~/assets/img/téléchargement5.jpeg"
              alt="Logo 4"
            />
          </div>
        </div>
<!-- Projet 4 -->
<div
  class="project p-6 bg-white shadow-md rounded-lg"
  data-aos="fade-up"
  data-aos-delay="800"
>
  <h3 class="text-2xl font-semibold mb-4">RAG LLM Analyst SOC</h3>
  <p class="mb-4">
    Welcome to the SOC Analyst Level 1 Replacement using RAG LLM project! This repository presents a small research-oriented Proof of Concept (POC) aimed at exploring the feasibility of using a Retrieval-Augmented Generation (RAG) Large Language Model (LLM) to replace or assist a Level 1 SOC (Security Operations Center) Analyst.
  </p>
  <p>
    <a
      href="https://github.com/clab60917/RAG-LLM-SOC_analyst"
      target="_blank"
      class="text-blue-600"
    >Voir projet ici</a>
  </p>
  <iframe
    class="w-full sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-2/3 2xl:w-2/3 mt-4"
    src="https://github-readme-stats.vercel.app/api/pin/?username=clab60917&repo=RAG-LLM-SOC_analyst&theme=radical"
    frameborder="0"
    height="200"
  ></iframe>
</div>




        <!-- Projet 3 -->
        <div
          class="project p-6 bg-white shadow-md rounded-lg"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <h3 class="text-2xl font-semibold mb-4">OSINT tool</h3>
          <p class="mb-4">
            Il s'agit d'un outil d'OSINT réalisé pour me simplifier la tâche
            lors de pentests. Il est entièrement réalisé en python et s'exécute
            directement dans le terminal.
          </p>
          <p>
            <a
              href="https://github.com/clab60917/Osint-IP-URL"
              target="_blank"
              class="text-blue-600"
              >Voir projet ici</a
            >
          </p>
          <iframe
            class="w-full sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-2/3 2xl:w-2/3"
            src="https://github-readme-stats.vercel.app/api/pin/?username=clab60917&repo=Osint-IP-URL&theme=default"
            frameborder="0"
            height="225"
          ></iframe>
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
    AOS.init();
  },
};
</script>

<style scoped>
.project-logo {
  height: 3rem;
  width: auto;
  object-fit: contain;
  margin: 0.5rem;
  display: inline-block;
}

.project2 {
  overflow: hidden;
}
</style>
