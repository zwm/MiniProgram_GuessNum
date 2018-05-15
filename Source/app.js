//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log("LINE1    login res.code    : "+res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log("LINE3    userInfo          : "+res.authSetting['scope.userInfo'])
        console.log("LINE4    userLocation      : "+res.authSetting['scope.userLocation'])
        console.log("LINE5    address           : "+res.authSetting['scope.address'])
        console.log("LINE6    invoiceTitle      : "+res.authSetting['scope.invoiceTitle'])
        console.log("LINE7    werun             : "+res.authSetting['scope.werun'])
        console.log("LINE8    record            : "+res.authSetting['scope.record'])
        console.log("LINE9    writePhotosAlbum  : "+res.authSetting['scope.writePhotosAlbum'])
        console.log("LINE10   camera            : "+res.authSetting['scope.camera'])
//        /*
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
//              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
//        */
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
