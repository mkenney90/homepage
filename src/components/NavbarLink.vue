<template>
    <router-link
        :to="`/${index}`"
        class="nav-link" 
        active-class="active"
        aria-current="page"
    >{{ page.link.text }}
    </router-link>
</template>

<script>
export default {
    props: ['page', 'index'],
}
</script>