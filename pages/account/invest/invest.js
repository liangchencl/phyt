var app =getApp()
Page({
  data:{
    "text":"投资记录",
    investList:[]
  },
  onLoad:function(e){
    var that = this;
    //   console.log(that);
      wx.request({
      url: 'https://www.phyt88.com/v2/member/get_invest_project_list.jso?startTime=0&endTime=2524579200&status=0&refundType=0&pageSize=5&pageIndex=1',
      data:"",
      method:"POST",
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        // console.log(res.data.investRecordOutput.rows);
        // console.log(res)
        // that.setData({
        //     investList:res.data.rows,
        //   })  
      }
    })
  },
  change:function(){
    console.log(123)
  }
})