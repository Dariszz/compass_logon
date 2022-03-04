<template>
  <div id="weather">
        <span id="city">{{locale}}</span>
        <div id="degree">
            <img id="icon" alt="_" :src="image">
            <span id="temperature">{{temp}}°</span>
        </div>
  </div>
</template>

<script>

export default {
    name: 'weather',

    data() {
        return {
            temp: '404',
            locale: '',
            image: '',
        }
    },

    methods: {
        navigator() {
            if(!localStorage.getItem('latitude') && !localStorage.getItem('longitude')) {

                if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
    
                    const latitude = position.coords.latitude
                    const longitude = position.coords.longitude
                    localStorage.setItem('latitude', latitude)
                    localStorage.setItem('longitude', longitude)
    
                })
                }
            }
        },

        logicalWeather() {

                let latitude = localStorage.getItem('latitude')
                let longitude = localStorage.getItem('longitude')

                fetch(`https://api.weatherapi.com/v1/current.json?key=5628e8747a1742339b911437221002&q=${latitude}, ${longitude}&aqi=no`)
                .then((answer) => answer.json())
                .then(result => {

                    let city = result.location.name
                    this.temp = result.current.temp_c.toFixed()
                    let region = this.regions(result.location.region)
                    this.locale = `${city} - ${region}`
                    this.image = result.current.condition.icon
                })
    },
    
    regions(region) {
        let regionShow = "";

      switch (region) {
        case "Acre":
          regionShow = "AC";
          break;
        case "Alagoas":
          regionShow = "AL";
          break;
        case "Amapá":
          regionShow = "AP";
          break;
        case "Amazonas":
          regionShow = "AM";
          break;
        case "Bhaia":
          regionShow = "BA";
          break;
        case "Ceará":
          regionShow = "CE";
          break;
        case "Espírito Santo":
          regionShow = "ES";
          break;
        case "Goiás":
          regionShow = "GO";
          break;
        case "Maranhão":
          regionShow = "MA";
          break;
        case "Mato Grosso":
          regionShow = "MT";
          break;
        case "Mato Grosso do Sul":
          regionShow = "MS";
          break;
        case "Minas Gerais":
          regionShow = "MG";
          break;
        case "Pará":
          regionShow = "PA";
          break;
        case "Paraíba":
          regionShow = "PB";
          break;
        case "Paraná":
          regionShow = "PR";
          break;
        case "Pernambuco":
          regionShow = "PE";
          break;
        case "Piauí":
          regionShow = "PI";
          break;
        case "Rio de Janeiro":
          regionShow = "RJ";
          break;
        case "Rio Grande do Norte":
          regionShow = "RN";
          break;
        case "Rio Grande do Sul":
          regionShow = "RS";
          break;
        case "Rondônia":
          regionShow = "RO";
          break;
        case "Roraima":
          regionShow = "RR";
          break;
        case "Santa Catarina":
          regionShow = "SC";
          break;
        case "São Paulo":
          regionShow = "SP";
          break;
        case "Sergipe":
          regionShow = "SE";
          break;
        case "Tocantins":
          regionShow = "TO";
          break;
      }

      return regionShow;
    }

    },

    created() {
        this.navigator()
        this.logicalWeather()
    }
}

    

</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>