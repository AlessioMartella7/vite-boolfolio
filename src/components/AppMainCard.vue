<script>
export default {
    name: 'AppMainCard',
    props: {
        projectListObject: {
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
                <div class="card bg-light mb-4 shadow" v-for="project in projectListObject" :key="project.id">
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
</template>

<style scoped>
</style>