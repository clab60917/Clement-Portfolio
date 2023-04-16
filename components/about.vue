<template>
    <section id="about" class="hero bg-gray-100 py-16">
      <div class="about-container mx-auto max-w-7xl flex flex-wrap justify-center items-start">
        <div class="about-image w-full md:w-1/2 md:pr-8">
          <img src="images/pc.jpg" alt="Photo de profil de Clément John" class="profile-image w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div class="about-content w-full md:w-1/2 mt-10 md:mt-0">
          <h1 class="text-4xl font-bold mb-4">Clément Arthaud-Berthet</h1>
          <h2 class="text-2xl font-semibold mb-6">À propos de moi</h2>
          <div class="about-text mb-8">
            <p class="text-base leading-6">Étudiant en école d'ingénieur, je suis passionné par la cybersécurité. Je participe fréquemment à des CTF et j'ai pu réaliser différents pentests auprès d'entreprises.</p>
          </div>
          <div class="experience mb-8">
            <h3 class="text-xl font-semibold mb-4">Expérience de leadership</h3>
            <div class="experience-item">
              <p class="text-base leading-6">Actuellement président du plus grand Innovation Hub étudiant de France : Garage Isep, avec plus de 80 personnes à manager.</p>
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
            <p class="text-base leading-6">Les domaines de la blockchain et de l'intelligence artificielle m'intéressent également, je me forme sur ces sujets en autodidacte.</p>
          </div>
          <div class="about-contact">
            <h3 class="text-xl font-semibold mb-4">Contactez-moi</h3>
            <a href="mailto:clement@example.com" class="email-link text-blue-500 hover:text-blue-600 transition-colors mb-6 inline-block">clement@example.com</a>
            <div class="social-icons flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/clement" target="_blank" rel="noopener noreferrer" class="text-blue-700 hover:text-blue-800 transition-colors icon-linkedin"><i class="fab fa-linkedin text-3xl"></i></a>
              <a href="https://github.com/clement" target="_blank" rel="noopener noreferrer" class="text-gray-800 hover:text-gray-900 transition-colors icon-github"><i class="fab fa-github text-3xl"></i></a>
            <a href="https://twitter.com/clement" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-500 transition-colors icon-twitter"><i class="fab fa-twitter text-3xl"></i></a>
          </div>
          <a href="path/to/your/cv.pdf" download class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors">Télécharger le CV en PDF</a>
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
  background-color: #e5e7eb;
}

.email-link,
.social-icons a {
  transition: all 0.3s;
}
</style>

                
  