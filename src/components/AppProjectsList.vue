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
    },

    created(){
        this.getProjects();
    }
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