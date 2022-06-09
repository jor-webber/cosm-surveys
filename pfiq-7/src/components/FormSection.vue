<template>
  <div
    class="d-flex mb-6 align-center justify-center flex-wrap border-thicc"
    align="center"
    justify="center"
  >
    <div class="question-container">
      <div class="text-h5">
        {{ title }}
      </div>
    </div>
    <div>
      <div justify="center" align="center" class="answer-container">
        <div class="text-h6">Bladder or Urine</div>
        <div class="flex-center">
          <v-radio-group>
            <v-radio
              v-for="option in options"
              :key="option.text"
              :label="option.text"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>
    </div>
    <div>
      <div justify="center" align="center" class="answer-container">
        <div class="text-h6">Bowel or Rectum</div>
        <div class="flex-center">
          <v-radio-group>
            <v-radio
              v-for="option in options"
              :key="option.text"
              :label="option.text"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>
    </div>
    <div>
      <div justify="center" align="center" class="answer-container">
        <div class="text-h6">Vagina</div>
        <div class="flex-center">
          <v-radio-group>
            <v-radio
              v-for="option in options"
              :key="option.text"
              :label="option.text"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data() {
    return {
      options: [
        { text: 'Not at all', value: '1' },
        { text: 'Somewhat', value: '2' },
        { text: 'Moderatly', value: '3' },
        { text: 'Quite a bit', value: '4' },
      ],
    };
  },
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
