<template>
    <navbar :active-page="activePage" :nav-link-click="(index) => activePage = index"></navbar>

    <router-view :active-page="activePage" v-slot="{  Component }" :key="$route.fullPath">
        <transition name="fade" appear>
            <component :is="Component" />
        </transition>
    </router-view>
    <page-footer :contactInfo="contactInfo"></page-footer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import PageFooter from './components/PageFooter.vue';

export default {
    components: {
        Navbar,
        PageFooter
    },
    data() {
        return {
            activePage: 2,
            contactInfo: {
                location: "Greenville, SC",
                email: "mike@kenneymedia.com",
                phone: "(760) 819-3606",
            },
        };
    },
}
</script>

<style scoped>

    .fade-leave-active,
    .fade-enter-active {
        transition: 0.3s ease all;
    }

    .fade-leave-to,
    .fade-enter-from {
        opacity: 0;
    }

    .fade-leave-from,
    .fade-enter-to {
        opacity: 1;
    }

    .fade-leave-active,
    .fade-enter-active {
        transition: opacity 0.3s;
    }

</style>