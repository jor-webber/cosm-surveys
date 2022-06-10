<template>
  <div>
    <v-card elevation="2" class="pa-5 card" shaped>
      <v-card-text class="pb-0">Over the last 3 months, did you...</v-card-text>
      <v-card-title class="pt-1 title">{{ question.query }}</v-card-title>
      <v-radio-group class="smaller-radio darker-text" hide-details="auto">
        <v-radio name="test" @click="handleYesNoSelection" value="n">
          <template v-slot:label>
            <div><strong>No</strong>, I don't have this symptom.</div>
          </template>
        </v-radio>
        <v-radio name="test" @click="handleYesNoSelection" value="y">
          <template v-slot:label>
            <div><strong>Yes</strong>, I do have this symptom.</div>
          </template>
        </v-radio>
      </v-radio-group>
      <v-card-title v-if="yesSelected" class="smaller-title">And it bothers me...</v-card-title>
      <v-slide-x-transition>
        <div v-if="yesSelected">
          <!-- If none of these radios are selected, the 'No' radio must be selected and therefore score value = 0 -->
          <v-radio-group class="smaller-radio darker-text" hide-details="auto" v-model="score">
            <v-radio label="Not at all" :value="1" />
            <v-radio label="Somewhat" :value="2" />
            <v-radio label="Moderately" :value="3" />
            <v-radio label="Quite a bit" :value="4" />
          </v-radio-group>
        </div>
      </v-slide-x-transition>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["question"],
  data() {
    return {
      score: 0,
      yesSelected: false,
    };
  },
  watch: {
    score(newVal, oldVal) {
      console.log("Questionscore: " + newVal)
      this.$emit("get-score", {
        prevScore: oldVal,
        newScore: newVal,
      });
    }
  },
  methods: {
    handleYesNoSelection(event) {
      if (event.target.value == "y") {
        this.yesSelected = true;
        return;
      }
      this.score = 0;
      this.yesSelected = false;
    }
  }
};
</script>

<style scoped>
.title {
  font-size: 18px;
}

.smaller-title {
  font-size: 16px;
}

.smaller-radio {
  font-size: 13px;
}

.card {
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px #00000040;
  color: #2c2c2c;
}

.darker-text {
  color: black !important;
  opacity: 1 !important;

}
</style>