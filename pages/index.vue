<template>
  <div>
    <Header />
    <About />
    <Skills />
    <Caroussel />
    <Timeline />
    <Projets />
    <Contact />
    
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import About from '~/components/About.vue';
import Timeline from '~/components/Timeline.vue';
import Projets from '~/components/Projets.vue';
import Contact from '~/components/Contact.vue';
import Footer from '~/components/Footer.vue';
import Caroussel from '~/components/Caroussel.vue';
import XSS from '~/components/XSS.vue' ;
import Skills from '~/components/Skills.vue';

export default {
  components: {
    Header,
    About,
    Timeline,
    Projets,
    Contact,
    Footer,
    Caroussel,
    XSS,
    Skills,
    
    
    
  }
}

</script>

<style>
/* Insérez ici vos styles CSS globaux */
</style>
