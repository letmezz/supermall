<template>
  <div class="tabbar_item" @click="itemclick">
    <!-- <img src="../../assets/img/tabbar/home.png" />
    <div>首页</div> -->
    <div v-if="!isActive"><slot name="item_icon"></slot></div>
    <div v-else><slot name="item_icon_active"></slot></div>
    <div :style=""><slot name="item_text"></slot></div>
  </div>
</template>

<script>
  export default{
    name:'TabBaritem',
    props:{
      path:String
    },
    data (){
      return{
        isActive:false
      }
    },
    methods:{
      itemclick:function(){
        this.$router.replace(this.path).catch(err => err)//为什么不能重复点击我的url呢
      }
    }
  }
</script>

<style>
  .tabbar_item{
    text-align: center;
    flex: 1;
    height: 49px;
    font-size: 14px;

  }
  .tabbar_item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }

</style>
