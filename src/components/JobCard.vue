<template>
    <div class="job-header">
        <h3>{{ job.company }}</h3>
        <h3>{{ job.position }}</h3>
        <div class="job-tenure-container">
            <em class="job-tenure">{{ job.tenure }}</em>
        </div>
    </div>
    <hr>
    <p v-for="(line, index) in job.content" :key="index">{{line}}</p>
</template>

<script>
export default {
    props: ['job']
}
</script>

<style>
    .job-header {
        position: relative;
    }
    .jobs-item {
        margin: 1em 0;
        background-color: rgba(255,255,255,0.04);
        font-size: .9em;
        transition: all;
        transition-duration: 0.25s;
    }
    .jobs-item:hover { 
        box-shadow: 3px 3px rgb(150, 100, 200) !important;
    }
    .jobs-item h3 {
        display: inline-block;
        margin: 0.5em;
    }
    .jobs-item em {
        margin: 0.15em;
        font-size: 1.2em;
    }
    .job-tenure-container {
        position: absolute;
        padding: 1em;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(150, 100, 200, .9);
    }
    .jobs-item p {
        margin: 0.7em 0.9em;
    }
    .jobs-item h3:nth-child(even) {
        color: darkgray;
    }
    hr {
        border: 0;
        border-bottom: 2px solid rgba(150, 100, 200, .9);
        width: 95%;
        margin: 0 0 0 5%;
    }
</style>