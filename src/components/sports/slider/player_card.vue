<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="344"
    min-height="200"
    flat
  >
    <h1 class="dummy_text">{{name}}</h1>
  </v-card>
</template>
<script>
  export default {
      name:"slider_card",
      props: {
        name: String
      }
  }
</script>
<style lang="scss" scoped>
.dummy_text {
    font-family: 'Nunito', sans-serif;
    margin-left: 5%;
    position: relative;
    bottom: -10px;
}
</style>