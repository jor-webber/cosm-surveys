<template>
  <form @submit.prevent="submitScore" elevation="5">
    <!--For each set of questions, generate a survey block populated with its questions-->
    <survey-block v-for="set in questions" :key="set.scale" :questions="set" @get-score="calculateScore" />
    <v-btn block color="black" large outlined>Complete Survey</v-btn>
  </form>
</template>

<script>
import SurveyBlock from "./SurveyBlock.vue";
export default {
  props: ["questions"],
  components: {
    SurveyBlock,
  },
  data() {
    return {
      score: 0,
    };
  },
  methods: {
    calculateScore(blockScore) {
      this.score += blockScore;
    },
    submitScore() {
      this.$emit("submit-score", this.score);
    },
  },
};
</script>

<style scoped>
form {
  background-color: #F5F5F5;
  display:flex;
  flex-direction: column;
  gap: 35px;
}



</style>