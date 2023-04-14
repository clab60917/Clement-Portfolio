<template>
  <div>
    <Header />
    <About />
    <Timeline />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue';
import About from '~/components/About.vue';
import Timeline from '~/components/Timeline.vue';
import Projects from '~/components/Projects.vue';
import Contact from '~/components/Contact.vue';
import Footer from '~/components/Footer.vue';
import XSS from '../components/XSS.vue';

export default {
  components: {
    Header,
    About,
    Timeline,
    Projects,
    Contact,
    Footer
    XSS
  }
}
</script>

<style>
/* Insérez ici vos styles CSS globaux */
</style>
