<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend_item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'RecommendView',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data (){
      return{

      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 10px 0px 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend_item{
    flex: 1;
  }
  .recommend_item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
  .recommend a{
    text-decoration: none;
    color: gray;
  }
</style>
