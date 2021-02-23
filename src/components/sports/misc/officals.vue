<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    flat
    max-width="344"
  >
    <h1 class="dummy_text">Officials</h1>
    <v-list subheader style="margin-top: 15px;">
      <v-list-item
        v-for="offical in officals"
        :key="offical.first_name"
      >
        <v-list-item-avatar>
          <v-img
            :alt="`${offical.last_name} avatar`"
            :src="getOfficalImage(offical.last_name)"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="offical.first_name +' '+offical.last_name"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon style="place-self: center;">
            <v-list-item-subtitle>{{offical.position}}</v-list-item-subtitle>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
  export default {
    name: "blank",
    props: {
      officals: Array,
    },
    methods: {
        // since we do not get images for the pull, usually we would have a database to store the names and picture urls. (This is not common practice)
        getOfficalImage: function(last_name) {
            if (last_name == 'Cederstrom')
                return 'https://www.sportscasting.com/wp-content/uploads/2019/07/MLB-oldest-umpires-Gary-Cederstrom-GettyImages-802827378.jpg'
            else if (last_name == 'Barksdale')
                return 'https://wordandway.org/wp-content/uploads/2019/10/BP-Lance-Barksdale-crop.jpg'
            else if (last_name == 'Culbreth')
                return 'https://img.bleacherreport.net/img/images/photos/002/304/147/hi-res-6327104_crop_exact.jpg?w=1200&h=1200&q=75'
            else if (last_name == 'Johnson')
                return 'https://alchetron.com/cdn/adrian-johnson-umpire-6cd82579-39d9-4260-a8a4-1dd3daf5e91-resize-750.jpeg'
            else if (last_name == 'Stafford')
                return 'https://cdn.nba.com/manage/2018/02/derrick-stafford-iso.jpg'
            else if (last_name == 'Crawford')
                return 'https://www.basketuniverso.it/wp-content/uploads/2019/03/i.jpg'
            else if (last_name == 'McCutchen')
                return 'https://a.espncdn.com/photo/2017/1215/r302983_1296x729_16-9.jpg'
            else
                return ''
        }
    },
    data: () => ({
    }),
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