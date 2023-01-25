import moment from "moment";

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const dateFormatter = (timestamp) => {
    var today = new Date(timestamp);
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = "" + dd + "/" + mm + "/" + yyyy;
    return today;
}
export const backendDateToYyyyMmDd = (dateStr) => {
    let dateArr = String(dateStr).split("-")
    let year = dateArr[0]
    let month = dateArr[1]
    let day = dateArr[2].slice(0, 2)
    return new Date(year, month, day)
}

const getTodayInStr = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    var today = `${month[mm]} ${dd}, ${yyyy}`;
    return today;
}
const getNextDayInStr = () => {
    var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth()

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    var today = `${month[mm]} ${dd}, ${yyyy}`;
    return today;
}
export const getDayInStr = (date) => {
    console.log("getDayInStr 1", date);
    var today = new Date(date);
    var dd = today.getDate();
    var mm = today.getMonth()

    if (dd < 10) {
        dd = '0' + dd;
    }

    console.log("getDayInStr 2", today);
    var todaystr = `${dd} ${month[mm]} `;
    return todaystr;
}
export const manamusuDateFormatter = (timestamp) => {
    console.log("manamusuDateFormatter timestamp", timestamp);
    var today = new Date(timestamp);
    var dd = today.getDate();
    var mm = today.getMonth()

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    var today = `${month[mm]} ${dd}, ${yyyy}`;

    console.log("manamusuDateFormatter today", today);
    return today
    // return (today == getTodayInStr()) ? language_contant.Common.today() : (today == getNextDayInStr()) ? language_contant.Common.tomorrow() : today;
}
export const manamusuDateFormatterForInvoice = (timestamp) => {
    var today = new Date(timestamp);
    var dd = today.getDate();
    var mm = today.getMonth()

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    return `${month[mm]} ${dd}, ${yyyy}`;

}
export const dateFormatterByDate = (timestamp) => {
    var today = new Date(timestamp);
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = "" + dd + "/" + mm + "/" + yyyy;
    return today;
}
export const reportsDateFormatter = (timestamp) => {
    var today = new Date(timestamp);
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = "" + dd + "-" + mm + "-" + yyyy;
    return today;
}
export const timeFormatter = (timestamp) => {
    var today = new Date(timestamp);
    var hh = today.getHours();
    var mm = today.getMinutes() + 1; //January is 0!

    if (hh < 10) {
        hh = '0' + hh;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return `${hh}:${mm}`;
}
export const formatAMPM = (timestamp) => {
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export const getMaxMonthSearch = () => {
    var selectedDate = new Date();
    var today = (selectedDate.getMonth() == 11) ? new Date(selectedDate.getFullYear() + 1, 0, 1) : new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1);
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (mm < 10) {
        mm = '0' + mm;
    }
    return `${yyyy}-${mm}`;
}


export const timestampToYyyyMmDd = (timestamp) => {
    var today = new Date(timestamp);
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return `${yyyy}-${mm}-${dd}`;
}
export const previousDateTimestamp = () => {

    var dateObj = new Date();
    dateObj.setDate(dateObj.getDate() - 1);
    let timestamp = dateObj.getTime()
    return timestamp;
}
export const todayTimestamp = () => {
    let today_a = new Date();
    let dateTimestamp = new Date(today_a.getFullYear(), today_a.getMonth(), today_a.getDate(), 0, 0, 0, 0);
    let timestamp = dateTimestamp.getTime();
    return timestamp;
}
export const todayTimeDate = () => {
    let today_a = new Date();
    let dateTimestamp = new Date(today_a.getFullYear(), today_a.getMonth(), today_a.getDate(), 0, 0, 0, 0);
    return dateTimestamp;
}
export const timeDateByUser = (today) => {
    let dateTimestamp = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);
    return dateTimestamp;
}
export const checkCreateEditSlot = (today, hour) => {
    let dateTimestamp = new Date(today.getFullYear(), today.getMonth(), today.getDate(), Number(hour), 0, 0, 0);
    return dateTimestamp.getTime() > new Date().getTime();
}
export const nextdayTimestamp = () => {
    let today_a = new Date();
    let dd = today_a.getDate();
    let mm = today_a.getMonth() + 1;
    let yyyy = today_a.getFullYear();
    let dateTimestamp = new Date(yyyy, mm - 1, dd + 1, 0, 0, 0, 0);
    let timestamp = dateTimestamp.getTime();
    return timestamp;
}

