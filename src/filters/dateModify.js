export default function (val) {
    var now = new Date();
    var stamp = new Date(val);
    var tmp = now.getTime() - stamp.getTime();
    var time = new Date(tmp);
    if (tmp < 3600000) {
        return "发表于" + time.getUTCMinutes() + "分钟前";
    } else if (tmp < 86400000) {
        return "发表于" + time.getUTCHours() + "小时前";
    } else if (tmp < 864000000) {
        return "发表于" + (time.getUTCDate() - 1) + "天前";
    } else {
        return "发表于" + stamp.getFullYear() + "." + (stamp.getMonth() + 1) + "." + stamp.getDate()

    }
}
