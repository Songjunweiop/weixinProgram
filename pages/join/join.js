// pages/join/join.js
Page({
	onReady: function (e) {
		// 使用 wx.createAudioContext 获取 audio 上下文 context
		this.audioCtx = wx.createAudioContext('myAudio')
	},
	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrls: [
			'https://s1.ax1x.com/2020/07/29/aZIylt.jpg',
			'https://s1.ax1x.com/2020/07/29/aZIBYd.jpg',
			'https://s1.ax1x.com/2020/07/29/aZI0FH.jpg',
			'https://s1.ax1x.com/2020/07/29/aZIdTe.jpg',
			'https://s1.ax1x.com/2020/07/29/aZIawD.jpg',
			'https://s1.ax1x.com/2020/07/29/aZIUeO.jpg',
		],
		indicatorDots: true,
		autoplay: true,
		interval: 1300,
		duration: 1500,
		proList: [{
				img: 'https://i.postimg.cc/VspMcMsB/1723018-F-5-A4-C-4618-ADBB-1-FD4-A856-C125.jpg',
				time: '时间：2018/5/31',
				place: '我们在这\n：你在汉口，我在民大',
				foot: 'https://i.postimg.cc/xCL9XcN7/christmass-star-2.png'
			},
			{
				img: 'https://i.postimg.cc/YqFF29hc/51-BEC0-BB-0-F39-4-A73-A51-B-81089-D511-F57-20181013-105.jpg',
				time: '时间：2018/9/30',
				place: '我们在这：\n你在汉口，我在民大',
				foot: 'https://i.postimg.cc/VknkpGDn/christmass-price-tag-xmas.png'
			},
			{
				img: 'https://i.postimg.cc/6pNv8Xv8/8635700-F-41-D3-402-F-AE6-C-791-CB4-A7682-D.jpg',
				time: '时间：2019/01/29',
				place: '我们在这：\n我们都在九大',
				foot: 'https://i.postimg.cc/VknkpGDn/christmass-price-tag-xmas.png'
			},

			{
				img: 'https://i.postimg.cc/TYNvYrH1/IMG-0055.jpg',
				time: '时间：2019/01/29',
				place: '我们在这：\n我们都在咸丰沿河走廊上',
				foot: 'https://i.postimg.cc/yxBscsFN/christmass-star.png'
			},
			{
				img: 'https://i.postimg.cc/7ZC8CfpV/IMG-0248.jpg',
				time: '时间：2019/01/29',
				place: '我们在这：\n我们都在咸丰车站外',
				foot: 'https://i.postimg.cc/yxBscsFN/christmass-star.png'
			}
		],
	},
	onLoad: function () {
		this.setData({
			test: '1',
		})
	},
	goto: function (e) {
		console.log(e);
		var index = e.currentTarget.dataset.index;
		console.log(index);
	},
	callme: function () {
		wx.makePhoneCall({
			phoneNumber: '13085191553' // 仅为示例，并非真实的电话号码
		})
	},


})