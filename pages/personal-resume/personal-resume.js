// pages/personal-resume/personal-resume.js

var contentAll = require("../../data/resume.js")
var commonUtil = require("../../utils/common_util.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
     detailData:null,
     tags:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let detailData = contentAll.content[0];
    this.setData({
      detailData: detailData
    });
    let workYears = new Date().getFullYear()-commonUtil.parseTime(detailData.workIn).getFullYear();
    let tags = detailData.gender + "/" + detailData.age + "岁" + "/" + detailData.city + "/" + "工作" + workYears+"年";
    this.setData({
      tags: tags
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