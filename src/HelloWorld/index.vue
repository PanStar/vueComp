<template>
  <div>
    <span>{{data.name}}</span>
    <span> Hello World!</span>
  </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    data () {
        return {}
    },
    props: {
        data: {
            type: Object
        }
    },
    methods: {},
    created () {}
}
</script>
<style lang="less" scoped>
  @import "../common/common.less";
</style>
