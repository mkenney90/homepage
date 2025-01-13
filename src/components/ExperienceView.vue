<template>
    <section :id="'section-'+pageData.name">
        <p id="resume-cta" class="cta">
            <span class="nowrap d-none d-sm-none d-md-inline-block">For more details, be sure to </span> <span class="nowrap"><a href="/assets/static/Mike_Kenney_Software_Engineer_2024.pdf">Download a copy of my Resume<i class="bi bi-file-earmark-text"></i></a></span>
        </p>
        <div v-for="(job, index) in pageData.jobs" class="jobs-item" :key="index">
            <JobCard :job=job />
        </div>
        <p id="contact-cta" class="cta">
            <span class="nowrap d-none d-sm-none d-md-inline-block">Let's Talk! </span> <a :href="'mailto:' + contact + '?subject=Saw your portfolio and wanted to get in touch!'"><i class="bi bi-envelope-at-fill"></i></a>
        </p>
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

<style scoped>

    .cta {
        position: relative;
        text-align: center;
        transition: all;
        padding: .75em;
        border-radius: 15px;
        outline: 2px solid rgba(255,255,255,0.2);
    }

    span.nowrap {
        display: inline-block;
    }

    a {
        color: #7997B8;
        position: relative;
        text-decoration: none;
    }

    a::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: #7997B8;
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    a:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }

    @keyframes pulse {
        0% {
            outline: 1px solid rgba(255,255,255,0.2);
        }
        50% {
            outline: 5px solid rgba(255,255,255,0.2);
        }
        100% {
            outline: 1px solid rgba(255,255,255,0.2);
        }
    }

</style>