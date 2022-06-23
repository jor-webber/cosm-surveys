<template>
  <v-app>
    <v-main class="background">
      <v-container>
        <Header class="mb-5"/>
        <SurveyForm />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import SurveyForm from './components/SurveyForm.vue';
import FormSection from './components/FormSection.vue';

export default {
  name: 'App',

  components: {
    Header,
    SurveyForm,
    FormSection
}, 

data() {
  return {

  }
}
};
</script>

<style scoped>
.background {
  background-color: rgb(233, 233, 233);
}

.max-width {
  max-width: 1400px;
  margin: auto;
}
</style>
