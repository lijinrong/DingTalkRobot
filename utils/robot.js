const config = require('../config');
const Robot = require('dingtalk-robot-sdk');

const robot = new Robot({
  accessToken: config.robot_accesstoken,
  secret: config.robot_secret,
});

exports.study = function () {
  const FeedCard = Robot.FeedCard;

  const feedCard = new FeedCard([
    {
      title: '前端周刊',
      messageURL:
        'https://frontend-weekly.com/',
      picURL: 'https://frontend-weekly.com/gitbook/images/favicon.ico',
    },
  ]);

  robot.send(feedCard);
};

exports.notify = function () {};
