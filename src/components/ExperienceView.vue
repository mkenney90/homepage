<template>
    <div class="container">
        <h1 id="page-title">{{ page.pageTitle }}</h1>
        <div v-for="(job, index) in page.jobs" class="jobs-item" :key="index">
            <JobCard :job=job />
        </div>
    </div>
</template>

<script>
import JobCard from './JobCard.vue';

export default {
    components: {
        JobCard
    },
    props: ['pageName'],
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