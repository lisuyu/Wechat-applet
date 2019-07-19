// pages/detail/detail.js
// 引入数据
let datas = require('../../datas/list-data.js');

let appDatas = getApp();
console.log(appDatas,typeof appDatas)

console.log(datas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    index:null,
    isCollected:false,
    isMusicPlay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options是前端传来的参数
    console.log('options打印',options);
    //获取参数值
    let index = options.index;
    // console.log(index);
    //更新data中detailObj的状态值
    this.setData({
      detailObj:datas.list_data[index],
      index
    })

    //根据本地缓存的数据判断用户是否收藏当前的文章
    let detailStorage = wx.getStorageSync('isCollected');
    console.log(detailStorage);

    if(!detailStorage){
      //在缓存中初始化空对象
      wx.setStorageSync('isCollected', {})
    }

    //判断是否收藏
    if(detailStorage[index]){//收藏过
      this.setData({
        isCollected:true
      })
    }

    //监听音乐播放
    wx.onBackgroundAudioPlay(()=>{
      console.log("音乐播放");
      //修改isMusicPlay状态值
      this.setData({
        isMusicPlay:true
      });

      //修改appData中的数据
      appDatas.data.isPlay=true;
      appDatas.data.index = index;
    })

    //判断音乐是否在播放
    if(appDatas.data.isPlay && appDatas.data.pageIndex == index){
      this.setData({
        isMusicPlay:true
      });
    }

    //监听音乐暂停
    wx.onBackgroundAudioPause(()=>{
      console.log("音乐暂停");
      this.setData({
        isMusicPlay:false
      });
      appDatas.data.isPlay = false;
      // appDatas.data.index = index;
    })
  },

  handleCollection(){
    console.log(this);
    let isCollected = !this.data.isCollected;
    this.setData({
        isCollected
    });

    //提示用户
    let title = isCollected?"收藏成功":"取消收藏";
    wx.showToast({
      title,
      icon:'success'
    });

    //缓存数据到本地
    //{1:true,2:false}
    let {index} = this.data;
    // 不可行，会覆盖之前的状态
    // let obj = {};  //{0:true,2:true}
    wx.getStorage({
      key: 'isCollected',
      success:(datas)=>{
        // console.log(data,typeof data);
        let obj = datas.data; //{0:true,1:true}
        obj[index] = isCollected;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
          success:()=>{
            console.log('缓存成功');
          }
        })
      },
    })
  },

  handleMusicPlay(){
    //处理音乐播放
    let isMusicPlay = !this.data.isMusicPlay;
    this.setData({
      isMusicPlay
    });

    //控制音乐播放
    if(isMusicPlay){
      //播放音乐
      let {dataUrl,title} = this.data.detailObj.music;
      console.log(dataUrl);
      wx.playBackgroundAudio({
        dataUrl,
        title
      })
    }else{
      //暂停音乐播放
      wx.pauseBackgroundAudio()
    }
  },

  //处理点击分享
  handleShare(){
    wx.showActionSheet({
      itemList: [
        '分享到朋友圈',
        '分享到qq空间',
        '分享到微博'
      ],
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
