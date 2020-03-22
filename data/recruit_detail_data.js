var arrayJianzhu = ['全部', '建筑木工/铝膜/模板/门窗安装', '钢筋工/铁工/架子工/浇筑混凝土/砼工', '泥工/抹灰/砌砖/瓦工/贴砖', '油漆/涂料/腻子/大白', '电工/消防/水暖', '小工/力工']

var jianzhuObjArray = [
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
]

var arrayJiazheng = ['全部', '保姆', '保洁', '护理', '月嫂']
var jiazhengObjArray = [
  {
    id: 0,
    name: '全部'
  },
  {
    id: 1,
    name: '保姆'
  },
  {
    id: 2,
    name: '保洁'
  },
  {
    id: 3,
    name: '护理'
  },
  {
    id: 4,
    name: '月嫂'
  }
]

//餐饮
var arrayCanyin = ['全部', '服务员/迎宾接待/传菜', '厨师/厨师长', '面点/水案/茶艺', '后厨/洗碗工']

var canyinObjArray = [
  {
    id: 0,
    name: '全部'
  },
  {
    id: 1,
    name: '服务员/迎宾接待/传菜'
  },
  {
    id: 2,
    name: '厨师/厨师长'
  },
  {
    id: 3,
    name: '面点/水案/茶艺'
  },
  {
    id: 4,
    name: '后厨/洗碗工'
  }
]
//家装
var arrayJiazhuang = ['全部', '家电维修', '房屋维修', '管道疏通', '电路维修','电脑维修']
var jiazhuangObjArray = [
  {
    id: 0,
    name: '全部'
  },
  {
    id: 1,
    name: '家电维修'
  },
  {
    id: 2,
    name: '房屋维修'
  },
  {
    id: 3,
    name: '管道疏通'
  },
  {
    id: 4,
    name: '电路维修'
  },
  {
    id: 5,
    name: '电脑维修'
  }
]

//技工
var arrayJigong = ['全部', '制冷/水暖工/锅炉工', '钳工/焊工/切割/车工/铣工/电镀工', '铸造/注塑/模具工', '组装工/包装工', '操作工/电梯工/铲车工/叉车工/吊车工', '样衣工/纺织工/缝纫工/印花工/压熨工/染工']

var jigongObjArray = [
  {
    id: 0,
    name: '全部'
  },
  {
    id: 1,
    name: '制冷/水暖工/锅炉工'
  },
  {
    id: 2,
    name: '钳工/焊工/切割/车工/铣工/电镀工'
  },
  {
    id: 3,
    name: '铸造/注塑/模具工'
  },
  {
    id: 4,
    name: '组装工/包装工'
  },
  {
    id: 5,
    name: '操作工/电梯工/铲车工/叉车工/吊车工'
  },
  {
    id: 6,
    name: '样衣工/纺织工/缝纫工/印花工/压熨工/染工'
  }
]

var arrayWuliu = ['全部', '快递员', '调度员', '分拣员', '仓库管理员', '装卸/搬运工']
var wuliuObjArray = [
  {
    id: 0,
    name: '全部'
  },
  {
    id: 1,
    name: '快递员'
  },
  {
    id: 2,
    name: '调度员'
  },
  {
    id: 3,
    name: '分拣员'
  },
  {
    id: 4,
    name: '仓库管理员'
  },
  {
    id: 5,
    name: '装卸/搬运工'
  }
]

//销售
var arrayXiaoshou = ['全部', '营业员/店员/导购/客服', '招商/销售/业务员']

var xiaoshouObjArray = [
  {
    id: 0,
    name: '全部'
  },
  {
    id: 1,
    name: '营业员/店员/导购/客服'
  },
  {
    id: 2,
    name: '招商/销售/业务员'
  }
]

var arrayRenshi = ['全部', '文员', '前台/总机/接待', '人事专员', '行政专员', '助理/秘书', '后勤/内勤']
var renshiObjArray = [
  {
    id: 0,
    name: '全部'
  },
  {
    id: 1,
    name: '文员'
  },
  {
    id: 2,
    name: '前台/总机/接待'
  },
  {
    id: 3,
    name: '人事专员'
  },
  {
    id: 4,
    name: '行政专员'
  },
  {
    id: 5,
    name: '助理/秘书'
  },
  {
    id: 6,
    name: '后勤/内勤'
  }
]

module.exports = { 
  arrayJianzhu: arrayJianzhu,
  jianzhuObjArray: jianzhuObjArray,
  arrayJiazheng: arrayJiazheng,
  jiazhengObjArray: jiazhengObjArray,
  arrayCanyin: arrayCanyin,
  canyinObjArray: canyinObjArray,
  arrayJiazhuang: arrayJiazhuang,
  jiazhuangObjArray: jiazhuangObjArray,
  jigongObjArray: jigongObjArray,
  arrayJigong: arrayJigong,
  wuliuObjArray: wuliuObjArray,
  arrayWuliu: arrayWuliu,
  arrayRenshi: arrayRenshi,
  renshiObjArray: renshiObjArray,
  arrayXiaoshou: arrayXiaoshou,
  xiaoshouObjArray: xiaoshouObjArray
}