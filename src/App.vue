<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view v-wechat-title="$route.meta.title" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
   
  },
  beforeCreate () {

  },
  created(){
    this.onloads()
  },
  methods:{
    onloads(){
           // 阻止双击放大
    let lastTouchEnd = 0;
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    document.addEventListener('touchend', function(event) {
        let now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // 阻止双指放大
    document.addEventListener('gesturestart', function(event) {
        event.preventDefault();
    });
    }
  }
   
}
</script>

<style>
#app {
  font-family: Heiti SC,SimHei,PingFangSC-Medium,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height:100%;
}
</style>
