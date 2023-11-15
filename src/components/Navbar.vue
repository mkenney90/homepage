<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand">KenneyMedia</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-for="(page, index) in pages" class="nav-item" :key="index">
                    <navbar-link
                        :page="page"
                        :index="index"
                    ></navbar-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';

export default {
    components: {
        NavbarLink
    },
    created() {
        this.pages = this.$pages.getAllPages();
        this.pages.forEach((page) => {
            this.links.push(page.name);
        })
    },
    data() {
        return {
            pages: [],
            links: []
        }
    }
}
</script>

<style>
nav.navbar {
    box-shadow: 2px 2px rgb(150, 100, 200);
    padding: 0;
    font-family: 'Martian Mono', monospace;
}
nav.navbar ul {
    vertical-align: middle;
    line-height: 3em;
}
.navbar a.active {
    background-color: rgba(150, 100, 200, 0.75);
    color: rgb(10,10,10);
}
</style>