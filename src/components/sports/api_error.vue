<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="344"
    flat
  >
    <v-list-item three-line class="center-button">
        <v-btn
          fab
          rounded
          class="button_text"
          :color="local_color"
          @mouseover="local_hover()"
          @mouseout="local_not_hover()"
          @click="local_selected()"
        >
        <i :class="code_icon_class"></i>        
      </v-btn>
    </v-list-item>
    <v-card-actions style="place-content: center;">
        <h2 class="warning_text">Read from local json files.  Once clicked, press the refresh button above. (Built-in)</h2>
    </v-card-actions>
    <v-divider class="divider"/>
    <v-list-item three-line class="center-button">
        <v-btn
          fab
          rounded
          class="button_text"
          href="https://github.com/tpreskenis/score-api"
          target="_blank"
          color="white"
          @mouseover="git_icon_class = 'fab fa-github git_icon_color_hover'"
          @mouseout="git_icon_class = 'fab fa-github git_icon_color'"
        >
          <i :class="git_icon_class"></i>
        </v-btn>
    </v-list-item>

    <v-card-actions>
        <h2 class="warning_text">Run API - Download from Github/Run and refresh.  (Please note you will have to request access).</h2>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name:"api-error",
    data() {
      return {
        code_icon_class: "fas fa-file-code code_icon_color",
        git_icon_class: "fab fa-github git_icon_color",
        local_color: 'white'
      }
    },
    methods: {
      local_selected: function() {
        if(this.local_color == 'white') {
          this.$store.commit('local_instead',true)
          this.local_color = 'green'
          this.code_icon_class = 'fas fa-file-code code_icon_color_hover'
        }
        else {
          this.$store.commit('local_instead',false)
          this.code_icon_class = 'fas fa-file-code code_icon_color'
          this.local_color = 'white'
        }
        },
      local_hover: function() {
        if(this.local_color == 'white') {
          return this.code_icon_class = 'fas fa-file-code code_icon_color_hover'
        }
        else 
          return this.code_icon_class = 'fas fa-file-code code_icon_color_white'
        },
      local_not_hover: function() {
        if(this.local_color == 'white') {
          return this.code_icon_class = 'fas fa-file-code code_icon_color'
        }
        else 
          return this.code_icon_class = 'fas fa-file-code code_icon_color_white'
        }

      }
    }
</script>
<style scoped lang="scss">
.git_icon_color {
  transition: all 0.3s ease;
  font-size: xx-large;
  color: rgb(0, 0, 0);
}
.git_icon_color_hover {
  transition: all 0.3s ease;
  font-size: xx-large;
  color: rgb(0, 165, 14);
}
.code_icon_color {
  transition: all 0.3s ease;
  font-size: xx-large;
  color: rgb(0, 0, 0);
}
.code_icon_color_hover {
  transition: all 0.3s ease;
  font-size: xx-large;
  color: rgb(0, 165, 14);
}
.code_icon_color_white {
  transition: all 0.3s ease;
  font-size: xx-large;
  color: rgb(255, 255, 255);
}
.divider {
  margin-left: 25px;
  margin-right: 25px;
}
.center-button {
  place-content: center;
}
.button_text {
    font-family: 'Nunito', sans-serif;
}
.warning_text {
    font-family: 'Nunito', sans-serif;
    position: relative;
    bottom: 15px;
    text-align: -webkit-center;
    font-size: inherit;
}
</style>