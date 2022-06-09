<template>
  <v-app>
    <v-main>
      <v-container>
        <p class="text-h4 text-center">
          Pelvic Floor Impact Questionnaire - Short Form 7(PFIQ-7)
        </p>
        <p class="text-body-1 text-center">
          Instructions: Some women find that bladder, bowel, or vaginal symptoms
          affect their activities, relationships, and feelings. For each
          question, check the response that best describes how much your
          activities, relationships, or feelings have been affected by your
          bladder, bowel and vaginal / pelvic symptoms or conditions over the
          last 3 months. Please be sure to mark an answer in all 3 columns for
          each question.
        </p>
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
