<script>
import axios from 'axios';
import AppProjectCard from '../components/AppProjectCard.vue';
export default {
    name: 'AppSingleProject',
    components: AppProjectCard,
 
    data() {
        return {
        $apiUrl: 'http://127.0.0.1:8000/api/projects',
        $singleProject: {},
      
    }
    },
    methods:{
        getSingleProject(){
            axios.get(`${this.$apiUrl}/${this.$route.params.project}`)
                .then(response => {
                    console.log('ciao')
                    console.log(response);
                    this.$singleProject = response.data.response;
                })

                .catch(function (error) {
                  console.log(error);
                });
        },
    },
    created(){
        this.getSingleProject();
    }
}
</script>

<template>
    <h1>Project</h1>
    <AppProjectCard :singleProjectObject = '$singleProject'
    
    />
</template>

<style scoped>
</style>