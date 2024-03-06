<template>
    <div class="skill-card" :alt="skill.name" :style="{ 'backgroundImage': 'url(' + getImgSrc() + ')' }">
        <div class="skill-name">{{ skill.name }}</div>
    </div>
</template>

<script>
export default {
    props: ['skill'],
    methods: {
        getImgSrc() {
            console.log(this.skill.img)
            return require('../assets/icons/' + this.skill.img);
        }
    }
}
</script>

<style>
    .skill-container {
        margin: 0.25em 0;
        text-align: center;
    }
    
    .skill-card {
        display: inline-block;
        vertical-align: middle;
        text-align: left;
        padding-left: 1em;
        color: rgb(255, 255, 255);
        width: 100%;
        height: 5em;
        line-height: 5;
        background-repeat: no-repeat;
        background-position-x: center;
        background-size: contain;
        background-color: rgba(255, 255, 255, 0.05);
    }

    .skill-name {
        display: none;
    }

    @media (min-width: 480px) {
        .skill-card {
            background-position-x: right;
        }
        .skill-name {
            display: inline-block;
        }
    }
</style>