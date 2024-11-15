<script>
export default {
    name: 'AppProjectCard',
    props: {
        projectObject: {
            type: Object,
            require: true,
        },
    },
    
    data() {
    return {
      
    }
  }
}
</script>

<template>
    <div class="col-12">
                <div class="card bg-light mb-4 shadow" >
                    <div class="card-header bg-primary text-white">
                        <h5>{{projectObject.title }}</h5>
                    </div>
                    <div class="card-image text-center p-2">
                        <img src="" alt="" class=" rounded">
                    </div>
                    <div class="card-body">
                        <p><strong>Author:</strong> {{projectObject.name }}</p>
                        <p><strong>Description:</strong> {{projectObject.description }}</p>
                        <p><strong>URL:</strong> {{projectObject.url }}</p>
                        <p><strong>Start Date:</strong> {{projectObject.start_date }}</p>
                        <p><strong>End Date:</strong> {{projectObject.end_date }}</p>
                        <p><strong>Type Name:</strong> {{projectObject.type.name }}</p>
                        <p><strong>Type Description:</strong> {{projectObject.type.description }}></p>
                        <p><strong>Technologies:</strong></p> 
                        <p v-for="(technology,index) in projectObject.technologies">
                            {{technology.name }}</p>
                    </div>
                </div>
            </div>
</template>

<style scoped>
</style>