var app =getApp()
Page({
  data:{
    "text":"新人有礼",
    
  },
  onLoad:function(options){
    var num = "46512.65231";
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    this.setData({
      shu : num.substring(2,8),
      hh : 131.123123.toFixed(1)
    });
    var context = wx.createContext();
    var array = [20,30,40,40];
    var colors = ["#ff0000","#fff000","#0000ff","#4aafe2"];
    var total = 0;

    for(var i=0;i<array.length;i++){
      total +=array[i]
    };
    console.log(total);  // 130
    // 圆心 半径
    var point = {x:100,y:75};
    var radius = 60;
    var start = 0;
    var end = array[0]/total*2*Math.PI;
    context.setLineWidth(10)
    for(var i =0;i<4;i++){
      context.beginPath();
      // console.log(start)
      context.setStrokeStyle(colors[i]);
      context.arc(point.x,point.y,radius,start,end)
      start = end;
      end += array[i+1]/total*2*Math.PI;
      context.setLineWidth(1);
      context.lineTo(point.x,point.y);
      context.setFillStyle(colors[i])
      context.fill();
      context.stroke();
    }

// 思路
    // context.beginPath();
    // context.setStrokeStyle("#ff0000")
    // context.arc(100,75,60,0,2*Math.PI*array[0]/total);
    // context.stroke();

    // context.beginPath();
    // context.setStrokeStyle("#00ff00")
    // context.arc(100,75,60,2*Math.PI*array[0]/total,2*Math.PI*(array[1]/total+array[0]/total));
    // context.stroke();

    // context.beginPath();
    // context.setStrokeStyle("#0000ff")
    // context.arc(100,75,60,2*Math.PI*(array[0]/total+array[1]/total),2*Math.PI*(array[2]/total+array[1]/total+array[0]/total));
    // context.stroke();



    wx.drawCanvas({
        canvasId: "secondCanvas",
        actions: context.getActions()
      })
  }
})