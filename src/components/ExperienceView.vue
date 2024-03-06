<template>
    <section :id="pageData.name">
        <div v-for="(job, index) in pageData.jobs" class="jobs-item" :key="index">
            <JobCard :job=job />
        </div>
    </section>
</template>

<script>
import JobCard from './JobCard.vue';

export default {
    components: {
        JobCard
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