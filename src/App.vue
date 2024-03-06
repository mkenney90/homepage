<template>
    <loading-screen></loading-screen>

    <navbar></navbar>
    <main-view></main-view>

    <page-footer :contact-info="contactInfo"></page-footer>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue';
import MainView from './components/MainView.vue';
import Navbar from './components/Navbar.vue';
import PageFooter from './components/PageFooter.vue';

export default {
    components: {
        LoadingScreen,
        MainView,
        Navbar,
        PageFooter
    },
    data() {
        return {
            contactInfo: {
                location: "Greenville, SC",
                email: "mike@kenneymedia.com",
                linkedin: "https://www.linkedin.com/in/mikeskenney/"
            },
        };
    },
}

</script>

<style>

    body {
        position: relative;
    }
    #app {
        padding-top: 4.1em;
    }

    @keyframes loading-anim {
        0% {
            opacity: 1;
            left: 0%;
        }
        99% {
            width: 100%;
            height: 100%;
        }
        100% {
            opacity: 0.55;
            height: 0;
            left: -100%;
        }
    }

    #loading-container {
        background-color: rgb(150, 100, 200);
        position: absolute;
        overflow: hidden;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 1;
        animation: loading-anim .75s ease 0.35s 1 forwards;
    }

    #loading-container h1 {
        font-size: 5em;
        font-family: 'Martian Mono', monospace;
        margin: 0 auto;
        text-align: center;
        line-height: 100vh;
    }

    body {
        font-family: 'Martian Mono', monospace;
    }

    .fade-leave-active,
    .fade-enter-active {
        transition: 0.3s ease all;
    }

    .fade-leave-to,
    .fade-enter-from {
        opacity: 0;
    }

    .fade-leave-from,
    .fade-enter-to {
        opacity: 1;
    }

    .fade-leave-active,
    .fade-enter-active {
        transition: opacity 0.3s;
    }

    .slide-leave-active,
    .slide-enter-active {
        transition: 1s;
    }
    .slide-enter {
        transform: translate(100%, 0);
    }
    .slide-leave-to {
        transform: translate(-100%, 0);
    }
    
    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active {
        transition-duration: 0.5s;
        transition-property: height, opacity, transform;
        transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
        overflow: hidden;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        transform: translate(6em, 0);
    }

    .slide-left-leave-active,
    .slide-right-enter {
        opacity: 0;
        transform: translate(-6em, 0);
    }

    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(100px);
        opacity: 0;
    }

    h1 {
        margin-top: 1em;
        margin-bottom: 1em;
    }
    p {
        font-size: 1.4em;
    }
    .page-title {
        text-align: center;
        padding-top: 2em;
    }
    .container {
        padding: 0;
        margin-top: -2em;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .container p {
        max-width: 95%;
        margin: 0 auto;
    }

    .img-fluid {
        max-width: 35%;
    }

    img {
        margin-top: 2.25em;
        margin-bottom: -1em;
        box-shadow: 3px 3px rgb(150, 100, 200);
    }

    @media (max-width: 768px) {
        .img-fluid {
            max-width: 55%;
        }
        p {
            font-size: 1.2em;
        }
    }

    @media (max-width: 530px) {
        .img-fluid {
            max-width: 100%;
            margin-top: 2.6em;
        }
        #app {
            padding-top: 0;
        }
    }
    
</style>