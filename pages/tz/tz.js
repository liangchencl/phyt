var app =getApp()
Page({
  data:{
    "text":"投资0",
    tzList:[],
    shdShow : true
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
  },
  change:function(e){
    var type = [
          "shd","sdd","sqd"
      ];
      var data = {};
      var id = e.currentTarget.id;
      for(var i=0,len = type.length;i<len;i++){
          data[type[i]+"Show"] = false ;
      };
      // 点击自身的时候防止显示隐藏
      if(data[id+"Show"]==false){
        data[id+"Show"] = true;
      }else{
        data[id+"Show"] = !this.data[id+"Show"];
      }
      this.setData(data);
  }
})