// pages/login/login.js
var authUtil = require('../../utils/auth.js');
var commonUtil = require('../../utils/common_util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role:{
      selRole: 1,
      highlight: 'highlight',
      normal: 'normal',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理,  //todo 不做兼容
      // wx.getUserInfo({
      //   success: res => {
      //     app.globalData.userInfo = res.userInfo
      //     this.setData({
      //       userInfo: res.userInfo,
      //       hasUserInfo: true
      //     })
      //   }
      // })
    }
  },

  getUserInfo: function (e) {
    console.log("====getUserInfo,", e)
    var that = this;
    app.globalData.userInfo = e.detail.userInfo
    that.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
    that.login(app.globalData.userInfo);
  },

  login:function(userInfo){
    var that = this;
    //通过deviceId请求登陆接口 
    console.log("deviceId:%o", authUtil.deviceInfo.getDeviceId());
    app.globalData.role = that.data.role.selRole;
    authUtil.loginSession.setSession(userInfo);
    authUtil.loginSession.setRole(that.data.role.selRole);

    wx.switchTab({
      url: '/pages/personal/personal'
    })

  },
  selRole: function(e){
    var selectedIndex = e.currentTarget.dataset.index;
    this.setData({
      'role.selRole': selectedIndex
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})