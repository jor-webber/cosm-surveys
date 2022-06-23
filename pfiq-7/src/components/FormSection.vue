<template>
  <v-card
    class="d-flex mb-4 align-center justify-center flex-wrap border-thicc"
    align="center"
    justify="center"
    elevation="5"
  >
    <div class="question-container">
      <div class="text-h5">
        {{ title }}
      </div>
    </div>
    <div v-for="(subheading, index) in subheadings" :key="index">
      <div justify="center" align="center" class="answer-container">
        <div class="text-h6">{{ subheading.title }}</div>
        <div class="flex-center">
          <RadioButtonGroup :options="options" :title="subheading.title" @radio-button-choice="radioButtonChanged" />
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import RadioButtonGroup from './RadioButtonGroup.vue';
export default {
  props: ['title'],
  components: { RadioButtonGroup },
  data() {
    return {
      options: [
        { text: 'Not at all', value: '0' },
        { text: 'Somewhat', value: '1'},
        { text: 'Moderatly', value: '2', },
        { text: 'Quite a bit', value: '3' },
      ],
      subheadings: [
        {
          title: 'Bladder or Urine',
          score: 0
        },
        {
          title: 'Bowel and Rectum',
          score: 0
        },
        {
          title: 'Vagina',
          score: 0
        }
      ],
      radioChoice: null,
    };
  },
  methods: {
    radioButtonChanged(choice) {
      this.subheadings.find(s => s.title == choice.title).score = choice.value;
    }
  },
  computed: {
    score() {
      return this.subheadings.reduce((acc, cur) => {
        return acc + cur.score;
      }, 0);
    }
  },
  watch: {
    score() {
      this.$emit('score-changed', { subheadings: this.subheadings, title: this.title});
    }
  }
};
</script>

<style>
.border-thicc {
  border: 2px solid #ccc;
}

.question-container {
  width: 300px;
}

.answer-container {
  align-content: center;
  justify-content: center;
  width: 300px;
  padding: 5px;
  margin: auto;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
