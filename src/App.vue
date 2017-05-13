<template>
  <div id="app">
    <myheader></myheader>

    <div id="content">
      <router-view class="showmain"></router-view>
    </div>

    <myfooter :class="data.className"></myfooter>
    <backtop></backtop>

  </div>
</template>

<script>


import myHeader from './components/public/myHeader.vue'
import myFooter from './components/public/myFooter.vue'
import Backtop from './components/public/Backtop.vue'
import Classification from './components/index/Classification.vue'



let data = {
      className : "qqq",
      empty : false
}

export default {
  name: 'app',
  components: {
    myheader : myHeader,
    myfooter : myFooter,
    backtop : Backtop,
    classification : Classification
  },
  data () {
      return {
            data : data
      }
  }
  
}

</script>

<style lang="less">
  #content
  {
    .showmain{
      width: 960px;
      margin: 0 auto;
    }

  }

</style>
