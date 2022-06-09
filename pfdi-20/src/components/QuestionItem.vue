<template>
  <div>
    <v-card elevation="2" class="pa-5 card" shaped>
      <v-card-text class="pb-0">Over the last 3 months, did you...</v-card-text>
      <v-card-title class="pt-1 title">{{ question.query }}</v-card-title>
      <v-radio-group class="smaller-radio darker-text" hide-details="auto">
        <v-radio label="No, I don't have this symptom." name="test" @click="yesSelected = false" :value="0"/>
        <v-radio label="Yes, I do have this symptom." name="test" @click="yesSelected = true" value="-1"/>
      </v-radio-group>
      <v-card-title v-if="yesSelected" class="smaller-title">And it bothers me...</v-card-title>
      <v-slide-x-transition>
      <div v-if="yesSelected" class="pl-10">
        <v-radio-group class="smaller-radio darker-text" hide-details="auto" >
          <v-radio label="Not at all" :name="question.id" :value="1"/>
          <v-radio label="Somewhat" :name="question.id" :value="2" />
          <v-radio label="Moderately" :name="question.id" :value="3" />
          <v-radio label="Quite a bit" :name="question.id" :value="4" />
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
      prevScore: 0,
      yesSelected: false,
    };
  },
  watch: {
    score() {
      this.prevScore = this.score;
      console.log(this.score)
      this.$emit("get-score", {
        prevScore: this.prevScore,
        newScore: this.score,
      });
    }
  },
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
  border-radius:15px;
  box-shadow: 0px 4px 4px 0px #00000040;
  color: #2c2c2c;
}

.darker-text {
  color: black !important;
  opacity: 1 !important;
}

.v-label {
  color: black !important;
  opacity: 1 !important;
}

</style>