export const Last7Days = () => { {
        return '0123456'.split('').map(function(n) {
            var d = new Date();
            d.setDate(d.getDate() - n);
    
            return (function(day, month, year) {
                return [day<10 ? '0'+day : day, month<10 ? '0'+month : month, year].join('/');
            })(d.getDate(), d.getMonth(), d.getFullYear());
        }).join(',');
     }
}
export const getMonthFirstDate = (date) => {
    let today_a = new Date(date);
    let dd = today_a.getDate();
    let mm = today_a.getMonth();
    let yyyy = today_a.getFullYear();
    let dateTimestamp = new Date(yyyy, mm, 1, 0, 0, 0, 0);
    return dateTimestamp
}
export const getDateToTimestamp = (payload) => {
    let today = String(payload).split("/");
    let dd = Number(today[0]);
    let mm = Number(today[1]);
    let yyyy = Number(today[2]);
    let dateTimestamp = new Date(yyyy, mm - 1, dd, 0, 0, 0, 0);
    return dateTimestamp.getTime();
}

export const getPartucularDateTimestamp = () => {
    var today_a = new Date();
    var dd = today_a.getDate();
    var mm = today_a.getMonth() + 1;
    var yyyy = today_a.getFullYear();
    var dateTimestamp = new Date(yyyy, mm - 1, dd, 0, 0, 0, 0);
    var timestamp = dateTimestamp.getTime();
    return timestamp;
}
export const getPartucularDateTimestampFromTimestamp = (date) => {
    var today_a = new Date(date);
    var dd = today_a.getDate();
    var mm = today_a.getMonth() + 1;
    var yyyy = today_a.getFullYear();
    var dateTimestamp = new Date(yyyy, mm - 1, dd, 0, 0, 0, 0);
    var timestamp = dateTimestamp.getTime();
    return timestamp;
}
export const utcToLocal = (timestamp, hhmm) => {
    const date = new Date(timestamp)
    let yyyy = date.getFullYear()
    let mmm = date.getMonth()
    let dd = date.getDate()

    let hh = String(hhmm).split(":")[0]
    let mm = String(hhmm).split(":")[1]
    // console.log("utcToLocal y", yyyy, "Mm", mmm, "dd", dd, "hh", hh, "mm", mm, "getTimezoneOffset", date.getTimezoneOffset()* 60000);
    const utc = Date.UTC(yyyy, mmm, dd, hh, mm)
    const local = new Date(utc)
    return `${local.getHours()}:${local.getMinutes()}`

}
export const localToUtc = (hhmm) => {
    let hh = String(hhmm).split(":")[0]
    let mm = String(hhmm).split(":")[1]
    let date = new Date()
    const local = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hh, mm, 0)
    // return `${local.getUTCHours()}:${local.getUTCMinutes()}`

    let utcHour = local.getUTCHours()
    let utcMinute = local.getUTCMinutes()
    return `${(String(utcHour).length > 1) ? utcHour : `0${utcHour}`}:${(String(utcMinute).length > 1) ? utcMinute : `0${utcMinute}`}`
}

export const localDateToUtc = (date) => {
    var today = new Date(date);
    var dd = today.getUTCDate();
    var mm = today.getUTCMonth();
    var yyyy = today.getUTCFullYear();
    return `${yyyy}-${mm}-${dd}`
}
export const utcDateToLocal = (utcDate) => {
    let date = new Date(utcDate)
    console.log("utcDateToLocal date", date, utcDate);
    return new Date(Date.parse(`${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()} 0:0:0 AM GMT`));
}

