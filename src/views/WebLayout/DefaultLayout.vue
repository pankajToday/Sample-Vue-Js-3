<template>
    <AppHeader/>
    <router-view/>
    <AppFooter/>
</template>
<script>
import AppHeader from "@/views/WebLayout/TopHeader.vue"
import AppFooter from '@/views/WebLayout/Footer.vue'
export default {
    components:{AppHeader,AppFooter}
}

</script>