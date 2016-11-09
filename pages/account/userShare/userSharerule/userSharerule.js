var app =getApp();
var show = false
Page({
  data:{
    "text":"邀请好友规则"
  },
  change:function(e){
      // show = !show;
      console.log(show);
      var id = e.currentTarget.id , data = {};
      data[id + 'Show'] = !this.data[id + 'Show'];
      this.setData(data);
      console.log(data)
  }
})