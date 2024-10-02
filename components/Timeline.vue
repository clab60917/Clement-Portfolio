<template>
  <section id="timeline" class="bg-gray-900 py-16 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center text-cyan-400">Parcours</h2>
      <div class="relative">
        <div
          class="border-r-2 border-cyan-400 absolute h-full top-0"
          style="left: 50%"
        ></div>
        <ul class="list-none m-0 p-0">
          <li v-for="(item, index) in items" :key="index" class="mb-16">
            <div class="flex items-center mb-1"
                 :class="{ 'flex-row-reverse': index % 2 === 1 }">
              <div
                class="bg-cyan-400 rounded-full h-10 w-10 border-4 border-gray-900 z-10 flex items-center justify-center"
                :class="{
                  'mr-6': index % 2 === 0,
                  'ml-6': index % 2 === 1,
                }"
              >
                <i class="fas fa-shield-alt text-gray-900"></i>
              </div>
              <div
                class="w-5/12 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transform transition-all duration-300 hover:scale-105"
                :class="{ 'mr-6': index % 2 === 0, 'ml-6': index % 2 === 1 }"
              >
                <h3 class="text-2xl font-bold mb-2 text-cyan-400">{{ item.title }}</h3>
                <div class="flex items-center mb-4">
                  <div v-if="Array.isArray(item.logo)" class="flex space-x-2">
                    <div v-for="(logo, logoIndex) in item.logo" :key="logoIndex" class="bg-white p-2 rounded-md">
                      <img
                        class="h-12 w-auto object-contain"
                        :src="logo"
                        :alt="`Logo ${item.title} ${logoIndex + 1}`"
                      />
                    </div>
                  </div>
                  <div v-else class="bg-white p-2 rounded-md mr-4">
                    <img
                      class="h-12 w-auto object-contain"
                      :src="item.logo"
                      :alt="`Logo ${item.title}`"
                    />
                  </div>
                  <p class="text-sm text-gray-400">{{ item.date }}</p>
                </div>
                <p class="leading-6 text-gray-300">{{ item.description }}</p>
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
          title: "Mastère Spécialisé Cybersécurité",
          logo: [
            "https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Logo_CentraleSup%C3%A9lec.svg/2560px-Logo_CentraleSup%C3%A9lec.svg.png", // CentraleSupelec logo
            "https://upload.wikimedia.org/wikipedia/commons/b/b0/IMT_logo_2017.png" // IMT Atlantique logo
          ],
          date: "2025",
          description: "Mastère Spécialisé Cybersécurité co-délivré par CentraleSupelec et IMT Atlantique",
        },
        {
          title: "Consultant Cyberdéfense - Stage de fin d'études",
          logo: "https://join.headmind.com/wp-content/uploads/2021/12/Logo-HeadMind-Partners-PNG-BLEU.png", // Headmind Partners logo
          date: "2024",
          description: "Mission de cyberdéfense chez un client grand compte.",
        },
        {
          title: "Diplôme d'ingénieur sécurité numérique et réseaux",
          logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/21/Institut_sup%C3%A9rieur_d%27%C3%A9lectronique_de_Paris.svg/1280px-Institut_sup%C3%A9rieur_d%27%C3%A9lectronique_de_Paris.svg.png", 
          date: "2024",
          description: "Diplôme d'ingénieur",
        },
        {
          title: "Erasmus Sapienza - Cursus Cyber",
          logo: "https://www.dafont.com/forum/attach/orig/7/7/773753.png", // Headmind Partners logo
          date: "2023",
          description: "Cursus de 6 mois avec cours intensifs de cybersécurité",
        },
        {
          title: "Président Garage ISEP",
          logo: "https://garageisep.com/images/logo-black.png", // Headmind Partners logo
          date: "2022",
          description: "Président du plus grand innovation hub étudiant de France, avec 80 personnes à manager.",
        },
        {
          title: "Stage pentest",
          logo: "https://upload.wikimedia.org/wikipedia/fr/0/02/Logo-groupe-la-poste-2021.png", // Headmind Partners logo
          date: "2022",
          description: "Stage de 6 mois en tant que pentesteur web + réseau au sein de la BGPN du groupe La Poste.",
        },
        {
          title: "Finalist in Devoteam's Cyber Hackthon",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Dev_logo_rgb.png/640px-Dev_logo_rgb.png", // Headmind Partners logo
          date: "2021",
          description: "Finalist in the 'Devogame' cybersecurity competition organised by Devoteam out of more than 3,800 entrants. Proposed a system for verifying a company's logs using a private blockchain and a consensus system based on private keys.",
        },
        {
          title: "Consultant Cyberdéfense - Stage de fin d'études",
          logo: "https://join.headmind.com/wp-content/uploads/2021/12/Logo-HeadMind-Partners-PNG-BLEU.png", // Headmind Partners logo
          date: "2024",
          description: "Mission de cyberdéfense chez un client grand compte.",
        },
        
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>