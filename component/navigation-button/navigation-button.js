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
          "img": "/images/jisuanji.jpg",
          "name": "建筑"
        },
        {
          "img": "/images/shuxue.jpg",
          "name": "家庭"
        },
        {
          "img": "/images/wuli.jpg",
          "name": "餐饮"
        },
        {
          "img": "/images/wenxue.jpg",
          "name": "家庭维修"
        }
      ],
      [{
        "img": "/images/shengwu.jpg",
        "name": "服务"
        },
        {
          "img": "/images/huaxue.jpg",
          "name": "驾驶"
        },
        {
          "img": "/images/yinyue.jpg",
          "name": "物流"
        },
        {
          "img": "/images/more.jpg",
          "name": "普工"
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