const app = getApp();
const utils = require('../../utils/util.js');
var authUtil = require('../../utils/auth.js');
var contentAll = require("../../data/homedata.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'michael1',
    phone: '13720026510',
    description: '未知',
    category:'',
    categoryPageShow: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var userInfo = authUtil.loginSession.getSession();
    if (!utils.isJSNotEmpty(userInfo)) {
      console.log('un oauthed,go to login');
      wx.redirectTo({
        url: '../login/login',
      })
    } else {
      console.log(' oauthed ,enter home page'+userInfo.name);
      var imagesPath = [{
        "header_id": 1,
        "header_image": "../../images/bg_work.jpg"
      }];
      this.setData({
        content: contentAll.content,
        imagesPath: imagesPath
      });
      this.get_company_recruit();
    }
  },

  get_company_recruit: function () {
    var getUrl = '/get_company_recruit?type=建筑';
    console.log('getUrl = ' + getUrl)
    //设计 分类类型
    utils.get(getUrl).then(res => {
      var data = res.data;
      if (data === 'null') {
        console.log('addrecruit data is null ');
        //展示空 view
        this.setData({
          categoryPageShow: false,
        })
      } else {
        console.log('addrecruit is : ' + data);
        var jsonData = JSON.parse(data);
        // console.log('addrecruit description is : ' + jsonData.description);
        if (res.status == 200) {

        }
        this.setData({
          categoryPageShow: true,
          category: jsonData
        })
      }
    }).catch(res => {
      console.log(res);
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