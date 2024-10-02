<template>
  <section id="skills" class="bg-gray-900 py-16 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center text-cyan-400">Compétences</h2>
      <div class="skills-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Programmation -->
        <div class="subcategory bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold mb-6 text-cyan-400">Programmation</h3>
          <div
            v-for="skill in programmingSkills"
            :key="skill.name"
            class="skill mb-4"
          >
            <div class="flex justify-between items-center mb-1">
              <div class="skill-name text-lg">{{ skill.name }}</div>
              <div class="text-sm text-gray-400">{{ skill.level }}%</div>
            </div>
            <div class="progress-bar w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                class="progress h-full rounded-full"
                :style="{
                  width: skill.level + '%',
                  backgroundColor: 'rgba(6, 182, 212, 0.8)',
                }"
              ></div>
            </div>
          </div>
        </div>
        
        <!-- Cybersécurité -->
        <div class="subcategory bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold mb-6 text-cyan-400">Cybersécurité</h3>
          <div
            v-for="skill in cybersecuritySkills"
            :key="skill.name"
            class="skill mb-4"
          >
            <div class="flex justify-between items-center mb-1">
              <div class="skill-name text-lg">{{ skill.name }}</div>
              <div class="text-sm text-gray-400">{{ skill.level }}%</div>
            </div>
            <div class="progress-bar w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                class="progress h-full rounded-full"
                :style="{
                  width: skill.level + '%',
                  backgroundColor: 'rgba(6, 182, 212, 0.8)',
                }"
              ></div>
            </div>
          </div>
        </div>
        
        <!-- Soft Skills -->
        <div class="subcategory bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-bold mb-6 text-cyan-400">Soft Skills</h3>
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="skill in softSkills"
              :key="skill"
              class="skill p-3 rounded-lg bg-cyan-600 text-gray-900 font-semibold text-center transform transition-transform duration-300 hover:scale-105"
            >
              {{ skill }}
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
        { name: "C", level: 75 },
        { name: "SQL", level: 70 },
        { name: "Assembleur", level: 50 },
      ],
      cybersecuritySkills: [
        { name: "Linux", level: 95 },
        { name: "BurpSuit Pro", level: 70 },
        { name: "Virtualisation", level: 85 },
        { name: "Forensic", level: 70 },
        { name: "Analyse de Malware", level: 70 },
        { name: "Analyse de Risques", level: 90 },
        { name: "OSINT", level: 80 },
        { name: "Cryptographie", level: 60 },
      ],
      softSkills: [
        "Management",
        "Esprit d'équipe",
        "Adaptabilité",
        "Autodidacte",
        "Communication",
        "Intégrité",
        "Rigueur",
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.progress {
  transition: width 1s ease-in-out;
}
</style>