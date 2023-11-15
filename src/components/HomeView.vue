<template>
    <div class="container">
        <img src="../assets/portrait.jpg"/>
        <h1 id="page-title">{{ page.pageTitle }}</h1>
        <p>{{ Array.isArray(page.content) ? page.content.join("") : page.content }}</p>
    </div>
</template>

<script>

export default {
    props: ['pageName'],
    created() {
        this.page = this.$pages.getPage(this.pageName)
    },
    data() {
        return {
            page: null
        }
    }
}
</script>