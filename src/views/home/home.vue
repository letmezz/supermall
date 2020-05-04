<template>
  <div id="home">
    <nav-bar class="home_nav"><div slot="center">购物街</div></nav-bar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <recommed-view :recommends="recommends"></recommed-view>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommedView from './childComps/RecommendView.vue'
  import {getHomeMultidata} from '../../network/home.js'
  export default{
    name:'home',
    data (){
      return{
        banners:[],
        recommends:[]
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      RecommedView
    },
    created() {
      //请求首页多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(res)
      })
    }
  }
</script>

<style>
  .home_nav{
    background-color: pink;
    color: white;
  }
</style>
