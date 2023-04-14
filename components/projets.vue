<template>
    <section id="projects">
      <h2>Projets</h2>
      <div class="projects-container">
        <div class="rect-project project1">
          <h3>Finaliste Concours Cyber de Devoteam</h3>
          <p>
            Finaliste du concours de cybersécurité "Devogame" organisé par
            l'entreprise Devoteam sur plus de 3800 participants. Proposition d'un
            système de vérification des logs d'une entreprise en utilisant une
            blockchain privée et un systèmes de consensus via clés privées.
          </p>
        </div>
        <div class="rect-project project2">
          <h3>Participation à des CTF</h3>
          <p>
            Participation à différents CTF dont : PicoCTF bbbb cccc ddddd eeeee
          </p>
          <img class="project-logo" src="/images/pico.png" alt="Logo 1" />
          <img
            class="project-logo"
            src="/images/1280px-Institut_supérieur_d'électronique_de_Paris.svg.png"
            alt="Logo 2"
          />
          <img
            class="project-logo"
            src="/images/1280px-Institut_supérieur_d'électronique_de_Paris.svg.png"
            alt="Logo 3"
          />
          <img
            class="project-logo"
            src="/images/1280px-Institut_supérieur_d'électronique_de_Paris.svg.png"
            alt="Logo 4"
          />
        </div>
        <div class="square-project project3">
          <h3>OSINT tool</h3>
          <p>
            Il s'agit d'un outil d'OSINT réalisé pour me simplifier la tache lors
            de pentests. Il est entièrement réalisé en python et s'exécute
            directement dans le terminal.
          </p>
          <p>
            <a href="https://github.com/clab60917/Osint-IP-URL" target="_blank"
              >Voir projet ici</a
            >
          </p>
  
          <iframe
            src="https://github-readme-stats.vercel.app/api/pin/?username=clab60917&repo=Osint-IP-URL&theme=default"
            frameborder="0"
            width="400"
            height="150"
          ></iframe>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Projects",
  };
  </script>
  
  <style scoped>
  /* Ajoutez ici vos styles CSS spécifiques à ce composant */
  </style>
  