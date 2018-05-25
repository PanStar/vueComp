<template>
  <button class="btn" :class="{'btn-primary': primary}" @click="click">{{text}}</button>
</template>
<script>
export default {
    name: 'Button',
    data () {
        return {}
    },
    props: {
        text: {
            type: String
        },
        primary: {
          type: Boolean,
            default: false
        }
    },
    methods: {
        click () {
            this.$emit('click');
        }
    },
    created () {}
}
</script>
<style lang="less" scoped>
  @import "../common/common.less";

  .btn {
    display: inline-block;
    line-height: 1.5;
    padding: 5px 15px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    background-color: #fff;
    border: 1px solid @grey;
    border-radius: 4px;
    cursor: pointer;
    &:focus, &:hover {
      color: @primary-color-light;
      border-color: @primary-color-light;
    }
    &:active,&.active {
      ;
    }
  }
  .btn-primary {
    color: #fff;
    background-color: @primary-color;
    border-color: @primary-color;
    &:focus, &:hover {
      color: #fff;
      background-color: @primary-color-light;
      border-color: @primary-color-light;
    }
  }

</style>
