<template>
    <div v-for="(page, index) in pages" :key="index" :id="page.name" :name="page.name">
        <component :is="page.component" :page-data="page"/>
    </div>
</template>

<script>
import HomeView from './HomeView.vue';
import AboutView from './AboutView.vue';
import ExperienceView from './ExperienceView.vue';

export default {
    components: {
        HomeView,
        AboutView,
        ExperienceView
    },
    created() {
        this.pages = this.$pages.getAllPages()
    },
}
</script>