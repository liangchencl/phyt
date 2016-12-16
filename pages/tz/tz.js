var app =getApp();
var url;
var getList = function(that,url){
  wx.request({
      url: url,
      data: {
        pageSize:6,pageIndex:1
      },
      method:"POST",
      header: {
          "content-type":"application/x-www-form-urlencoded; charset=UTF-8"
      },
      success: function(res) {
        // console.log(res.data.rows);
        // console.log(123)
        for(var i=0,num=res.data.rows.length;i<num;i++){
          // console.log(typeof(res.data.rows[i].amount))
          // 给json数据里面的的 amount重新取值，其实就是利用字符串截取了整数部分
          res.data.rows[i].conSn = res.data.rows[i].conSn.substring(3,10);
          res.data.rows[i].last = res.data.rows[i].conSn.substring(-1,1);
          res.data.rows[i].amount = parseInt(res.data.rows[i].amount);;
          if(res.data.rows[i].deadlineStr.substring(0,2) > 9 ){
            res.data.rows[i].deadlineStr = res.data.rows[i].deadlineStr.substring(0,2);
          }else{
            res.data.rows[i].deadlineStr = res.data.rows[i].deadlineStr.substring(0,1);
          };
          res.data.rows[i].percent = ((res.data.rows[i].raisedAmount / res.data.rows[i].amount)*100).toFixed(1)
        }
        that.setData({
            shdList:res.data.rows,
          })
      }
    })
}


var type = ["shd","sdd","sqd"];
var data = {};



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
    var arr2 = [];

    getList(that,"https://www.phyt88.com/v2/project/obtain_big_section_list.jso")

  },

  change:function(e){
    var that = this;
    getList(that,"https://www.phyt88.com/v2/project/obtain_big_section_list.jso")
    // console.log("111111111")
    // console.log(e)
    // 也可以通过 判断 e.target.id 来进行切换
    // 在wxmlwxml 页面判断 e.target.id = shd ? 'active_show' : 'active_hide' 是否为真 来看点击的否是当前的一个
    // console.log(e.target.id)
    
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
  },

  change2:function(e){
    var that = this;
    getList(that,"https://www.phyt88.com/v2/project/obtain_small_section_list.jso");
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
  },

  change3:function(e){
    var that = this;
    getList(that,"https://www.phyt88.com/v2/project/obtain_brand_section_list.jso");
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

// change  change2 change3 重复了切换代码，在点击事件bindtap里面不能添加两个事件，可以用冒泡机制来实现。
// 就是在外层再套一个view  然后给一个点击事件，点击change的时候会冒泡，从而触发view上面的事件。