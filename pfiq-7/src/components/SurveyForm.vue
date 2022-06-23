<template>
  <v-form>
    <FormSection
      v-for="(question, index) in questions"
      :key="index"
      :title="question.title"
      @score-changed="scoreChanged"
      class="max-width"
    />
    <div class="mt-5 max-width" justify="center" align="center">
      <v-btn color="secondary" size="x-large" block @click="onSubmitClicked"
        >Submit</v-btn
      >
    </div>
  </v-form>
</template>

<script>
import FormSection from './FormSection.vue';
export default {
  data() {
    return {
      questions: [
        {
          title:
            'Ability to do household chores (cooking, laundry, housecleaning)?',
          subheadings: [],
        },
        {
          title:
            'Ability to do physical activities such as walking, swimming, or other exercise?',
          subheadings: [],
        },
        {
          title:
            'Entertainment activities such as going to a movie or concert?',
          subheadings: [],
        },
        {
          title:
            'Ability to travel by car or bus for a distance greater than 30 minutes away from home?',
          subheadings: [],
        },
        {
          title: 'Participating in social activities outside your home?',
          subheadings: [],
        },
        {
          title: 'Emotional health (nervousness, depression, etc)?',
          subheadings: [],
        },
        {
          title: 'Feeling Frustrated?',
          subheadings: [],
        },
      ],
    };
  },
  components: { FormSection },
  computed: {
    bladderScore() {
      return this.calculateScore(0);
    },
    bowelScore() {
      return this.calculateScore(1);
    },
    vaginaScore() {
      return this.calculateScore(2);
    },
    totalScore() {
      return Math.round(this.bladderScore + this.bowelScore + this.vaginaScore);
    },
  },
  watch: {
    questions() {
      return this.subheadings.reduce((acc, cur) => {
        return acc + cur.score;
      }, 0);
    },
  },
  methods: {
    scoreChanged(score) {
      this.questions.find((q) => q.title == score.title).subheadings = score.subheadings;
    },
    calculateScore(index) {
      let sum = 0;
      this.questions.forEach((item) => {
        if (item.subheadings.length > 1) {
          sum += parseFloat(item.subheadings[index].score);
        }
      });
      var scaleScore = (sum / this.questions.length) * (100 / 3);
      return scaleScore;
    },
    onSubmitClicked() {
      alert(`Total Score: ${this.totalScore}`);
    },
  },
};
</script>

<style scoped>
.max-width {
  max-width: 1400px;
  margin: auto;
}
</style>
