<template>
  <div id="mainTabBar">
    <tab-bar>
      <TabBaritem path="/home">
        <img slot="item_icon" src="../../assets/img/home.png" />
         <img slot="item_icon_active" src="../../assets/img/home_active.png" />
        <div slot="item_text">首页</div>
      </TabBaritem>
      <TabBaritem path="/category">
        <img slot="item_icon" src="../../assets/img/category.png" />
        <img slot="item_icon_active" src="../../assets/img/category_active.png" />
        <div slot="item_text">分类</div>
      </TabBaritem>
      <TabBaritem path="/shoppingcat">
        <img slot="item_icon" src="../../assets/img/shoppingcart.png" />
        <img slot="item_icon_active" src="../../assets/img/shoppingcart_active.png" />
        <div slot="item_text">购物车</div>
      </TabBaritem>
      <TabBaritem path="/profile">
        <img slot="item_icon" src="../../assets/img/profile.png" />
        <img slot="item_icon_active" src="../../assets/img/profile_active.png" />
        <div slot="item_text">我的</div>
      </TabBaritem>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar.vue'
  import TabBaritem from '../common/tabbar/TabBaritem.vue'
  export default{
    name:'mainTabBar',
    data (){
      return{

      }
    },
    components:{
      TabBar,
      TabBaritem
    }
  }
</script>

<style>
</style>
