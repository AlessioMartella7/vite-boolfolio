<script>

import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';


export default {
  components:{
    AppHeader,
   
  },
  data() {
    return {
     
    }
  }
}
</script>

<template>
  <AppHeader/>
  <RouterView/>
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss' as *;
@use 'styles/general.scss' as * ;
</style>
