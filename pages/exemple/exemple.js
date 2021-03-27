// pages/exemple/exemple.js
Page({

	/**
	 * 页面的初始数据
					*/
	data: {

	},
	saomiao:function() {
		wx.scanCode({
			success(res) {
				console.log(res)
			}
		})
	},
	wifi:function(res) {
		wx.getNetworkType({
			success(res) {
				const networkType = res.networkType
			}
		})
	}
})