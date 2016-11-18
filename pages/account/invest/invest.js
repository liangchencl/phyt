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
      url: 'https://www.phyt88.com/v2/project/obtain_invest_record_by_sid.json?pageSize=8&sid=21583&pageIndex=1',
      data:"",
      method:"POST",
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        // console.log(res.data.investRecordOutput.rows);
        var len = res.data.investRecordOutput.rows.length;
        console.log(len)
        
        for(var i=0;i<len;i++){
          // console.log(res.data.investRecordOutput.rows[i].money);
          res.data.investRecordOutput.rows[i].money = parseInt(res.data.investRecordOutput.rows[i].money)
        }

        // for(var i=0,num=res.data.rows.length;i<num;i++){
        //   res.data.rows[i].conSn = res.data.rows[i].conSn.substring(3,10);
        //   res.data.rows[i].last = res.data.rows[i].conSn.substring(-1,1);
        //   res.data.rows[i].amount = res.data.rows[i].amount.substring(-1,6);
        //   res.data.rows[i].percent = ((res.data.rows[i].raisedAmount / res.data.rows[i].amount)*100).toFixed(1)
        // }

        that.setData({
            investList:res.data.investRecordOutput.rows,
          })  
      }
    })
  },
  change:function(){
    console.log(123)
  }
})