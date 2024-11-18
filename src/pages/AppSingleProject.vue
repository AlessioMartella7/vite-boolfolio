<script>
import axios from 'axios';
import AppProjectCard from '../components/AppProjectCard.vue';
export default {
    name: 'AppSingleProject',
    components: {
        AppProjectCard,
    },
    data() {
        return {
        apiUrl: 'http://127.0.0.1:8000/api/projects',
        singleProject: null,
      
    }
    },
    methods:{
        getSingleProject(){
            axios.get(`${this.apiUrl}/${this.$route.params.project}`)
                .then(response => {
                    
                    this.singleProject = response.data.response;
                    console.log(response.data.response);
                    console.log(this.singleProject);
                })

                .catch(function (error) {
                  console.log(error);
                });
        },

    },
    computed:{
        loaded(){
            return this.singleProject != null;
        }
    },
    created(){
        this.getSingleProject();
    }
}
</script>

<template>
    <h1>Project</h1>
    <AppProjectCard :projectObject = 'singleProject' v-if="loaded" />
</template>

<style scoped>
</style>