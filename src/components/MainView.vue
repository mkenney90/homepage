<template>
    <div style="position:relative">
        <div v-for="(page, index) in pages" :key="index" class="container">
            <img v-if="page.image" class="img-fluid mx-auto" :src='require("../assets/" + page.image)' />
            <h1 :id="page.name" class="page-title">{{ page.pageTitle }}</h1>
            <component :is="page.component" :page-data="page"/>
        </div>
    </div>
</template>

<script>
import HomeView from './HomeView.vue';
import AboutView from './AboutView.vue';
import SkillsView from './SkillsView.vue';
import ExperienceView from './ExperienceView.vue';

export default {
    components: {
        HomeView,
        AboutView,
        SkillsView,
        ExperienceView
    },
    created() {
        this.pages = this.$pages.getAllPages()
    },
}
</script>