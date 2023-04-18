<template>
  <section id="timeline" class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-8 text-center">Parcours</h2>
      <div class="relative m-8">
        <div
          class="border-r-2 border-black absolute h-full top-0"
          style="left: 15px"
        ></div>
        <ul class="list-none m-0 p-0">
          <li v-for="(item, index) in items" :key="index" class="mb-12">
            <div class="flex items-center mb-1">
              <div
                class="bg-black rounded-full h-8 w-8 border-4 border-white z-10"
                :class="{
                  'ml-0 -mr-4': index % 2 === 0,
                  'ml-auto mr-0 -ml-4': index % 2 === 1,
                }"
              ></div>
              <div
                class="w-full bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                :class="{ 'ml-4': index % 2 === 0, 'mr-4': index % 2 === 1 }"
              >
                <h3 class="text-2xl font-semibold mb-2">{{ item.title }}</h3>
                <img
                  class="logo h-16 w-auto mb-4"
                  :src="item.logo"
                  :alt="`Logo ${item.title}`"
                />
                <p class="leading-6">{{ item.description }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Timeline",
  data() {
    return {
      items: [
        {
          title: "Diplôme d'ingénieur",
          logo: "/assets/img/1280px-Institut_supérieur_d'électronique_de_Paris.svg.png",
          description:
            "2024 : diplôme d'ingénieur du numérique spécialisé en Cybersécurité.",
        },
        {
          title: "Stage Pentest Groupe La Poste",
          logo: "~/assets/img/Logo-groupe-la-poste-2021.png",
          description:
            "Stage de 6 mois en tant que pentesteur web + réseau au sein de la BGPN du groupe La Poste.",
        },
        {
          title: "Président Innovation Hub",
          logo: "~/assets/img/Garage ISEP Logo Horizontal Black (1).png",
          description:
            "Président de Garage Isep pour le mandat 2023-2024 du plus grand Innovation Hub étudiant de France.",
        },
        {
          title: "Erasmus CVUT Prague",
          logo: "~/assets/img/Czech_Technical_University_in_Prague_logo_with_text.gif",
          description:
            "Échange universitaire de 6 mois à l'école Polytechnique de Prague.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
