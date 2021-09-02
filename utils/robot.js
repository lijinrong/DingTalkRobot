const config = require('../config');
const Robot = require('dingtalk-robot-sdk');

const robot = new Robot({
  accessToken: config.robot_accesstoken,
  secret: config.robot_secret,
});

exports.study = function () {
  const Markdown = Robot.Markdown;

  const markdown = new Markdown();

  markdown.setTitle('前端周刊')
    .add('### [前端周刊](https://frontend-weekly.com/)');

  robot.send(markdown);
};

exports.notify = function () {};
