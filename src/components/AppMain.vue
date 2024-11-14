<script>
import axios from 'axios';

export default {
    name: 'AppMain',
    data() {
        return {

        }
    },
    methods:{

    },
}
</script>

<template>
<main>
    <div class="container">
        <div class="row">

            <div class="col-12 my-4">
                <h1 class="fw-bold text-center" >Projects</h1>
            </div>

            <div class="col-12">
                <div class="card bg-light mb-4 shadow">
                    <div class="card-header bg-primary text-white">
                        <h5></h5>
                    </div>
                    <div class="card-image text-center p-2">
                        <img src="" alt="" class=" rounded">
                    </div>
                    <div class="card-body">
                        <p><strong>Description:</strong></p>
                        <p><strong>URL:</strong></p>
                        <p><strong>Start Date:</strong></p>
                        <p><strong>End Date:</strong></p>
                        <p><strong>Type Name:</strong></p>
                        <p><strong>Type Description:</strong></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<style scoped>
</style>