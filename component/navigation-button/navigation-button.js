// component/navigation-button/navigation-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   *  ['建筑', '家庭', '餐饮', '家庭维修', '服务', '驾驶', '物流', '普工'],
   */
  data: {
    info: [
      [{
          "img": "/images/jianzhu.jpg",
          "name": "建筑"
        },
        {
          "img": "/images/jiazheng.jpg",
          "name": "家政"
        },
        {
          "img": "/images/canyin.jpg",
          "name": "餐饮"
        },
        {
          "img": "/images/jiazhuang.jpg",
          "name": "家装"
        }
      ],
      [{
        "img": "/images/jigong.jpg",
        "name": "普工/技工"
        },
        {
          "img": "/images/wuliu.jpg",
          "name": "物流/仓储"
        },
        {
          "img": "/images/xiaoshou.jpg",
          "name": "销售"
        },
        {
          "img": "/images/renshi.jpg",
          "name": "人事/行政"
        }
      ]
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onJumpTap: function(e) {
      var name = e.currentTarget.dataset.name;
      console.log(name);
      //进入酒店json 向服务器发起请求
      // wx.navigateTo({
      //   url: '/pages/recruit-detail/recruit-detail'
      // })
      // 内部方法建议以下划线开头
      // wx.navigateTo({
      //   url: '../recruit-detail/recruit-detail',
      // })
      console.log("哈哈");
      // var myEventDetail = {name:name} // detail对象，提供给事件监听函数
      // var myEventOption = {} // 触发事件的选项
      // this.triggerEvent('myevent', myEventDetail, myEventOption)
      wx.navigateTo({
        url: '../recruit-detail/recruit-detail?type='+name
      })
    }
  }
})