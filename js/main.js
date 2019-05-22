const searchElement = document.querySelector('[data-city-search]')
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('places_changed', ()=> {
   const place = searchBox.getPlaces()[0]
   let aqi = document.querySelector('.aqi')
   let station = document.querySelector('.station')
   if (place == null) {return} else {
     const latitude = place.geometry.location.lat();
     const longtitude = place.geometry.location.lng();
     
     fetch(`https://api.waqi.info/feed/geo:${latitude};${longtitude}/?token=8bd8be89aa93e6cf4a2993a598775dd94b20065e`)
       .then(function(response) {
         return response.json();
       })
       .then(function(data) {
        const googleAPI=`https://www.google.com/maps/embed/v1/search?q=${data.data.city.name}&key=AIzaSyDPdSf1Rvt_ezerNCumo8H-GRmgJBHdoQg`;
        document.querySelector("iframe").setAttribute("src", googleAPI);
         //DOM manipulation here !!!
         //get aqi
         console.log(data);
         aqi.textContent = data.data.aqi;
         station.textContent = data.data.city.name;
         //aqi reading
         if (aqi.textContent <= 50) {
          document.getElementById("whatMeans").innerHTML = "How is air quality like today: Good";
          document.getElementById("whatToDo").innerHTML = "Action: Do nothing. Have a great day";
        
        }  else if (aqi.textContent <= 100) {
          document.getElementById("whatMeans").innerHTML = "How is air quality like today: Moderate";
          document.getElementById("whatToDo").innerHTML = "Action: Do nothing. Have a great day";
        
        } else if (aqi.textContent <=300) {
          document.getElementById("whatMeans").innerHTML = "How is air quality like today: Unhealthy";
          document.getElementById("whatToDo").innerHTML = "Action: Take precautions espetially for kids";
        
        } else {
          document.getElementById("whatMeans").innerHTML = "How is air quality like today: Hazardous";
          document.getElementById("whatToDo").innerHTML = "Action:Stay Indoors. So bad tomorrow might get better";

          }
          

       });
      
   }
})

