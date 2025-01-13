<template>
    <a
        :href="page.name=='home' ? '#top' : `#${page.link.url}`"
        :class="page.name"
        class="nav-link" 
        aria-current="page"
    >{{ page.link.text }}
    </a>
</template>

<script>
export default {
    props: ['page', 'index'],
}
</script>