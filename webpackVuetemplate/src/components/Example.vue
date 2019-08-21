<template>
    <section >
        <div class="container">
            <h1>Webpack message: {{message}}</h1>
        </div>
       
    </section>
</template>


<script>
    export default {
    data() {
        return {
        message: null,

        }
    },
    created() {
        this.message = 'hello component'
    }
}
</script>







<style lang="scss" scoped>

h1 {
    color: green;
}
</style>
