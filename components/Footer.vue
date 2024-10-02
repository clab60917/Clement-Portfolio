<template>
  <footer class="bg-gray-800 text-gray-200 py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center text-center">
        <div class="w-full md:w-1/2 lg:w-1/4">
          <h3 class="font-semibold mb-4">À propos</h3>
          <p>
            Étudiant en école d'ingénieur passionné par la cybersécurité. J'aime
            travailler sur des projets innovants et relever de nouveaux défis
            techniques.
          </p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 mt-8 md:mt-0">
          <h3 class="font-semibold mb-4">Navigation</h3>
          <ul>
            <li class="mb-2">
              <a href="#about" class="hover:text-gray-300">À propos</a>
            </li>
            <li class="mb-2">
              <a href="#skills" class="hover:text-gray-300">Compétences</a>
            </li>
            <li class="mb-2">
              <a href="#timeline" class="hover:text-gray-300">Parcours</a>
            </li>
            <li class="mb-2">
              <a href="#projects" class="hover:text-gray-300">Projets</a>
            </li>
            <li><a href="#contact" class="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 mt-8 lg:mt-0">
          <h3 class="font-semibold mb-4 justify">Contact</h3>
          <p>clement.arthaud-berthet@student-cs.fr</p>
          <div class="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/cl%C3%A9ment-arthaud-berthet-42b57618a/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-400 hover:text-blue-500"
              ><i class="fab fa-linkedin text-2xl"></i
            ></a>
            <a
              href="https://github.com/clab60917"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-300 hover:text-gray-400"
              ><i class="fab fa-github text-2xl"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>
          &copy; {{ new Date().getFullYear() }} Clément Arthaud-Berthet. Tous
          droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* Insérez ici vos styles CSS spécifiques au composant Footer */
</style>
