var app =getApp()
Page({
  data:{
    "text":"投资0",
    shdList:[],
    shdShow : true
  },
  onLoad:function(e){
    var that = this;
    var page = 1 ;
    var num = 6 ;
    //   console.log(that);
    // 商行贷
    wx.request({
      url: 'https://www.phyt88.com/v2/project/obtain_big_section_list.jso?pageSize=6&pageIndex=1',
      data: {},
      method:"POST",
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.rows);
        that.setData({
            shdList:res.data.rows,
          })
      }
    }),
    // 商抵贷
    wx.request({
      url: 'https://www.phyt88.com/v2/project/obtain_small_section_list.jso?pageSize=6&pageIndex=1',
      data:"",
      method:"POST",
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.rows);
        that.setData({
            sddList:res.data.rows,
          })
      }
    }),
    // 商企贷
    wx.request({
      url: 'https://www.phyt88.com/v2/project/obtain_brand_section_list.jso?pageSize=6&pageIndex=1',
      data:"",
      method:"POST",
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data.rows);
        that.setData({
            sqdList:res.data.rows,
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