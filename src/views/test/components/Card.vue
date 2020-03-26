<template>
  <div class="cardBox">
    <ul>
      <li class="cardtext" v-for="(item,index) in datainfo" :key="index">
        <img src="../../../assets/images/image.png" alt />

        <div class="infoBox">
          <div class="infoName">
            <span class="leftName">{{item.productName}}</span>
            <span class="rightStatus">
              <span class="Icon" :class="[item.productStatus==2?'active':'']"></span>
              {{item.productStatus==1?'进行中':'审核中'}}
            </span>
          </div>
          <p class="infoPerson">项目经理:{{item.person}}</p>
          <p class="infoTime">立项日期:{{item.plantTime}}</p>
          <p class="infoTask">
            任务:
            <span>{{item.tasksum}}</span>完成
            <span>{{item.finish}}</span> 进行
            <span>{{item.goin}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    datainfo: {
      type: Array
    }
  },
  methods: {},
  created() {}
};
</script>
<style  scoped lang="scss">
.cardBox {
  width: 100%;
  height: 120px;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    li {
      min-width: 20vw;
      height: 12vh;
      border: 1px solid #bbb;
      box-sizing: content-box;
      box-shadow:6px 5px 5px #333333;
      margin: 12px 20px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      border-radius:12px;
      align-items: center;
      padding: 0.1vh 1vw;

      img {
        width: 4vw;
        height: 4vw;
        margin-right: 1vw;
      }
      .infoBox {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        font-size: 14px;
        .infoName {
          width: 100%;
          display: flex;
          line-height: 36px;
          justify-content: space-between;
          .leftName {
            font-size: 18px;
            font-weight: bold;
          }
          .rightStatus {
            font-size: 12px;
            .Icon {
              width: 12px;
              height: 12px;
              display: inline-block;
              border-radius: 50%;
              background: #1890ff;
              margin-right: 10px;
            }
            .active{
               background: #FF4E32;
            }
          }
        }
        .infoPerson,
        .infoTime,
        .infoTask {
          line-height: 30px;
        }
        .infoTask {
          span {
            display: inline-block;
            min-width: 15px;
          }
        }
      }
    }
  }
}
</style>