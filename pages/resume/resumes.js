// pages/resume/resumes.js
var contentAll = require("../../data/homedata.js")
const utils = require('../../utils/util.js');
var type = "";
Page({

  /**
   * 個人簡歷数据
   */
  data: {
    type :'',
    resumePageShow: true,
    array: ['全部', '建筑', '家政', '餐饮', '家装', '普工/技工', '物流/仓储', '销售', '人事/行政'],
    objectArray: [{
        id: 0,
        name: '全部'
      },
      {
        id: 1,
        name: '建筑'
      },
      {
        id: 2,
        name: '家政'
      },
      {
        id: 3,
        name: '餐饮'
      },
      {
        id: 4,
        name: '家装'
      },
      {
        id: 5,
        name: '普工/技工'
      },
      {
        id: 6,
        name: '物流/仓储 '
      },
      {
        id: 7,
        name: '销售'
      },
      {
        id: 8,
        name: '人事/行政 '
      }
    ],
    index: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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
    this.get_employee_recruit();
  },

  get_employee_recruit: function() {
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
          // imagesPath: imagesPath
        })
      }
    }).catch(res => {
      console.log(res);
    });

  },

  get_sub_employee_recruit: function() {
    //獲取所有個人簡歷信息
    var getUrl = '/get_sub_employee_recruit?type=' + this.data.type;
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
          // imagesPath: imagesPath
        })
      }
    }).catch(res => {
      console.log(res);
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log("resumes onReady")
  },

  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("resumes onPullDownRefresh");
  },

  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.data.type = this.data.array[e.detail.value];
    console.log('picker发送选择改变，携带值为', this.data.type)
    this.setData({
      index: e.detail.value
    })
    //全部，获取一级分类
    //其他 ，获取二级分类内容
    if ('全部' == this.data.type) {
      this.get_employee_recruit();
    } else {
      this.get_sub_employee_recruit();
    }
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log("resume onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
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
  onEmployeePublish() {
    wx.navigateTo({
      url: '../publish/publish?identity=' + 'employee'
    })
  }

})