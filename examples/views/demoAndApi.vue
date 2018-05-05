<template>
    <div class="comp">
        <h1>Hello World</h1>
        <div class="comp-content">
            <v-hello :data="{name: 'your name'}"></v-hello>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
            }
        },
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