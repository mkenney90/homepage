<template>
    <div class="container" :id="pageData.name">
        <h1 id="page-title">{{ pageData.pageTitle }}</h1>
        <div v-for="(job, index) in pageData.jobs" class="jobs-item" :key="index">
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