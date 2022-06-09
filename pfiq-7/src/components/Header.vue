<template>
  <v-app-bar color="grey-lighten-2">
    <v-toolbar-title>
      <span class="headline">Title</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn icon href="#" color="grey-lighten-2"><v-icon color="black">mdi-account</v-icon></v-btn>
      <v-btn icon href="#" color="grey-lighten-2"><v-icon color="black">mdi-magnify</v-icon></v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>
.headline {
  font-size: 1.5rem;
}
</style>