var app =getApp()
Page({
  data:{
    "text":"账户总资产"
    // can_01 : "282.00",
    // can_02 : "79.00",
    // can_03 : "594.00",
    // can_04 : "429.00",
    // can_05 : "394.00",
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
    var can_01 = 282.00;
    var can_02 = 79.00;
    var can_03 = 594.00;
    var can_04 = 429.00;
    var can_05 = 394.00;
    var can_all = can_01 + can_02 + can_03 + can_04 + can_05;

    var per_01 = parseFloat(can_01/can_all);
    var per_02 = parseFloat(can_02/can_all);
    var per_03 = parseFloat(can_03/can_all);
    var per_04 = parseFloat(can_04/can_all);
    var per_05 = parseFloat(can_05/can_all);
    // console.log(per_01+per_02+per_03+per_04+per_05)

    var can_21 = 294.00;
    var can_22 = 129.00;
    var can_23 = 1904.00;
    var can_all = can_21 + can_22 + can_23;

    var per_21 = parseFloat(can_21/can_all);
    var per_22 = parseFloat(can_22/can_all);
    var per_23 = parseFloat(can_23/can_all);


    var context = wx.createContext();
      context.setLineWidth(15) // 线的宽度
			context.beginPath();
      context.setStrokeStyle("#ff7f6d")
			context.arc(75,90,60,0,2*Math.PI*per_01);
      context.stroke();

      context.beginPath();
      context.setStrokeStyle("#9ad660")
			context.arc(75,90,60,2*Math.PI*per_01,2*Math.PI*per_02);
			context.stroke();

      context.beginPath();
      context.setStrokeStyle("#ffaa43")
			context.arc(75,90,60,2*Math.PI*(per_01+per_02),2*Math.PI*per_03);
			context.stroke();

      context.beginPath();
      context.setStrokeStyle("#cd97fe")
			context.arc(75,90,60,2*Math.PI*(per_01+per_02+per_03),2*Math.PI*per_04);
			context.stroke();

      context.beginPath();
      context.setStrokeStyle("#45ade1")
			context.arc(75,90,60,2*Math.PI*(per_01+per_02+per_03+per_04),2*Math.PI*per_05);
			context.stroke();

      wx.drawCanvas({
        canvasId: "firstCanvas",
        actions: context.getActions()
      })

      
// 第二个canvas
      context.setLineWidth(15) // 线的宽度
			context.beginPath();
      context.setStrokeStyle("#45ade1")
			// 先移动旋转，然后重绘
      context.translate(200,115);
      context.rotate(135 * Math.PI / 180)
      
      context.arc(75,100,60,0,1.5*Math.PI*per_21);
      context.stroke();
      context.beginPath();
      context.setStrokeStyle("#9ad660")
			context.arc(75,100,60,1.5*Math.PI*per_21,1.5*Math.PI*per_22);
			context.stroke();
      context.beginPath();
      context.setStrokeStyle("#ffaa43")
			context.arc(75,100,60,1.5*Math.PI*(per_21+per_22),1.5*Math.PI*per_23);
			context.stroke();

      wx.drawCanvas({
        canvasId: "secondCanvas",
        actions: context.getActions()
      })

      this.setData({
        can_01 : "282.00",
        can_02 : "79.00",
        can_03 : "594.00",
        can_04 : "429.00",
        can_05 : "394.00",
        can_21 : "294.00",
        can_22 : "129.00",
        can_23 : "1904.00"
      })

  }

})