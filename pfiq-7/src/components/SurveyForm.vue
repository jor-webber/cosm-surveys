<template>
  <v-form>
    <FormSection
      title="Ability to do household chores (cooking, laundry, housecleaning)?"
    />
    <FormSection
      title="Ability to do physical activities such as walking, swimming, or other exercise?"
    />
    <FormSection
      title="Entertainment activities such as going to a movie or concert?"
    />
    <FormSection
      title="Ability to travel by car or bus for a distance greater than 30 minutes away from home?"
    />
    <FormSection
      title="Participating in social activities outside your home?"
    />
    <FormSection title="Emotional health (nervousness, depression, etc)?" />
    <FormSection title="Feeling Frustrated?" />
    <div class="mt-5" justify="center" align="center">
      <v-btn color="secondary" size="x-large">Submit</v-btn>
    </div>
  </v-form>
</template>

<script>
import FormSection from './FormSection.vue';
export default {
  data() {
    return {
      name: '',
      dateOfBirth: '',
      todaysDate: '',
      height: '',
      weight: '',
    };
  },
  components: { FormSection },
};
</script>

<style></style>
