<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from './components/content/mainTabBar.vue'
export default {
  name: 'App',
  data(){
	  return{

	  }
  },
  components: {
	mainTabBar
  }
}
</script>

<style>

</style>
