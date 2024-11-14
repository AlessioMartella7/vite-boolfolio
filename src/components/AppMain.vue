<script>
import axios from 'axios';
import AppMainCard from './AppMainCard.vue';

export default {
    components:{
        AppMainCard,
    },
    name: 'AppMain',

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
<main>
    <div class="container">
        <div class="row">
            <div class="col-12 my-4">
                <h1 class="fw-bold text-center" >Projects List</h1>
            </div>
            <AppMainCard
            :projectListObject = 'projectList'
            />
        </div>
    </div>
</main>
</template>

<style scoped>

</style>