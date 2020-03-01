// pages/publish/publish.js
const utils = require('../../utils/util.js');
var newsAll = require("../../data/homedata.js");
var type = "酒店";
Page({
  data: {
    identity: '',
    array: ['酒店', '餐饮', '超市', '美容美发', '家政', '汽修', '保健服务', '其他'],
    objectArray: [{
        id: 0,
        name: '酒店'
      },
      {
        id: 1,
        name: '餐饮'
      },
      {
        id: 2,
        name: '超市'
      },
      {
        id: 3,
        name: '美容美发'
      },
      {
        id: 4,
        name: '家政'
      },
      {
        id: 5,
        name: '汽修'
      },
      {
        id: 6,
        name: '保健服务'
      },
      {
        id: 7,
        name: '其他'
      }
    ],
    index: 0,
    type: '',
  },

  bindPickerChange: function(e) {
    console.log('picker发送选择改变，index = ', e.detail.value)
    type = this.data.objectArray[e.detail.value].name;
    this.setData({
      index: e.detail.value
    })
    console.log('picker发送选择改变，携带值为', type) 
  },

  onLoad: function(options) {
    console.log('onLoad value is :' + options.identity)
    this.setData({
      identity: options.identity
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  //选择本地图片并上传
  uploadImg: function() {
    var _this = this

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        // console.log(tempFilePaths[0])

        _this.setData({
          imgSrc: tempFilePaths,
        })

        //上传图片
        wx.uploadFile({
          url: 'http://example.weixin.qq.com/upload', //地址
          filePath: tempFilePaths[0], //图片临时目录
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function(res) {
            var data = res.data
            //do something
          }
        })
      }
    })
  },

  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    //发送请求给 mi-home addRecruit
    //发送数据给服务器 addRecruit
    var formValue = e.detail.value;
    console.log(' formVale1 =', formValue.phone)
    var getUrl = '/add_recruit?name=' + formValue.introduce + '&phone=' + formValue.phone + '&description=' + formValue.introducedetail + '&type=' + type + '&identity=' + this.data.identity;
    console.log('getUrl = ' + getUrl)

    //设计 分类类型
    utils.get(getUrl).then(res => {
      var data = res.data;
      console.log('addrecruit is : ' + data);
      var jsonData = JSON.parse(data);
      console.log('current service is :' + jsonData.name)
      console.log('addrecruit description is : ' + jsonData.description);
      if (res.status == 200) {
        console.log('addrecruit description is : ' + jsonData.companyBeans[0].description);
        // that.setData({ 
        //   Loadinghidden: true
        // });
      }
    }).catch(res => {
      console.log(res);
    });
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})