var addressData =require( '../../../../utils/addressData.js' )
Page({
  data:{
    "text":"管理收货地址"
  },
  
  checkProvince: function(e){
           var index = e.target.dataset.index
           var that = this
           that.setData({
                  pi: index,
                  ci: 0,
                  ai: 0
           })
    },

    checkCity: function(e){
           var index = e.target.dataset.index
           var that = this
           that.setData({
                  ci: index,
                  ai: 0
           })
    },

    checkArea: function(e){
           var index = e.target.dataset.index
           var that = this
           that.setData({
                  ai: index
           })
    },
    checkAddr: function(){
            var that = this
            var pi = parseInt(that.data.pi)
            var ci = parseInt(that.data.ci)
            var ai = parseInt(that.data.ai)

            var p = addressData.addressData.province[pi].name
            var c = addressData.addressData.province[pi].city[ci].name
            var a = addressData.addressData.province[pi].city[ci].area[ai].name

     that.setData({
                   addrValue: p+c+a,
                   showCity: false,
                   showMask: false
            })
}
})
