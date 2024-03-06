<template>
    <section :id="pageData.name">
        <div class="row">
            <div v-for="(skill, index) in pageData.skills" class="skill-container col-6 col-lg-3" :key="index">
                <SkillCard :skill=skill />
            </div>
        </div>
    </section>
</template>

<script>
import SkillCard from './SkillCard.vue';

export default {
    components: {
        SkillCard
    },
    props: ['pageData'],
    created() {
        this.page = this.$pages.getPage(this.pageName)
    },
    data() {
        return {
            page: null
        }
    }
}
</script>