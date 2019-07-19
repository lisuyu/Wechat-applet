// pages/list/list.js
let datas= require('../../datas/list-data.js');
// console.log(datas,typeof datas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr:datas.list_data
    })
  },
  //点击跳转到detail详情页
  // toDetail:function(){
  //   保留当前页跳转
  //   wx,wx.navigateTo({
  //     url: '/pages/detail/detail',
  //   })
  // },

  toDetail(event){
    // console.log(event);
    //获取点击跳转对应的下标
    let index = event.currentTarget.dataset.index;
    console.log(index);
    wx.navigateTo({
      url: '/pages/detail/detail?index='+index,
    })
  },

  //点击轮播图跳转
  carouselToDetail(event){
    console.log(event);
    console.log(event.target.dataset.index);
    // event.currentTarget.dataset.index 和 envet.target.dataset.index的区别
    // 本身事件和委托事件
    // 绑定事件的容器和传递数据的容器是否一致
    //currentTarget 是绑定事件的元素 target是触发事件的元素
    let index = event.target.dataset.index;
    wx.navigateTo({
      url: '/pages/detail/detail?index=' + index,
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