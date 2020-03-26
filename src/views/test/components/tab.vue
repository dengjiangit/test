<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="category" label="所属品类" width="180"></el-table-column>
    <el-table-column prop="productCategory" label="项目类别" width="180"></el-table-column>
    <el-table-column prop="pid" label="项目编号"></el-table-column>
    <el-table-column prop="productName" label="项目名称"></el-table-column>
    <el-table-column prop="productStatus" label="项目状态">
      <template slot-scope="scope">
        <span class="Icon" :class="[scope.row.productStatus==2?'active':'']"></span>
        {{scope.row.productStatus==1?'进行中':'审核中'}}
      </template>
    </el-table-column>
    <el-table-column prop="person" label="项目经理"></el-table-column>
    <el-table-column prop="department" label="所属部门"></el-table-column>
    <el-table-column prop="plantTime" label="项目计划时间"></el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    datainfo: {
      type: Array
    }
  },
  data() {
    return {
      tableData: []
    };
  },
  methods: {},
  created() {
    this.tableData = this.datainfo;
  }
};
</script>

<style scoped lang="scss">
.Icon {
  display: inline-block;
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
</style>