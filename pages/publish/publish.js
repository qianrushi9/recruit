// pages/publish/publish.js
const utils = require('../../utils/util.js');
var newsAll = require("../../data/homedata.js");
var type = "建筑";
var subType = "建筑木工/铝膜/模板/门窗安装";
Page({
  data: {
    identity: '',
    multiArray: [
      ['建筑', '家庭', '餐饮', '家庭维修', '服务', '驾驶', '物流', '普工'],
      ['建筑木工/铝膜/模板/门窗安装', '钢筋工/铁工/架子工/浇筑混凝土/砼工', '泥工/抹灰/砌砖/瓦工/贴砖', '油漆/涂料/腻子/大白', '电工/消防/水暖', '小工/力工']
    ],
    objectMultiArray: [
      [{
          id: 0,
          name: '建筑'
        },
        {
          id: 1,
          name: '家庭'
        },
        {
          id: 2,
          name: '餐饮'
        },
        {
          id: 3,
          name: '家庭维修'
        },
        {
          id: 4,
          name: '服务'
        },
        {
          id: 5,
          name: '驾驶'
        },
        {
          id: 6,
          name: '物流'
        },
        {
          id: 7,
          name: '普工'
        }
      ],
      [{
          id: 0,
          name: '建筑木工/铝膜/模板/门窗安装'
        },
        {
          id: 1,
          name: '钢筋工/铁工/架子工/浇筑混凝土/砼工'
        },
        {
          id: 2,
          name: '泥工/抹灰/砌砖/瓦工/贴砖'
        },
        {
          id: 3,
          name: '油漆/涂料/腻子/大白'
        },
        {
          id: 4,
          name: '电工/消防/水暖'
        },
        {
          id: 6,
          name: '小工/力工 '
        }
      ]
    ],
    multiIndex: [0, 0],
    index: 0,
    type: '',
    subType: ''
  },

  bindMultiPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['建筑木工/铝膜/模板/门窗安装', '钢筋工/铁工', '架子工', '钢结构安装工/打板/不锈钢', '焊工/铆工/钣金/钳工/车床'];
            break;
          case 1:
            data.multiArray[1] = ['保姆', '保洁', '护理', '月嫂'];
            break;
          case 2:
            data.multiArray[1] = ['厨师', '水案/面点', '洗碗/服务员'];
            break;
          case 3:
            data.multiArray[1] = ['家电维修', '房屋维修', '管道疏通', '电路维修', '电脑维修'];
            break;
          case 4:
            data.multiArray[1] = ['客服/营业员/销售'];
            break;
          case 5:
            data.multiArray[1] = ['货车/小车'];
            break;
          case 6:
            data.multiArray[1] = ['快递/物流/配送', '仓储/保安'];
            break;
          case 7:
            data.multiArray[1] = ['计时工/即时工/兼职/工厂'];
            break;
        }
        data.multiIndex[1] = 0;
        break;
      case 1:
        console.log('case 1:' + data.multiIndex);
        break;
    }

    this.setData(data);
    type = this.data.multiArray[0][this.data.multiIndex[0]];
    subType = this.data.multiArray[1][this.data.multiIndex[1]]
    console.log(type);
    console.log(subType);
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

  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    //发送请求给 mi-home addRecruit
    //发送数据给服务器 addRecruit
    var formValue = e.detail.value;
    if(this.data.identity == 'company'){
      this.addCompanyRecruit(formValue);
    }else{
      // this.
      this.addCompanyRecruit(formValue);
    }
  },


  addCompanyRecruit: function (formValue) {
    console.log(' formVale1 =', formValue.phone)
    var getUrl = '/add_recruit?name=' + formValue.introduce + '&phone=' + formValue.phone + '&description=' + formValue.introducedetail + '&type=' + type + '&subType=' + subType + '&identity=' + this.data.identity + '&salary=' + formValue.salary;
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