<script>
import axios from 'axios';
import AppProjectCard from './AppProjectCard.vue';


export default {
    name: 'AppProjectsList',
    components:{
        AppProjectCard,
       
    },

    data() {
        return {
            projectList:[],
            ApiProjectUrl:'http://127.0.0.1:8000/api/projects',
        }
    },
    methods:{
        getProjects(){
            axios.get(this.ApiProjectUrl)
                .then(response => {
                    this.projectList = response.data.response;
                })

                .catch(function (error) {
                  console.log(error);
                });
        },
        show(projectId){
            this.$router.push({name: 'project.show', params: {project: projectId}})
        }
    },

    created(){
        this.getProjects();
    }
}
</script>

<template>
    <router-link v-for="project in projectList" :to="{name: project.show, params: {project: project.id}}">
            <AppProjectCard
            :key="project.id"
            :projectObject = 'project'
            @click="show(project.id)"
            />
            </router-link>
</template>

<style scoped>

</style>