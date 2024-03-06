<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand">KenneyMedia</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mkNavbar" aria-controls="mkNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="mkNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MK</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li v-for="(page, index) in pages" class="nav-item" :key="index" data-bs-dismiss="offcanvas">
                            <navbar-link
                                :page="page"
                                :index="index"
                            ></navbar-link>
                        </li>
                    </ul>
                </div>
            </div>
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
    methods: {
        hideThisCanvas() {
            let myOffcanvas = this.$refs.offCanvas;
            console.log(myOffcanvas)
            myOffcanvas.isVisible = false;
      }
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