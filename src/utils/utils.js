export default {
  formatDate(time, format) {
    if (!time) return '';
    format = format || 'yyyy-MM-dd HH:mm:ss'
    let date = new Date(time)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let min = date.getMinutes()
    let second = date.getSeconds()
    let meridiem = hour > 11 ? 'PM' : 'AM'
    let joint = function (num) {
      return num < 10 ? ('0' + num) : num
    }
    let ret = format.replace(/[y]{4}/g, year)
      .replace(/[y]{2}/g, (year + '').substring(2))
      .replace(/[M]{2}/g, joint(month))
      .replace(/[M]{1}/g, month)
      .replace(/[d]{2}/g, joint(day))
      .replace(/[d]{1}/g, day)
      .replace(/[H]{2}/g, joint(hour))
      .replace(/[h]{2}/g, joint(hour % 12))
      .replace(/[m]{2}/g, joint(min))
      .replace(/[s]{2}/g, joint(second))
      .replace(/[t]{2}/g, meridiem)
      .replace(/[t]{1}/g, meridiem.substring(0, 1))
    return ret
  }
}