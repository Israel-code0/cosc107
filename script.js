function countdownTimer(endtime) {
  var daysSpan = document.getElementById('days');
  var hoursSpan = document.getElementById('hours');
  var minutesSpan = document.getElementById('minutes');
  var secondsSpan = document.getElementById('seconds');

  function updateTimer() {
      var t = getTimeRemaining(endtime);

      daysSpan.innerHTML = ('0' + t.days).slice(-2);
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
          clearInterval(timeinterval);
      }
  }

  updateTimer();
  var timeinterval = setInterval(updateTimer, 1000);
}

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
  };
}

// Set the date we're counting down to
var deadline = new Date(Date.parse('February 28, 2024 11:30:00'));
countdownTimer(deadline);
