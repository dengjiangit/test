<template>
  <div class="projectBox">
    <div class="projectCenter">
      <div class="rightTotal">
          <button class="card" @click="switchtype(1)" :class="typeTotal==1?'active':''">卡片</button>
        <button class="table" @click="switchtype(2)" :class="typeTotal==2?'active':''">列表</button>

      </div>
      <div class="project-Child">
          <component :is="child" :datainfo="dataInfo"></component>
      </div>
    </div>
  </div>
</template>

<script>
import childTab from "./components/tab";
import childCard from "./components/Card";
export default {
  name: "project",
  data() {
    return {
      typeTotal: 1,
      dataInfo:[],
      child:'childCard'
    };
  },
  components: { childTab, childCard },
  methods: {
    switchtype(val) {
      if (val == this.typeTotal) return;
      this.typeTotal = val;
       this.isChild()
    },
    getInfo() {
      this.$http.get("/api/data.json").then(res => {
        if (res.status == 200) {
          this.dataInfo = res.data.data;
          
        }
      });
    },
    isChild(){
         if(this.typeTotal==1){
        this.child='childCard'
    }else{
        this.child='childTab'
    }
    }
  },

  created() {
    this.getInfo();
    this.isChild()
  }
};
</script>

<style lang="scss" scoped>
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
.projectBox {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .projectCenter {
    width: 80%;
    height: 80%;

    .rightTotal {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      height: 54px;
      button {
        outline: none;
        width: 124px;
        box-sizing: content-box;
        height: 54px;
        padding: 4px;
        border: 1px solid #E4E4E4;
        float: right;
        background: #fff;
       
        font-size: 24px;
        margin:none;
      }
      .card{
        border-right:none;
 border-radius:10px 0 0 10px;
      }
      .table{
        border-left:none;
         border-radius:0 10px 10px 0;
      }
      .active {
        color: #4FA7FF;
         border:1px solid #4FA7FF;
      }
      
    }
    .project-Child {
      width: 100%;
      margin-top: 40px;
    }
  }
}
</style>