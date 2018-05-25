<template>
    <div class="comp">
        <h1>Hello World</h1>
        <div class="comp-content">
            <v-hello :data="{name: 'your name'}"></v-hello>
        </div>
        <h1>Button</h1>
        <div class="comp-content">
            <Button :text="'确定'" :primary="true"></Button>
            <Button :text="'取消'"></Button>
        </div>
        <h1>Carousel</h1>
        <div class="comp-content hide">
            <Carousel></Carousel>
        </div>
        <h1>ListBox</h1>
        <div class="comp-content">
            <ListBox :list="list"></ListBox>
        </div>
        <h1>Modal</h1>
        <div class="comp-content">
            <Button :text="modalVisible?'隐藏':'显示'" :primary="true" @click="toggleModal" v-if="false"></Button>
            <Button :text="'显示'" :primary="true" @click="toggleModal"></Button>
            <Modal :props="modalProps" :visible="modalVisible" :styles="modalStyle"></Modal>
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
                ],
                modalVisible: false,
                modalStyle: {
                    top: '20%',
                    width: '70%'
                },
                modalProps: {
                    title: 'Modal Demo',
                    content: 'this is content!',
                    okText: 'ok',
                    cancelText: 'cancel',
                    ok: this.okFun,
                    cancel: this.cancelFun
                }
            }
        },
        components: utils,
        methods: {
            toggleModal () {
                this.modalVisible = !this.modalVisible;
            },
            okFun () {
                this.modalVisible = false;
                console.log('ok out');
            },
            cancelFun () {
                this.modalVisible = false;
                console.log('cancel out');
            }
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