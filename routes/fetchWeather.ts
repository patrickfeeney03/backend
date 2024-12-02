export async function fetchWeather() {
    // http://api.openweathermap.org/data/2.5/weather?q=Galway,IE&appid=KEY&units=metric
    // https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=KEY


    const apiKey = 'KEY';
    const lat = 53.2744122
    const lon = -9.0490601
    const city = 'Galway,IE'

    const url = ``;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
