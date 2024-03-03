<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <footer id="portfolio-footer" class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <p class="my-auto mx-auto text-muted">©2024 Mike Kenney</p>
        <ul class="nav mx-auto">
            <template v-for="(contact, name, index) in contactInfo" :key="index">
                <li v-if="name=='email'"><a :href="'mailto:' + contact + '?subject=Saw your portfolio and wanted to get in touch!'">mike@kenneymedia</a><span v-html="separator(index)"></span></li>
                <li v-else>{{ contact }}<span v-html="separator(index)"></span></li>
            </template>
        </ul>
    </footer>
</template>

<script>
export default {
    props: ['contactInfo'],
    methods: {
        separator(index) {
            return (index < 2) ? `<span id="span-separator">|</span>` : ``;
        }
    }
}
</script>

<style>
#app footer {
    padding: 0.75em;
    border-top: 1px solid rgb(150,100,200);
}

ul {
    padding: 0 2.5em !important;
}

li {
    margin: 0.35em auto;
    display: block;
    width: 100%;
    text-align: center;
}

#span-separator {
    display: none;
}

@media (min-width: 650px) {
    #span-separator {
        display: inline-block;
        margin-left: 0.4em;
        color: gray;
    }
    li {
        margin: 0 0.2em;
        width: unset;
    }
}
</style>