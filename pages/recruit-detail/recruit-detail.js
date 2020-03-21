const utils = require('../../utils/util.js');
var contentAll = require("../../data/homedata.js")
var subType = "";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    categoryPageShow: true,
    category:'',
    searchPageShow: false,
    xxImageShow: false,
    type: '',
    subType:'',
    array: ['全部', '建筑木工/铝膜/模板/门窗安装', '钢筋工/铁工/架子工/浇筑混凝土/砼工', '泥工/抹灰/砌砖/瓦工/贴砖', '油漆/涂料/腻子/大白', '电工/消防/水暖', '小工/力工'],
    objectArray: [
      {
        id: 0,
        name: '全部'
      },
      {
        id: 1,
        name: '建筑木工/铝膜/模板/门窗安装'
      },
      {
        id: 2,
        name: '钢筋工/铁工/架子工/浇筑混凝土/砼工'
      },
      {
        id: 3,
        name: '泥工/抹灰/砌砖/瓦工/贴砖'
      },
      {
        id: 4,
        name: '油漆/涂料/腻子/大白'
      },
      {
        id: 5,
        name: '电工/消防/水暖'
      },
      {
        id: 6,
        name: '小工/力工 '
      }
    ],
    index: 0,
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
    this.get_company_recruit();
  },
 

  get_company_recruit: function () {
    var getUrl = '/get_company_recruit?type=' + this.data.type;
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

  /**
   * 只能跳转到公司子页
   */
  onJumpMoreDetail: function(event) {
    /* 跳到分类详情页面，并把当前分类的 id 传过去 */
    var categoryId = event.currentTarget.dataset.index;
    console.log(categoryId);
    var companyDetail = this.data.category[categoryId];
    console.log('companyDetail=='+companyDetail.name);
    wx.navigateTo({
      url: '../company-publihdetail/company-publihdetail?companyDetail=' + JSON.stringify(companyDetail)
    })
  },
  
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.data.subType = this.data.array[e.detail.value];
    console.log('picker发送选择改变，携带值为', subType)
    this.setData({
      index: e.detail.value
    })
    //全部，获取一级分类
    //其他 ，获取二级分类内容
    if('全部' == subType){
      this.get_company_recruit();
    }else{
      this.get_sub_company_recruit();
    }
  },

  get_sub_company_recruit: function () {
    var getUrl = '/get_sub_company_recruit?subType=' + this.data.subType;
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
        console.log('current service is :' + jsonData[0].subType)
        console.log('addrecruit description is : ' + jsonData[0].type);
        this.setData({
          categoryPageShow: true,
          category: jsonData
        })
      }
    }).catch(res => {
      console.log(res);
    });
  }
})