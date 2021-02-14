<template>
    <div>
        <basic-info/>
        <project-info/>
    </div>
</template>
<script>

import projectInfo from './projectInfo';
import basicInfo from './basicInfo';

export default {
  name: 'information_layout',

  components: {
      projectInfo,
      basicInfo
  },

  data: () => ({
      //...
    }),
  };
</script>
<style scoped lang="scss">
.rounded-self {
    contain: content;
    width: 25%;
    border-radius: 50%;
}
</style>