<template>
    <div v-if="activePage == 2" class="container">
        <h1>{{ page.pageTitle }}</h1>
        <div v-for="(job, index) in page.jobs" class="jobs-item" :key="index">
            <h3>{{ job.company }}</h3>
            <h3>{{ job.position }}</h3>
            <em>{{ job.tenure }}</em>
            <p v-for="(line, index) in job.content" :key="index">{{line}}</p>
        </div>
    </div>
    <div v-else class="container">
        <h1>{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>
    </div>
</template>

<script>
export default {
    props: ['index', 'activePage'],
    created() {
        this.page = this.$pages.getPage(this.index)
    },
    data() {
        return {
            page: null
        }
    },
    watch: {
        index(newIndex) {
            this.page = this.$pages.getPage(newIndex);
        }
    }
}
</script>

<style scoped>
    h1 {
        margin-bottom: 1em;
    }

    .container {
        padding: 2em;
        min-height: 60vh;
    }

    .jobs-item {
        margin: 1em 0;
        padding: .75em;
        background-color: rgba(255,255,255,0.02)
    }
    .jobs-item h3 {
        display: inline-block;
        margin: 0.5em;
    }
    .jobs-item em {
        margin: 0.15em;
        font-size: 1.2em;
    }
    .jobs-item p {
        margin: 0.7em 0.9em;
    }
    .jobs-item h3:nth-child(even) {
        color: darkgray;
    }
</style>