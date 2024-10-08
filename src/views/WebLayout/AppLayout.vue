<template>
    <TopHeader > </TopHeader>

    <main class="main">
        <slot />
    </main>
</template>


<script >
import TopHeader from './TopHeader.vue';

export default {
    name :"AppLayout",
    components:{TopHeader},
    data(){ return {}  },
    methods() {

    }
}


</script>
