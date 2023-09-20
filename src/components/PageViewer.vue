<template>
    <div v-if="index == 2" class="container">
        <h1 id="page-title">{{ page.pageTitle }}</h1>
        <div v-for="(job, index) in page.jobs" class="jobs-item" :key="index">
            <JobCard :job=job />
        </div>
    </div>
    <div v-else class="container">
        <img v-if="index == 0"  src="../assets/portrait.jpg" />
        <h1 id="page-title">{{ page.pageTitle }}</h1>
        <p>{{ Array.isArray(page.content) ? page.content.join("") : page.content }}</p>
    </div>
</template>

<script>
import JobCard from './JobCard.vue';

export default {
    components: {
        JobCard
    },
    props: ['index'],
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

<style>
    h1 {
        margin-bottom: 1em;
    }
    p {
        font-size: 1.4em;
    }
    #page-title {
        text-align: center;
    }
    .container {
        padding: 2em;
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
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
    img {
        text-align: center;
        margin: 2.25em auto;
        max-width: 25%;
        box-shadow: 3px 3px rgb(150, 100, 200);
        overflow: hidden;
        display: block;
    }
</style>