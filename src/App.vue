<script>

import AppHeader from './components/AppHeader.vue';
import AppProjectsList from './components/AppProjectsList.vue';

export default {
  components:{
    AppHeader,
    AppProjectsList,
  },
  data() {
    return {
     
    }
  }
}
</script>

<template>
  <AppHeader/>
  <AppProjectsList/>
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use 'styles/general.scss' as * ;
</style>
