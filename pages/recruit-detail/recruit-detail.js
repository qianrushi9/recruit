const utils = require('../../utils/util.js');
var contentAll = require("../../data/homedata.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryPageShow: true,
    searchPageShow: false,
    xxImageShow: false,
    type: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      type: options.type
    })
    wx.setNavigationBarTitle({
      title: this.data.type,
    })
    console.log('recruit detail page enter, type =', this.data.type)
    //獲取最新數據
    var getUrl = '/get_company_recruit?type=' + this.data.type;
    console.log('getUrl = ' + getUrl)
    //设计 分类类型
    utils.get(getUrl).then(res => {
      var data = res.data;
      if(data === 'null'){
        console.log('addrecruit data is null ');
        //展示空 view
        this.setData({
          categoryPageShow: false,
        })
      }else{
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
    // this.setData({
    //   category: contentAll.category
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 当聚焦 input 框的时候触发
   */
  onBindfocus: function(event) {
    this.setData({
      categoryPageShow: false,
      searchPageShow: true,
      xxImageShow: true
    });
  },

  onCancelImgTap: function(event) {
    this.setData({
      categoryPageShow: true,
      searchPageShow: false,
      xxImageShow: false
    });
  },

  onJumpMore: function(event) {
    /* 跳到分类详情页面，并把当前分类的 id 传过去 */
    var categoryId = event.currentTarget.dataset.categoryId;
    console.log(categoryId);
    wx.navigateTo({
      url: '../single-category/single-category?categoryId=' + categoryId
    })
  }
})