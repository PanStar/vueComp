<template>
    <div class="comp">
        <h1>Hello World</h1>
        <div class="comp-content">
            <v-hello :data="{name: 'your name'}"></v-hello>
        </div>
        <h1>Carousel</h1>
        <div class="comp-content">
            <Carousel :data="['a','b']"></Carousel>
        </div>
    </div>
</template>
<script>
    import utils from '../../src/index.js';
    export default {
        data(){
            return {
            }
        },
        components: utils,
        methods: {
        },

        created() {
            let that = this;
        }
    }
</script>
<style scoped lang="less">
    .comp {
        margin-top: 20px;
        border-top: 1px solid #ddd;
    }
    .comp-content {
        padding: 10px;
        border: 1px solid #ddd;
    }
</style>