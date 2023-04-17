<template>
    <section id="about" class="hero bg-gray-100 py-16">
      <div class="about-container mx-auto max-w-screen-2xl rounded-lg bg-white shadow-lg p-8 animate-fade-in">
        <div class="flex flex-wrap justify-between items-start md:items-stretch lg:items-start">

          <div class="about-image w-full md:w-1/4 md:pr-8 mb-4">
            <img src="images/pc.jpg" alt="Photo de profil de Clément John" class="profile-image w-full h-auto rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105" />
          </div>
          <div class="about-content w-full md:w-3/4 mt-10 md:mt-0">
            <h1 class="text-4xl font-bold mb-4 animate-slide-in-from-left"></h1>
            <h2 class="text-2xl font-semibold mb-6 animate-slide-in-from-left"></h2>
            <div class="about-text mb-8 animate-slide-in-from-right">
            <a href="mailto:clement.arthaud-berthet@eleve.isep.fr" class="email-link text-blue-500 hover:text-blue-600 transition-colors mb-6 inline-block">clement.arthaud-berthet@eleve.isep.fr</a>
            <div class="social-icons flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/cl%C3%A9ment-arthaud-berthet-42b57618a/" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:text-blue-800 transition-colors icon-linkedin"><i class="fab fa-linkedin text-3xl"></i></a>
              <a href="https://github.com/clab60917" target="_blank" rel="noopener noreferrer" class="text-gray-800 hover:text-gray-900 transition-colors icon-github"><i class="fab fa-github text-3xl"></i></a>
              <a href="" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-500 transition-colors icon-twitter"><i class="fab fa-twitter text-3xl"></i></a>
            </div>
          </div>
        </div>
        <div class="about-content w-full md:w-2/5 mt-10 md:mt-0">
          <h1 class="text-4xl font-bold mb-4">Clément Arthaud-Berthet</h1>
          <h2 class="text-2xl font-semibold mb-6">À propos de moi</h2>
          <div class="about-text mb-8">
            <p class="text-base leading-6">Passionné par la cybersécurité, je bénéficie d'expériences en sécurité offensive et participe à différents CTF. Je possède une bonne connaissance de la sécurité des SI et des enjeux cyber actuels. Rigoureux et méthodique, j'aime chercher et vérifier les informations via l'OSINT.
            Doté d'une grande capacité d'organisation et d'adaptation, je sais m'intégrer dans de nouveaux contextes de travail grace à un véritable esprit d'équipe.</p>
          </div>
          <div class="experience mb-8">
          <h3 class="text-xl font-semibold mb-4">Recherche de Stage</h3>
          <div class="experience-item">
            <p class="text-base leading-6">Je cherche actuellement un stage de fin d'études (M2) pour une durée de 6 mois, dans le domaine de la cybersécurité. Je suis attiré par les postes suivants : analyste cyber, pentesteur, chef de projet cyber. Je reste ouvert à toute proposition tierce en rapport avec mon domaine d'activité.</p>
          </div>
      </div>
      <div class="interests mb-8">
        <h3 class="text-xl font-semibold mb-4">Intérêts supplémentaires</h3>
        <div class="interests-container flex items-center mb-4">
          <div class="interest-item mr-4">
            <i class="fas fa-cubes text-2xl"></i>
            <p class="mt-1 text-base font-medium">Blockchain</p>
          </div>
          <div class="interest-item">
            <i class="fas fa-brain text-2xl"></i>
            <p class="mt-1 text-base font-medium">Intelligence artificielle</p>
          </div>
        </div>
        <p class="text-base leading-6"></p>
      </div>
      <a href="path/to/your/cv.pdf" download class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors">Télécharger le CV en PDF</a>
  </div>
  <div class="widget-container w-11/12 h-full md:w-1/3 md:pl-8 mt-10 md:mt-0">
  <div class="widget bg-blue-500 p-4 rounded-lg shadow-md h-[900px] overflow-y-auto">
    <h3 class="text-xl font-semibold text-white mb-4">Veille en cybersécurité</h3>
    <div class="widget-content space-y-4">
      <!-- News Item 1 -->
      <div class="news-item bg-white p-4 rounded-lg shadow-md">
        <div class="flex flex-col md:flex-row">
          <img src="https://www.scmagazine.com/_next/image?url=https%3A%2F%2Ffiles.scmagazine.com%2Fwp-content%2Fuploads%2F2022%2F03%2FPicture1-3.jpg&w=750&q=75" alt="Ransomware et Cybersécurité" class="w-full h-32 object-cover rounded mb-2 md:mb-0 md:mr-4">
          <div class="flex flex-col justify-between">
            <h4 class="text-lg font-semibold">Ransomware et Cybersécurité</h4>
            <p class="text-base leading-6">Comprendre le ransomware et les meilleures pratiques pour se protéger contre les cyberattaques.</p>
            <a href="https://www.scmagazine.com/sw-article/asset-management/security-hygiene-doing-all-the-little-things-right-all-the-time" class="text-blue-500 hover:text-blue-700">En savoir plus</a>
          </div>
        </div>
      </div>
      <!-- News Item 2 -->
      <div class="news-item bg-white p-4 rounded-lg shadow-md">
        <div class="flex flex-col md:flex-row">
          <img src="https://www.scmagazine.com/_next/image?url=https%3A%2F%2Ffiles.scmagazine.com%2Fwp-content%2Fuploads%2F2022%2F10%2FPicture1.jpg&w=750&q=75" alt="Formation en cybersécurité" class="w-full h-32 object-cover rounded mb-2 md:mb-0 md:mr-4">
          <div class="flex flex-col justify-between">
            <h4 class="text-lg font-semibold">Formation en cybersécurité</h4>
            <p class="text-base leading-6">Découvrez les meilleures formations en cybersécurité pour développer vos compétences et progresser dans votre carrière.</p>
            <a href="https://www.scmagazine.com/sw-article/cloud-security/the-unique-challenges-of-companies-born-in-the-cloud" class="text-blue-500 hover:text-blue-700">En savoir plus</a>
          </div>
        </div>
      </div>
      <!-- News Item 3 -->
      <div class="news-item bg-white p-4 rounded-lg shadow-md">
        <div class="flex flex-col md:flex-row">
            <img src="https://www.scmagazine.com/_next/image?url=https%3A%2F%2Ffiles.scmagazine.com%2Fwp-content%2Fuploads%2F2022%2F04%2FPicture1-2.jpg&w=750&q=75" alt="Les métiers de la cybersécurité" class="w-full h-32 object-cover rounded mb-2 md:mb-0 md:mr-4">
          <div class="flex flex-col justify-between">
            <h4 class="text-lg font-semibold">Les métiers de la cybersécurité</h4>
            <p class="text-base leading-6">Découvrez les différents métiers de la cybersécurité et les compétences requises pour y accéder.</p>
            <a href="https://www.scmagazine.com/sw-article/zero-trust/forensic-challenges-for-security-professionals" class="text-blue-500 hover:text-blue-700">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>






      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.icon-linkedin,
.icon-github,
.icon-twitter {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #f3f4f6;
  border-radius: 50%;
}

.icon-linkedin:hover,
.icon-github:hover,
.icon-twitter:hover {
  background-color:  #e5e7eb;
}

.email-link,
.social-icons a {
  transition: all 0.3s;
}

@keyframes slide-in-from-left {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-from-left {
  animation: slide-in-from-left 1s forwards;
}

@keyframes slide-in-from-right {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-from-right {
  animation: slide-in-from-right 1s forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 1s forwards;
}


@media (min-width: 1024px) {
  .widget-container {
    align-self: flex-start;
  }
}

</style>


  