<template>
  <div id="app">
    <router-view/>
    <!-- 往$router中添加属性meta,将其他几个界面下部路由都设置为true,其他的界面设置为false -->
    <FooterGuide v-show="$route.meta.showFooter"/>   
  </div> 
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide';
  export default {
    components:{
      FooterGuide 
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .app
        width 100%
        height 100%
        background #f5f5f5
</style>
  