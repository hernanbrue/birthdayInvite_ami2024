// Countdown timer script
const countdown = () => {
  const eventDate = new Date("October 26, 2024 16:00:00").getTime();
  const now = new Date().getTime();
  const difference = eventDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (difference < 0) {
      clearInterval(countdownTimer);
      document.getElementById("countdown-timer").innerText = "¡El evento ya comenzó!";
  }
};

const countdownTimer = setInterval(countdown, 1000);

// Google Maps script
function initMap() {
  const location = { lat: -34.397, lng: 150.644 };
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
  });
  const marker = new google.maps.Marker({
      position: location,
      map: map,
  });
}
