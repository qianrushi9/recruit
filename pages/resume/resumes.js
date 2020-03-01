// pages/resume/resumes.js
var contentAll = require("../../data/homedata.js")
const utils = require('../../utils/util.js');

Page({

  /**
   * 個人簡歷数据
   */
  data: {
    resumePageShow: true,
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
    //獲取所有個人簡歷信息
    var getUrl = '/get_employee_recruit';
    console.log('getUrl = ' + getUrl)
    //设计 分类类型
    utils.get(getUrl).then(res => {
      var data = res.data;
      if (data === 'null') {
        console.log('addrecruit data is null ');
        //展示空 view
        this.setData({
          resumePageShow: false,
        })
      } else {
        console.log('addrecruit is : ' + data);
        var jsonData = JSON.parse(data);
        // console.log('addrecruit description is : ' + jsonData.description);
        if (res.status == 200) {

        }
        this.setData({
          resumePageShow: true,
          category: jsonData,
          imagesPath: imagesPath
        })
      }
    }).catch(res => {
      console.log(res);
    });
    
    // this.setData({
    //   content: contentAll.content,
    //   imagesPath: imagesPath
    // });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("resumes onReady")
  },

  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("resumes onPullDownRefresh");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("resume onShow")
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