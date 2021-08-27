const config = require('../config') 
const Robot = require("dingtalk-robot-sdk")

const robot = new Robot({
	accessToken: config.robot_accesstoken,
	secret: config.robot_secret,
});

exports.study = function () {
	const actionCard = new Robot.ActionCard();
	actionCard.atAll()
	.setTitle('学习中心')
	.setText('![screenshot](https://i-1-lanrentuku.qqxzb-img.com/2020/10/29/455941ae-53d6-4c6c-bf61-abd5e2eab0d0.png) \n #### 学习的重要性 \n\n 少年周恩来说：为中华之崛起而读书。')
	.setSingleTitle("去卷")
  .setSingleURL("https://m.yidianzhishi.com/index.html#!/");
	robot.send(actionCard);
}

exports.notify = function() {

}