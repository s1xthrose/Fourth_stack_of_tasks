//Задание 1:
/*
let d = new Date(2012, 1, 20, 3, 12);
alert( d ); */



//Задание 2:
/*
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3);
  alert( getWeekDay(date) ); */




//Задание 3:
/*
function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) {
      day = 7;
    }
  
    return day;
  } */




//Задание 4:

/*
function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
  
  let date = new Date(2015, 0, 2);
  
  alert( getDateAgo(date, 1) );
  alert( getDateAgo(date, 2) );
  alert( getDateAgo(date, 365) ); */



//Задание 5:
/*
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  alert( getLastDayOfMonth(2012, 0) );
  alert( getLastDayOfMonth(2012, 1) );
  alert( getLastDayOfMonth(2013, 1) ); */



//Задание 6:
/*
function getSecondsToday() {
    let now = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today;
    return Math.round(diff / 1000);
  }
  
  alert( getSecondsToday() ); */


  


//Задание 7:
/*
function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
  } */


//Задание 8:

/*
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'прямо сейчас';
    } else if (diffMin < 1) {
      return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
      return `${diffMin} мин. назад`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  } */