var app =getApp()
Page({
  data:{
    "text":"投资详情",
    tab0Show:true
  },
  onLoad:function(options){
    var that = this;
      console.log(options + "1321");
      wx.request({
      url: 'https://www.phyt88.com/v2/project/obtain_invest_record_by_sid.jso?pageSize=15&pageIndex=1&sid=21600',
      data: "sid=" + options.sid,
      method:"POST",
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        // console.log(res.data.rows);
        that.setData({
            investList:res.data.rows,
          })  
      }
    })
  },
  change:function(e){
      var type = [
          "tab0","tab1","tab2"
      ];

      var data = {};
      var id = e.currentTarget.id;
      //   console.log(id)
      for(var i=0,len = type.length;i<len;i++){
          data[type[i]+"Show"] = false ;
      };
      
      // data[id+"Show"] = !this.data[id+"Show"];
      // 点击自身的时候防止显示隐藏
      if(data[id+"Show"]==false){
        data[id+"Show"] = true;
      }else{
        data[id+"Show"] = !this.data[id+"Show"];
      }
      this.setData(data);
  },
  ShowHide:function(e){
    var id = e.currentTarget.id;
    var data = {};
    data[id + "Show" ] = !this.data[id + "Show" ];
    this.setData(data)
    // console.log(data)

  }
})