<template>
    <div class="container">
        <h1 id="page-title">{{ pageData.pageTitle }}</h1>
        <p>{{ Array.isArray(pageData.content) ? pageData.content.join("") : pageData.content }}</p>
    </div>
</template>

<script>

export default {
    props: ['pageData'],
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