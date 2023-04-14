<template>
    <section id="skills">
      <h2>Compétences</h2>
      <div class="skills-container">
        <div class="subcategory">
          <h3>Programmation</h3>
          <!-- Compétences en programmation -->
          <div v-for="skill in programmingSkills" :key="skill.name" class="skill">
            <div class="skill-name">{{ skill.name }}</div>
            <div class="progress-bar">
              <div class="progress" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
        <div class="subcategory">
          <h3>Cybersécurité</h3>
          <!-- Compétences en cybersécurité -->
          <div v-for="skill in cybersecuritySkills" :key="skill.name" class="skill">
            <div class="skill-name">{{ skill.name }}</div>
            <div class="progress-bar">
              <div class="progress" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
        <div class="subcategory">
          <h3>Soft Skills</h3>
          <!-- Compétences en soft skills -->
          <div v-for="skill in softSkills" :key="skill.name" class="skill soft-skill">
            <div class="skill-name">{{ skill.name }}</div>
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
  