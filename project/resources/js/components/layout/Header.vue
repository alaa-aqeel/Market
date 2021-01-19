<template>
    <div id='header'>
        <m-navbar></m-navbar>

    </div>
</template>

<script>
// import Navbar from "./Navbar.vue";
const Navbar = () => import("./Navbar.vue");

export default {
    name: "Header",
    components:{
        'm-navbar':Navbar,
    },
}
</script>