# vueComp
Vue Components for H5

# Install(npm)
`npm install vue-comps-utils`

# How to use
```
  // HelloWorld
  // global components
  import Vue from 'vue'
  import utils from 'vue-comps-utils'
  const { HelloWorld } = utils;
  Vue.component('v-hello', HelloWorld);
  
  // private components
  import utils from 'vue-comps-utils'
  const { HelloWorld } = utils;
  export default {
    components: {
      'v-hello': HelloWorld
    }
  }
  
  <v-hello :data="{name: 'your name'}" />
```
