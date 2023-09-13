<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <footer id="portfolio-footer" class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
        <p class="col-md-4 mb-0 text-muted">© 2023 Mike Kenney</p>
        <ul class="nav col-md-4 justify-content-end">
            <div v-for="(contact, name, index) in contactInfo" :key="index">
                <li v-if="name=='email'"><a v-bind:href="'mailto:' + contact + '?subject=Saw your portfolio and wanted to get in touch!'">mike@kenneymedia</a> <span v-if="index < 2">|</span></li>
                <li v-else>{{ contact }} <span v-if="index < 2">|</span></li>
            </div>
        </ul>
    </footer>
</template>

<script>
export default {
    props: ['contactInfo']
}
</script>

<style>
#app footer {
    padding: 0.65em;
    border-top: 1px solid rgb(150,100,200);
}

li {
    margin-right: 0.4em;
}

li span {
    margin: 0 0.2em;
    color: gray;
}
</style>