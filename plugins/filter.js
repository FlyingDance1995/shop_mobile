import Vue from 'vue'
import moment from 'moment'

Vue.filter('eval', (value) => {
  return eval(value || 0)
});

Vue.filter('fullFormatTime', function (value) {
  if (!value) return 'Unknown';
  return moment(value).utc().format('YYYY-MM-DD HH:mm:ss')
});

Vue.filter('formatTime', (value) => {
  if (value) {
    return moment(value).utc().format('HH:mm MM/DD/YYYY');
  }
  return "N/A"
});

Vue.filter('shortFormatTime', (value) => {
  if (value) {
    return moment(value).utc().format('DD-MM-YYYY');
  }
});

Vue.filter('elipsis', function (value, length) {
  if (!value) return '';
  value = value.toString();
  return value.length >= length ? value.substr(0, length) + '...' : value;
});

Vue.filter('fixed', function (value, length) {
  if (!value) return '0.00';
  return !isNaN(value) ? value.toFixed(length) : 0.00;
});

Vue.filter('timeago', function (value) {
  if (!value) return '';

  if(!value.includes('+') && value[value.length -1] !== 'Z'){
    value += 'Z'
  }

  let timeString = '';

  //convert time to unix time
  let now = moment().utc().unix();
  let ago = moment(value).utc().unix();

  // get total seconds between the times
  let delta = Math.abs(now - ago);

  // calculate (and subtract) whole days
  let days = Math.floor(delta / 86400);
  delta -= days * 86400;
  if (days > 0) {
    timeString += days + ' days ';
    return timeString;
  }

  // calculate (and subtract) whole hours
  let hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  if (hours > 0) {
    timeString += hours + ' hrs ';
    // calculate (and subtract) whole minutes
    let minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    if (minutes > 0) {
      timeString += minutes + ' mins ';
    }
    return timeString;
  }

  // calculate (and subtract) whole minutes
  let minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;
  if (minutes > 0) {
    timeString += minutes + ' mins ';
    // what's left is seconds
    let seconds = delta % 60;
    if (seconds > 0) {
      timeString += seconds + ' secs '
    }
    return timeString;
  }

  // what's left is seconds
  let seconds = delta % 60;
  if (seconds > 0) {
    timeString += seconds + ' secs '
  }

  if(!timeString || timeString.trim().length === 0) {
    timeString = 'recently';
  }

  return timeString;
});

Vue.filter('estimateTime', function (value) {
  if (!value) return '';

  // get total seconds between the times
  let delta = value;

  // calculate (and subtract) whole hours
  let hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;
  // calculate (and subtract) whole minutes
  let minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  let seconds = Math.round(delta * 1000) /1000;

  return hours + ' h ' + minutes + ' m ' + seconds + ' s';
});

Vue.filter('localeString', function (value) {
  if (!value) return 0;
  value = parseFloat(value);
  return value >= 0.1 ? (value >= 1000 ? value.toLocaleString() : value) : Number(value).toFixed(18).replace(/\.?0+$/, "");
});

Vue.filter('sub', function (value, length) {
  if (!value) return '0x';
  return value.substr(0, length);
});

Vue.filter('capitalize', function (value) {
  if (!value) return 'N/A';
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('leadingZeroNumber', function (value) {
  if (!value || value === 0) return '0';
  if(value < 10){
    return `0${value}`;
  }
  return value
});
