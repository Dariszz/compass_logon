export default function logicalWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {

            const latitude = position.coords.latitude
            const longitude = position.coords.longitude

            console.log(latitude, longitude);

            fetch(`https://api.weatherapi.com/v1/current.json?key=5628e8747a1742339b911437221002&q=${latitude}, ${longitude}&aqi=no`)
            .then((answer) => answer.json())
            .then(result => {

                console.log(result)

                const locale = document.querySelector('#city')
                const degree = document.querySelector('#temperature')
                const region = result.location.region
                let icons = result.current.condition.icon
                let iconClimate = document.querySelector('#icon')

                locale.textContent = `${result.location.name} - ${region}`;
                degree.textContent = `${result.current.temp_c.toFixed()}°`;

                iconClimate.src = icons
            })
        })
    }
}