document.addEventListener('DOMContentLoaded', () => {
    console.log("worked")
    fetch('www.monnem-wetter.de/weather') // Replace with your actual backend URL
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').textContent = data.temperature;
            document.getElementById('timestamp').textContent = data.timeStamp;
            document.getElementById('humidity').textContent = data.humidity;
        })
        .catch(error => console.error('Error fetching data:', error));
});
