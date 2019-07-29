/**
    每日壹句（有道词典）+ 每日打卡提醒（例如：corn "0 9,18 * * 1-5" 周一到周五，早九晚六）
**/
$httpClient.get('https://dict.youdao.com/infoline/style/cardList?mode=publish&client=mobile&style=daily&size=2', function (error, response, data) {
    let obj = JSON.parse(data);
    let date = new Date();
    let isAM = date.getHours() < 12 ? true : false
    let title = (isAM ? '上' : '下') + "班打卡" + (isAM ? ' ☀️' : ' 🌙');
    let subtitle = '';
    let des = '打卡！！！';
    if (!error) {
        if (obj && obj.length > 1) {
            let yi = obj[1];
            des = '\n' + yi.title + '\n' + yi.summary + '\n\n' + '# ' + yi.source
        }
    }
    $notification.post(title, subtitle, des);
    $done();
});
