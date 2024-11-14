<script>
import axios from 'axios';

export default {
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

            <div class="col-12">
                <div class="card bg-light mb-4 shadow" v-for="project in projectList" key="project.id">
                    <div class="card-header bg-primary text-white">
                        <h5>{{project.title }}</h5>
                    </div>
                    <div class="card-image text-center p-2">
                        <img src="" alt="" class=" rounded">
                    </div>
                    <div class="card-body">
                        <p><strong>Author:</strong> {{project.name }}</p>
                        <p><strong>Description:</strong> {{project.description }}</p>
                        <p><strong>URL:</strong> {{project.url }}</p>
                        <p><strong>Start Date:</strong> {{project.start_date }}</p>
                        <p><strong>End Date:</strong> {{project.end_date }}</p>
                        <p><strong>Type Name:</strong> {{project.type.name }}</p>
                        <p><strong>Type Description:</strong> {{project.type.description }}></p>
                        <p><strong>Technologies:</strong></p> 
                        <p v-for="(technology,index) in project.technologies">
                            {{technology.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<style scoped>
</style>