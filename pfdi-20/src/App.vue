<template>
  <v-app class="mb-5 mt-5">
    <v-main>
      <survey-form :questions="questions" @submit-score="submit"></survey-form>
    </v-main>
  </v-app>
</template>

<script>
import SurveyForm from "./components/SurveyForm.vue";
export default {
  data() {
    return {
      questions: [
        {
          scale: "UDI-6",
          questionSet: [
            {
              id: 1.1,
              query: "Usually experience frequent urination?",
            },
            {
              id: 1.2,
              query: "Usually experience urine leakage associated with a feeling of urgency, that is, a strong sensation of needing to go to the bathroom?",
            },
            {
              id: 1.3,
              query: "Usually experience urine leakage related to coughing, sneezing, or laughing?",
            },
            {
              id: 1.4,
              query: "Usually experience small amounts of urine leakage (that is, drops)?",
            },
            {
              id: 1.5,
              query: "Usually experience difficulty emptying your bladder? ",
            },
            {
              id: 1.6,
              query: "Usually experience pain or discomfort in the lower abdomen or genital region?",
            },
          ],
        },
        {
          scale: "CRADI-8",
          questionSet: [
            {
              id: 2.1,
              query: "Feel you need to strain too hard to have a bowel movement?",
            },
            {
              id: 2.2,
              query: "Feel you have not completely emptied your bowels at the end of a bowel movement?",
            },
            {
              id: 2.3,
              query: "Usually lose stool beyond your control if your stool is well formed?",
            },
            {
              id: 2.4,
              query: "Usually lose stool beyond your control if your stool is loose?",
            },
            {
              id: 2.5,
              query: "Usually lose gas from the rectum beyond your control?",
            },
            {
              id: 2.6,
              query: "Usually have pain when you pass your stool?",
            },
            {
              id: 2.7,
              query: "Experience a strong sense of urgency and have to rush to the bathroom to have a bowel movement?",
            },
            {
              id: 2.8,
              query: "Does part of your bowel ever pass through the rectum and bulge outside during or after a bowel movement?",
            },
          ],
        },
        {
          scale: "POPDI-6",
          questionSet: [
            {
              id: 3.1,
              query: "Usually experience pressure in the lower abdomen?",
            },
            {
              id: 3.2,
              query: "Usually experience heaviness or dullness in the pelvic area?",
            },
            {
              id: 3.3,
              query: "Usually have a bulge or something falling out that you can see or feel in your vaginal area?",
            },
            {
              id: 3.4,
              query: "Ever have to push on the vagina or around the rectum to have or complete a bowel movement?",
            },
            {
              id: 3.5,
              query: "Usually experience a feeling of incomplete bladder emptying?",
            },
            {
              id: 3.6,
              query: "Ever have to push up on a bulge in the vaginal area with your fingers to start or complete urination?",
            },
          ],
        },
      ],
    };
  },
  components: {
    SurveyForm,
  },
  methods: {
    submit(score) {
      this.score += score;
      console.log("Submitted, Score: " + this.score);
    },
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


