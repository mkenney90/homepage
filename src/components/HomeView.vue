<template>
    <section :id="pageData.name">
        <p>{{ Array.isArray(pageData.content) ? pageData.content.join("") : pageData.content }}</p>
    </section>
</template>

<script>

export default {
    props: ['pageData'],
    data() {
        return {
            page: null
        }
    }
}
</script>