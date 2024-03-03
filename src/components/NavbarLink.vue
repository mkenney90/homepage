<template>
    <a
        :href="`#${page.link.url}`"
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