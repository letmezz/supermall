<template>
  <div class="nav_bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default{
    name:'NavBar',
    data (){
      return{

      }
    }
  }
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
  }
  .nav_bar{
    display: flex;
    line-height: 44px;
    height:44px;
    text-align: center;
    box-shadow: 0 2px 1px rgba(100,100,100,0.3);
    font-size: 20px;
  }
  .left{
    width: 60px;

  }
  .right{
    width: 60px;

  }
  .center{
    flex: 1;

  }
</style>
