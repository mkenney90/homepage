<template>
    <section :id="pageData.name">
        <p>{{ Array.isArray(pageData.content) ? pageData.content.join("") : pageData.content }}</p>
    </section>
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