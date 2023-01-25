export const uploadTimeInHhMmFormat = (hhmm) => {
    let hh = String(hhmm).split(":")[0]
    let mm = String(hhmm).split(":")[1]
    return `${(hh.length > 1) ? hh : `0${hh}`}:${(mm.length > 1) ? mm : `0${mm}`}`
}

export const getHoursDiffrentInMinutes = (start_time, end_time) => {
    let startArr = String(start_time).split(":")
    let endArr = String(end_time).split(":")
    let startHh = Number(startArr[0])
    let startMm = Number(startArr[1])

    let endHh = Number(endArr[0])
    let endMm = Number(endArr[1])

    const start_log_time_date = new Date()
    const end_log_time_date = new Date()
    const date1 = new Date(start_log_time_date.getFullYear(), start_log_time_date.getMonth(), start_log_time_date.getDay(), startHh, startMm, 0);
    const date2 = new Date(end_log_time_date.getFullYear(), end_log_time_date.getMonth(), end_log_time_date.getDay(), endHh, endMm, 0);

    const diffTime = Math.abs(date2 - date1);
    return diffTime / 60 / 1000; //in minutes
}
export const getCurrenctMinutes = () => {
    const morning_date = new Date()
    const currenct_date = new Date()
    const date1 = new Date(morning_date.getFullYear(), morning_date.getMonth(), morning_date.getDay(), 0, 0, 0);
    const date2 = new Date(currenct_date.getFullYear(), currenct_date.getMonth(), currenct_date.getDay(), currenct_date.getHours(), currenct_date.getMinutes(), 0);

    const diffTime = Math.abs(date2 - date1);
    return diffTime / 60 / 1000; //in minutes
}
export const checkExpiredSlot = (date, hhmm) => {
    let hhmmArr = String(hhmm).split(":")
    if (hhmmArr.length >= 2) {
        let hh = hhmmArr[0]
        let mm = hhmmArr[1]
        const available_date = new Date(date)
        available_date.setHours(Number(hh))
        available_date.setMinutes(Number(mm))
        available_date.setSeconds(0)
        console.log("available_date", available_date);
        return available_date > new Date()

    }
    return false

}

export const getHhMmByMinutes = (mins) => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    const duration_time = `${h}:${m}`
    return duration_time
}
export const timeSince = (date) => {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}
export const ellipsis = (text, count) => {
    return (text && count) ? text.slice(0, count) + (text.length > count ? "..." : "") : ""
}
export const cipherWork = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}

export const decipherWork = salt => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
}