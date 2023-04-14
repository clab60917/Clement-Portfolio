<template>
    <section id="skills" class="bg-gray-100 py-12">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold mb-8 text-center">Compétences</h2>
        <div class="skills-container grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Programmation -->
          <div class="subcategory">
            <h3 class="text-2xl font-semibold mb-6">Programmation</h3>
            <div v-for="skill in programmingSkills" :key="skill.name" class="skill mb-4">
              <div class="skill-name text-lg mb-1">{{ skill.name }}</div>
              <div class="progress-bar w-full h-2 bg-gray-300">
                <div class="progress h-full" :style="{ width: skill.level + '%', backgroundColor: 'rgba(59, 130, 246, 1)' }"></div>
              </div>
            </div>
          </div>
          <!-- Cybersécurité -->
          <div class="subcategory">
            <h3 class="text-2xl font-semibold mb-6">Cybersécurité</h3>
            <div v-for="skill in cybersecuritySkills" :key="skill.name" class="skill mb-4">
              <div class="skill-name text-lg mb-1">{{ skill.name }}</div>
              <div class="progress-bar w-full h-2 bg-gray-300">
                <div class="progress h-full" :style="{ width: skill.level + '%', backgroundColor: 'rgba(59, 130, 246, 1)' }"></div>
              </div>
            </div>
          </div>
          <!-- Soft Skills -->
          <div class="subcategory">
            <h3 class="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div class="flex flex-wrap gap-4">
              <div v-for="skill in softSkills" :key="skill" class="skill p-2 rounded-lg bg-blue-500 text-white">
                <div class="skill-name">{{ skill }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        programmingSkills: [
          { name: "Python", level: 90 },
          { name: "Bash", level: 80 },
          { name: "PHP", level: 75 },
          { name: "Java", level: 60 },
          { name: "Javascript", level: 65 },
          { name: "SQL", level: 70 },
          { name: "HTML & CSS", level: 85 },
          { name: "Assembleur", level: 40 },
        ],
        cybersecuritySkills: [
          { name: "Kali Linux", level: 90 },
          { name: "BurpSuit Pro", level: 80 },
          { name: "Virtualisation", level: 75 },
          { name: "Pentest Réseau", level: 60 },
          { name: "Pentest Web", level: 65 },
          { name: "IBM Qradar", level: 70 },
          { name: "VPS", level: 85 },
          { name: "OSINT", level: 40 },
        ],
        softSkills: [
          "Management",
          "Esprit d'équipe",
          "Adaptable",
          "Autodidacte",
          "Facilité de communication",
          "Intégrité",
        "Sérieux",
      ],
    };
  },
};
</script>

<style scoped>
/* Insérez ici vos styles CSS pour le composant Skills */
</style>

         
  