<template>
    <h3>{{ job.company }}</h3>
    <h3>{{ job.position }}</h3>
    <em>{{ job.tenure }}</em>
    <p v-for="(line, index) in job.content" :key="index">{{line}}</p>
</template>

<script>
export default {
    props: ['job']
}
</script>

<style>
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