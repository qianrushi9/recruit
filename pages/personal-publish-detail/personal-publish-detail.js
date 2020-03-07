// pages/personal-publish-detail/personal-publish-detail.js
var contentAll = require("../../data/personal_publish.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    detailData:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(contentAll)
    this.setData({
      id:options.id
    })
    console.log("id:%o",this.data.id);
    this.setData({
      detailData: contentAll.content[0]
    });
    console.log(this.data.detailData)
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