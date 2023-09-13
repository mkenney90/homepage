<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand">KenneyMedia</a>
            </div>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-for="(page, index) in pages" class="nav-item" :key="index">
                    <router-link 
                        :to="`/${index}`"
                        class="nav-link" 
                        :class="{active: activePage === index}"
                        aria-current="page"
                        @click.prevent="navLinkClick(index)"
                    >{{ page.link.text }}</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    props: ['activePage', 'navLinkClick'],
    created() {
        this.pages = this.$pages.getAllPages();
    },
    data() {
        return {
            pages: []
        }
    }
}
</script>

<style scoped>
nav.navbar {
    box-shadow: 1px 1px rgb(150, 100, 200);
    padding: 0;
}

nav.navbar ul {
    vertical-align: middle;
    line-height: 3em;
}

a.active {
    background-color: rgba(150, 100, 200, 0.75)
}</style>