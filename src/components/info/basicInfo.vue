<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="344"
    flat
  >
  <!--
    <h1 class="title_card_name">Author</h1>
    -->
    <v-list-item three-line>

      <v-list-item-avatar
        size="80"
        >
        <v-img
          aspect-ratio="1"
          class="rounded-self"
          src="../../assets/Preskenis_Tim.png"
        ></v-img>
      </v-list-item-avatar>
      <v-spacer/>
      <v-list-item-content>
        <v-btn
          depressed
          rounded
          class="button_text"
          href="https://github.com/tpreskenis"
          target="_blank"
        >
            GitLab
        </v-btn>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
        <h2 class="name_text">Tim Preskenis</h2>
    </v-card-actions>
    <v-card-actions>
        <h4 class="job_text">Software Engineer / Front End</h4>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {}
</script>
<style scoped lang="scss">
.rounded-self {
    contain: content;
    width: 35%;
    border-radius: 50%;
}
.button_text {
    font-family: 'Nunito', sans-serif;
}
.name_text {
    font-family: 'Nunito', sans-serif;
    margin-left: 5%;
    position: relative;
    bottom: 15px;
}
.job_text {
    font-family: 'Nunito', sans-serif;
    margin-left: 5%;
    position: relative;
    bottom: 25px;
    height: 10px;
    color: #2185FF;
}
.title_card_name {
    font-family: 'Nunito', sans-serif;
    margin-left: 5%;
    position: relative;
    bottom: -10px;
}
</style>