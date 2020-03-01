const app = getApp();
const utils = require('../../utils/util.js');
var contentAll = require("../../data/homedata.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'michael1',
    phone: '13720026510',
    description: '未知'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var imagesPath = [{
        "header_id": 1,
        "header_image": "../../images/tengxun.jpg"
      },
      {
        "header_id": 2,
        "header_image": "../../images/ali.jpg"
      }
    ];
    this.setData({
      content: contentAll.content,
      imagesPath: imagesPath
    });

  },

  onJumpTap: function(e) {
    console.log('onJumpTap' + e.data.value)
    console.log(e.type) 
  },
  /*
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  onPostDetail: function(event) {
    var newsId = event.currentTarget.dataset.newsId;
    wx.navigateTo({
      url: '../details/detail?id=' + newsId
    })
  },

  onPullDownRefresh() {
    console.log("下拉刷新！！！！");
    wx.showNavigationBarLoading();
    /* 在这里重新加载页面数据 */
    wx.hideNavigationBarLoading();
    wx.stopPullDownRefresh();
  },

  onJumpPublish() {
    wx.navigateTo({
      url: '../publish/publish?identity=company'
    })
  }
})