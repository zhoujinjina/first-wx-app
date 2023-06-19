// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
username:'',
goods:[]
  },
  require(){
    const that=this
    wx.request({
      url: 'http://127.0.0.1:5000/goods',
      method:"GET",
      success:function(res){
       if(res.data.state){
         that.setData({
    goods:res.data.goods
         })
       }
      }
    })
  },
  addToCart(event){
    var name = event.currentTarget.dataset.name;
  var price = event.currentTarget.dataset.price;
    console.log(name,price)
    var allgoods=wx.getStorageSync('cart') || [];
wx.setStorageSync('cart', [...allgoods,{goods:name,price:price}])
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const user = wx.getStorageSync('user');
this.setData({
  username:user.username
})
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