<template>
    <div class="container">
        <img class="img-fluid mx-auto" src="../assets/portrait_3.jpg"/>
        <h1 id="page-title">{{ pageData.pageTitle }}</h1>
        <p>{{ Array.isArray(pageData.content) ? pageData.content.join("") : pageData.content }}</p>
    </div>
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