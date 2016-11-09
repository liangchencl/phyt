var app =getApp()
Page({
  data:{
    "text":"投资0",
    tzList:[]
  },
  onLoad:function(e){
    var that = this;
    //   console.log(that);
      wx.request({
      url: 'https://www.phyt88.com/v2/project/obtain_small_section_list.jso?pageSize=5&pageIndex=1',
      data:"",
      method:"POST",
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res);
        that.setData({
            tzList:res.data.rows,
          })
      }
    })
  }
})