<template>
    <div class="comp">
        <h1>Hello World</h1>
        <div class="comp-content">
            <v-hello :data="{name: 'your name'}"></v-hello>
        </div>
        <h1>Carousel</h1>
        <div class="comp-content hide">
            <Carousel></Carousel>
        </div>
        <h1>ListBox</h1>
        <div class="comp-content">
            <ListBox :list="list"></ListBox>
        </div>
    </div>
</template>
<script>
    import utils from '../../src/index.js';
    export default {
        data(){
            return {
                list: [
                    {name: '0', url: ''},
                    {name: '1', url: ''},
                    {name: '2', url: ''},
                    {name: '3', url: ''},
                    {name: '4', url: ''},
                    {name: '5', url: ''},
                    {name: '6', url: ''},
                    {name: '7', url: ''},
                    {name: '8', url: ''},
                    {name: '9', url: ''}
                ]
            }
        },
        components: utils,
        methods: {
        },

        created() {
            this.list.forEach(i => {
                i.url = `examples/views/image/emoji/${i.name}.png`;
            });
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