// pages/detail/detail.js
// 引入数据
let datas = require('../../datas/list-data.js');
console.log(datas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    index:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options是前端传来的参数
    // console.log('options打印',options);
    //获取参数值
    let index = options.index;
    // console.log(index);
    //更新data中detailObj的状态值
    this.setData({
      detailObj:datas.list_data[index],
      index
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
