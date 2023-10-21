Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    backgroundColor: "#8b0012",
    list: [
      {
        "pagePath": "/pages/index/index",
        "iconPath": "",
        "selectedIconPath": "",
        "text": "图鉴"
      },
      {
        "pagePath": "/pages/recog/index",
        "iconPath": "/img/1-n.png",
        "selectedIconPath": "/img/1-y.png",
        "text": ""
      },
      {
        "pagePath": "/pages/map/index",
        "iconPath": "",
        "selectedIconPath": "",
        "text": "地图"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
      console.log(this.data.selected)
    }
  }
})