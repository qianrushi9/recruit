// pages/personal-publish/personal-publish.js
const app = getApp();
const utils = require('../../utils/util.js');
const commonUtil = require("../../utils/common_util.js")
var contentAll = require("../../data/personal_publish.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasData: false,
    content: null,
  },


  viewPublishDetail:function(e){
    var selectedIndex = e.currentTarget.dataset.index;
    var selected = this.data.content[selectedIndex];
    console.log(selected);
    wx.navigateTo({
      url: '/pages/personal-publish-detail/personal-publish-detail?id=' + selected.id,
    })
  },

  modifyPublishDetail:function(e){
    var selectedIndex = e.currentTarget.dataset.index;
    var selected = this.data.content[selectedIndex];
    console.log(selected);
    wx.navigateTo({
      url: '/pages/publish/publish?id=' + selected.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      content: contentAll.content,
      hasData : !commonUtil.checkNullObj(contentAll.content)
    });
  
    console.log(this.data.content);
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
  onPullDownRefresh() {
    console.log("下拉刷新！！！！");
    wx.showNavigationBarLoading();
    /* 在这里重新加载页面数据 */
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
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
  
  },
  onJumpPublish() {
    wx.navigateTo({
      url: '../publish/publish'
    })
  }
})