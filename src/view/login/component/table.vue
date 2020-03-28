<template>
  <div class="device-table">
    <el-table
      v-for="item in 10" class="device-table-container" :key="item"
      border
      :data="tableData"
      :header-cell-style="tableHeader"
      @cell-click="cellClick"
      :row-style="rowClassName"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'device-table',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      tableHeader: {
        'text-align': 'center'
      },
      rowClassName: {
      }
    }
  },
  methods: {
    cellClick (row, column, cell, event) {
      console.log(row)
      console.log(column)
      console.log(cell)
      console.log(event)
    }
  }
}
</script>
<style scoped lang="stylus">
  .device-table
    width 100%
    padding 10px 20px
    margin 0 auto
</style>
