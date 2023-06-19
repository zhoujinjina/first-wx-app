// index.js
Page({
  showMessage:function(){
    wx.showToast({
      title:"老八超你好！",
      icon:"none"
    })
  },
  navigateToPage: function() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  }
})
