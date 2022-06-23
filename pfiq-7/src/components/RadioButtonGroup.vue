<template>
  <div>
    <div>
      <v-radio-group :id="title" v-model="radioChoice">
        <v-radio
          v-for="option in options"
          :key="option.text"
          :label="option.text"
          :value="option.value"
        ></v-radio>
      </v-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'options', 'subheading'],
  data() {
    return {
      radioChoice: null
    };
  },
  watch: {
    radioChoice(newValue) {
      this.$emit('radio-button-choice', { title: this.title, value: newValue });
    }
  }
}
</script>

<style>

</style>