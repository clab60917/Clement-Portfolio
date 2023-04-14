<template>
    <section>
      <div
        class="ring-offset-white ring-offset-1/2 ring-white/20 ring-1 h-fit w-screen max-w-screen p-4 flex overflow-hidden"
        style="background-color: #333 !important;"
      >
        <div class="carrousel">
          <div class="carrousel-inner">
            <img
              v-for="image in carouselImages"
              :key="image.src"
              :src="image.src"
              :height="image.height"
              :width="image.width"
              :alt="image.alt"
            />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        carouselImages: [
          {
            src: "images/Garage ISEP Logo Horizontal Black (1).png",
            height: 100,
            width: 250,
            alt: "",
          },
          {
            src: "images/1280px-Institut_supérieur_d'électronique_de_Paris.svg.png",
            height: 100,
            width: 250,
            alt: "",
          },
          {
            src: "images/Logo-groupe-la-poste-2021.png",
            height: 100,
            width: 250,
            alt: "",
          },
          {
            src: "images/Czech_Technical_University_in_Prague_logo_with_text.gif",
            height: 100,
            width: 250,
            alt: "",
          },
          {
            src: "images/orange.png",
            height: 100,
            width: 250,
            alt: "",
          },
          // Ajoutez d'autres images de carrousel ici si nécessaire
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Insérez ici vos styles CSS pour le composant Carousel */
  </style>
  