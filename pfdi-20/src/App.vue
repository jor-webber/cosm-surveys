<template>
  <v-app class="mb-5 mt-5">
    <v-main>
      <survey-form></survey-form>
    </v-main>
  </v-app>
</template>

<script>
import SurveyForm from "./components/SurveyForm.vue";
export default {
  components: {
    SurveyForm,
  },
};
</script>

<style>
html {
  background-color: #F5F5F5;
  display: flex;
  justify-content: center;
  color: black;
}

#app {
  max-width: 720px;
}
</style>


