<script>
export default {
    name: 'AppHeader',
    data() {
        return {
      
        }
    }
}
</script>

<template>
<header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav d-flex justify-content-center gap-5 w-100">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" class="nav-link active" aria-current="page" >Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'projects'}" class="nav-link active" aria-current="page" >Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'technologies'}" class="nav-link active" aria-current="page" >Technologies</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
</template>

<style scoped>
</style>