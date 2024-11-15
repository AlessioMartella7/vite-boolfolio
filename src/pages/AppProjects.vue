<script>

import AppProjectsList from '../components/AppProjectsList.vue';

export default {
    components:{
        AppProjectsList,
    },
    name: 'AppProjects',

    data() {
        return {
            
        }
    },
    methods:{
  
    },
}
</script>

<template>
            <AppProjectCard
            v-for="project in projectList":key="project.id"
            :projectObject = 'project'
            />
</template>

<style scoped>

</style>