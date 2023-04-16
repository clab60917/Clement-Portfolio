<template>
    <section class="xss-vulnerable py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Section vulnérable aux attaques XSS</h2>
        <div class="form-container">
          <label for="message" class="block mb-2">Votre message :</label>
          <input
            type="text"
            id="message"
            v-model="message"
            class="border border-gray-300 rounded w-full p-2 mb-4"
            @keyup.enter="displayMessage"
          />
          <button @click="displayMessage" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Afficher le message
          </button>
        </div>
        <div class="message-container mt-8">
          <h3 class="text-xl font-semibold mb-4">Message :</h3>
          <div v-html="displayedMessage" class="border border-gray-300 rounded p-4 bg-white"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "XssVulnerable",
    data() {
      return {
        message: "",
        displayedMessage: "",
      };
    },
    methods: {
      displayMessage() {
        this.displayedMessage = this.message;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Insérez ici vos styles CSS spécifiques au composant XssVulnerable */
  </style>
  