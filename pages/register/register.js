// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  register(e){
   console.log(e.detail.value)
   const {password,username,confirmPassword}=e.detail.value
   if(password!==confirmPassword){
    wx.showToast({
      title: '两次密码不一致',
      icon: 'none',
      duration: 2000,
    });
   }else{
    wx.request({
      url: 'http://127.0.0.1:5000/register',
      method: 'POST',
      data: {username:username,password:password},
      success: function(res) {
        console.log(res.data);
        // wx.setStorageSync('user', {username:res.data.user.username});
        wx.switchTab({
          url: '/pages/me/me',
        })
      },
      fail: function(res) {
        console.log(res);
      },
    });
   }
  }
,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})