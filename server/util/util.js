const dayjs = require('moment');

exports.getDayShow = (date) => {
    if(!date) {
        return '';
      }
      lastTime = new Date(date);
      let nowTime = new Date();
      let lastTimeList = dayjs(lastTime).toArray(); //[2018, 4, 30, 15, 47, 32, 554]
      let nowTimeList = dayjs(nowTime).toArray();
      let timeStr = '';
      if (lastTimeList[0] < nowTimeList[0]) {
        //一年以前了
        timeStr = dayjs(lastTime).format('YYYY-MM-DD')
      }
      else{
        //当年的
        if (lastTimeList[1] == nowTimeList[1] && lastTimeList[2] == nowTimeList[2]){
          //同一日
          let spaceTime = (nowTime.getTime() - lastTime.getTime()) / 1000;
          if(spaceTime > 60 * 60) {
            //大于1小时
            timeStr = (spaceTime / (60 * 60)).toFixed(0) + '小时前';
          }
          else{
            //小于1小时
            if(spaceTime > 60) {
              //大于1分钟
              timeStr = (spaceTime / 60).toFixed(0) + '分钟前'
            }
            else{
              timeStr = '刚刚'
            }
          }
        }
        else{
          timeStr = dayjs(lastTime).format("MM-DD")
        }
      }
      return timeStr;
}