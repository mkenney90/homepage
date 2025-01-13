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
        padding: 0.25em 0;
    }
    .jobs-item {
        margin: 2em 0;
        padding-bottom: 0.5em;
        background-color: rgba(255,255,255,0.04);
        font-size: .9em;
        transition: all;
        transition-duration: 0.25s;
    }
    .jobs-item:hover { 
        box-shadow: 3px 3px rgb(150, 100, 200) !important;
    }
    .jobs-item h3 {
        margin: 0.5em;
    }
    .jobs-item em {
        margin: 0.15em;
        font-size: 1.2em;
    }
    .job-tenure-container {
        position: relative;
        padding: 1em;
        top: 0;
        right: 0;
        background-color: rgba(150, 100, 200, .9);
    }
    #section-experience .jobs-item p {
        margin: 1.5em 0.9em;
    }
    .jobs-item h3:nth-child(even) {
        color: darkgray;
    }
    hr {
        border: 0;
        border-bottom: 2px solid rgba(150, 100, 200, .9);
        width: 100%;
        margin: 0;
    }

    @media (min-width: 767.98px) {
        .job-tenure-container {
            position: absolute;
        }
    }
</style>