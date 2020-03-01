// pages/resume/resumes.js
var contentAll = require("../../data/homedata.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      category: contentAll.category
    })
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

  },
  onEmployeePublish() {
    wx.navigateTo({
      url: '../publish/publish?identity=' +'employee'
    })
  }
  
})