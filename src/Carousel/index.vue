<template>
  <!-- 制作一个框架包裹slider -->
  <div style="width:70%;margin:20px auto;height:400px">
    <!-- 配置slider组件 -->
    <slider ref="slider" :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
      <!-- 设置loading,可自定义 -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
    import slider from 'vue-concise-slider'// import slider components
    export default {
        // name: 'Carousel',
        data () {
            return {
                //Image list
                pages:[
                    {
                        html: '<div class="slider1">slider1</div>',
                        style: {
                            'background': '#1bbc9b'
                        }
                    },
                    {
                        html: '<div class="slider2">slider2</div>',
                        style: {
                            'background': '#4bbfc3'
                        }
                    },
                    {
                        html: '<div class="slider3">slider3</div>',
                        style: {
                            'background': '#7baabe'
                        }
                    }
                ],
                //Sliding configuration [obj]
                sliderinit: {
                    effect: "fade",
                    loop: true
                }
            }
        },
        components: {
            slider
        },
        methods: {
            // Listener event
            slide (data) {
                // console.log(data)
            },
            onTap (data) {
                // console.log(data)
            },
            onInit (data) {
                // console.log(data)
            }
        },
        mounted () {
            let that = this;
            setTimeout(function() {
                that.pages = [{
                    html: "slide1",
                    style: {
                        background: "#1bbc9b"
                    }
                }, {
                    html: "slide2",
                    style: {
                        background: "#4bbfc3"
                    }
                }, {
                    html: "slide3",
                    style: {
                        background: "#7baabe"
                    }
                }]
            }, 2e3)
        },
        created () {
            // console.log('created');
        }
    }
</script>
<style lang="less" scoped>
  @import "../common/common.less";
</style>
