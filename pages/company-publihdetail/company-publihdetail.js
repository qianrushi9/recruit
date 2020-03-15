// pages/personal-resume/personal-resume.js

var contentAll = require("../../data/resume.js")
var commonUtil = require("../../utils/common_util.js")
var comanyDetail='';
var detailData='';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    comanyDetail: '',
    detailData:'',
    tags: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      comanyDetail: options.companyDetail,
    }); 
    var company = JSON.parse(this.data.comanyDetail);
    console.log(company);
    this.data.detailData = this.data.comanyDetail;
    this.setData({
      detailData: company,
    })
    console.log('detailData=='+this.data.detailData);
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