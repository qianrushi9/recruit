// component/navigation-button/navigation-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    info: [
      [{
          "img": "/images/jisuanji.png",
          "name": "酒店"
        },
        {
          "img": "/images/shuxue.png",
          "name": "餐饮"
        },
        {
          "img": "/images/wuli.png",
          "name": "超市"
        },
        {
          "img": "/images/wenxue.png",
          "name": "美容美发"
        }
      ],
      [{
          "img": "/images/shengwu.png",
          "name": "家政"
        },
        {
          "img": "/images/huaxue.png",
          "name": "汽修"
        },
        {
          "img": "/images/yinyue.png",
          "name": "保健服务"
        },
        {
          "img": "/images/more.png",
          "name": "其他"
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