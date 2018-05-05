<style lang="less">
    @import 'common/common.less';
</style>

<template>
    <div>
        <div class="left-top-nav">
            <router-link class="link-item" to="demoAndApi">API</router-link>
            <p>demos</p>
            <router-link class="link-item" target="_blank" to="demoAndApi">示例</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted () {
            console.log('app.vue');
        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
