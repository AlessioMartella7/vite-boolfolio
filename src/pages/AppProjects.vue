<script>
import AppProjectsList from '../components/AppProjectsList.vue';

export default {
    components:{
        AppProjectsList
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
    <div class="container">
        <div class="row">
            <div class="col-12 my-4 text-center">
                <h1>Projects</h1>
            </div>
            <div class="col-12">
                <AppProjectsList/>
                <AppProjectCard
                v-for="project in projectList":key="project.id"
                :projectObject = 'project'
                />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>