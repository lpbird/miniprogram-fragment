const app = getApp()
import lottie from '../miniprogram_npm/lottie-miniprogram/index'
Page({
  data: {
  },
  onLoad() {
    this.createLottieAnimation('lottie1', '110268-fun-animation.js');
    this.createLottieAnimation('lottie2', '109272-lolo-new-branding.js');
  },
  createLottieAnimation(id, name){
    wx.createSelectorQuery().selectAll(`#${id}`).node(res => {
      const { node } = res[0]
      const context = node.getContext('2d')
      node.width = node.height = 300
      lottie.setup(node)
      this.ani = lottie.loadAnimation({
        loop: true,
        autoplay: true,
        animationData: require(`../assets/lottie/${name}`).json,
        rendererSettings: {
          context,
        },
      })
    }).exec()
  }
})