export const getTimeSlotTime = (time_slots) => {
    console.log("time_slots", time_slots);
    if (time_slots.length === 1) {
        let startTime1 = time_slots[0].start_time
        return {
            // startDate: manamusuDateFormatter(time_slots[0].date),
            startDate: manamusuDateFormatter(moment.utc(time_slots[0].date).format('MM/DD/YYYY')),
            endDate: "",
            // startTime: `${hhmmToampm(startTime1)}`,
            startTime: `${hhmmToampm(utcToLocal(moment.utc(time_slots[0].date).format('MM/DD/YYYY'), startTime1))}`,
            endTime: ``,
        }
    } else if (time_slots.length > 0) {
        let end = time_slots.length - 1

        let startTime1 = time_slots[0].start_time
        let endTime1 = time_slots[0].end_time

        let startTime2 = time_slots[end].start_time
        let endTime2 = time_slots[end].end_time
        return {
            // startDate: manamusuDateFormatter(time_slots[0].date),
            // endDate: manamusuDateFormatter(time_slots[end].date),
            startTime: `${hhmmToampm(startTime1)} - ${hhmmToampm(endTime1)}`,
            endTime: `${hhmmToampm(startTime2)} - ${hhmmToampm(endTime2)}`,

            startDate: manamusuDateFormatter(moment.utc(time_slots[0].date).format('MM/DD/YYYY')),
            endDate: manamusuDateFormatter(moment.utc(time_slots[end].date).format('MM/DD/YYYY')),
            startTime: `${hhmmToampm(utcToLocal(time_slots[end].date, startTime1))} - ${hhmmToampm(utcToLocal(time_slots[end].date, endTime1))}`,
            endTime: `${hhmmToampm(utcToLocal(time_slots[end].date, startTime2))} - ${hhmmToampm(utcToLocal(time_slots[end].date, endTime2))}`,
        }
    } else {
        return {
            startDate: "",
            endDate: "Not available",
            startTime: "",
            endTime: "Not available"
        }
    }
}
export const getTempAmericaValue = (date) => {

    let getValue = new Date().toString().match(/([\+-][0-9]+)/)[1]
    let gmt = Number(getValue)
    let keyArr = String(date).split("-")
    let yyyy = keyArr[0]
    let mm = keyArr[1]
    let dd = keyArr[2]
    return `${yyyy}-${mm}-${gmt >= 0 ? dd : Number(dd) + 1}`
}

export const hhmmToampm = (hhmm) => {
    let hhmmArr = String(hhmm).split(":")
    let time = ""
    if (hhmmArr.length === 2) {
        let hhNumber = Number(hhmmArr[0])
        let mmNumber = Number(hhmmArr[1])
        if (hhNumber > 11) {
            if (hhNumber > 12) {
                if ((hhNumber - 12) > 9) {
                    time = `${hhNumber - 12}:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} pm`
                } else {
                    time = `0${hhNumber - 12}:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} pm`
                }
            } else {
                time = `${hhNumber}:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} pm`
            }
        } else {
            if (hhNumber == 0) {
                time = `12:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} am`
            } else {
                if (hhNumber > 9) {
                    time = `${hhNumber}:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} am`
                } else {
                    time = `0${hhNumber}:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} am`
                }
            }
        }
        return time
    } else if (hhmmArr.length === 3) {
        let hhNumber = Number(hhmmArr[0])
        let mmNumber = Number(hhmmArr[1])
        if (hhNumber > 11) {
            if (hhNumber > 12) {
                if ((hhNumber - 12) > 9) {
                    time = `${hhNumber - 12}:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} pm`
                } else {
                    time = `0${hhNumber - 12}:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} pm`
                }
            } else {
                time = `${hhNumber}:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} pm`
            }
        } else {
            if (hhNumber == 0) {
                time = `12:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} am`
            } else {
                if (hhNumber > 9) {
                    time = `${hhNumber}:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} am`
                } else {
                    time = `0${hhNumber}:${(mmNumber > 9) ? mmNumber : `0${mmNumber}`} am`
                }
            }
        }
        return time
    } else {
        let hhNumber = Number(hhmm)
        return (hhNumber > 11) ? `${((hhNumber - 12) > 9) ? (hhNumber - 12) : `0${(hhNumber - 12)}`} pm` : `${((hhNumber - 12) > 9) ? (hhNumber - 12) : `0${(hhNumber - 12)}`} am`
    }
}

export const getCurrentDateStatusYYYYMMDD = (date, time) => {
    // let hhmmArr = String(time).split(":")
    // let hhNumber = Number(hhmmArr[0])
    // let mmNumber = Number(hhmmArr[1])
    // let dateArr = ""
    // if (String(date).includes("-")) {
    //     dateArr = date.split("-")
    // }
    // let yyyyNumber = Number(dateArr[0])
    // let mmNumber = Number(dateArr[1])
    // let ddNumber = Number(dateArr[2])
    let userDate = new Date(`${date}T${time}`)
    let status = userDate > new Date()
    console.log("date status", status);
    return status
}