var app =getApp()
Page({
  data:{
    "text":"账户总资产"
  },
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {
    // 计算百分比
    // 可用余额为9  红包余额为 8 待收本金为60 待收收益为3 提现中的金额为 20 
    // 所以账户总资产为 9 + 8 + 60 + 3 + 20 = 100
    // 各自占的百分比为：
    // 可用余额 0.09
    // 红包余额 0.08
    // 待收本金 0.6
    // 待收收益为 0.03
    // 提现中的金额 0.2

    // 使用 wx.createContext 获取绘图上下文 context

    var canvas1Id = "firstCanvas";
    var canvas2Id = "secondCanvas";


    var context = wx.createContext();

    // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    // wx.drawCanvas({
    //   canvasId: 'firstCanvas',
    //   actions: context.getActions() // 获取绘图动作数组
    // })

    [canvas1Id, canvas2Id].forEach(function (id) {
      context.clearActions()
      // 在context上调用方法

      context.setLineWidth(15) // 线的宽度
			context.beginPath();
      context.setStrokeStyle("#ff0000")
			context.arc(75,100,60,0,2*Math.PI*0.09);
      context.stroke();

      context.beginPath();
      context.setStrokeStyle("#ffff00")
			context.arc(75,100,60,2*Math.PI*0.09,2*Math.PI*0.08);
			context.stroke();

      context.beginPath();
      context.setStrokeStyle("#ff00ff")
			context.arc(75,100,60,2*Math.PI*(0.09+0.08),2*Math.PI*0.6);
			context.stroke();

      context.beginPath();
      context.setStrokeStyle("#aa00ff")
			context.arc(75,100,60,2*Math.PI*(0.09+0.08+0.6),2*Math.PI*0.03);
			context.stroke();

      context.beginPath();
      context.setStrokeStyle("#bbccff")
			context.arc(75,100,60,2*Math.PI*(0.09+0.08+0.6+0.03),2*Math.PI*0.2);
			context.stroke();


      wx.drawCanvas({
        canvasId: id,
        actions: context.getActions()
      })
    })
  }

})