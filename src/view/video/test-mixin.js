export const mixins = {
  data () {
    return {
      animation: 'bounce',
      name: 'title',
      section_num: 2009
    }
  },
  created () {
    this.$message.success('the project is created by someone who has a parasol')
  },
  mounted () {
    console.log('mission is success')
  },
  methods: {
    stealBook () {
      this.$confirm('检测到有未保存的内容，是否在离开之前保存？ 不保存你会后悔的', '微信提示', {
        confirmButtonText: '确认保存',
        cancelButtonText: '狠心离开，一去不回头'
      }).then(confirm => {
        this.$message.success('已保存了孩子，你走吧！')
        console.log(confirm)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
