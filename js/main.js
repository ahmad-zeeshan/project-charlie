const searchElement = document.querySelector('[data-city-search]')
const searchBox = new google.maps.places.SearchBox(searchElement)
searchBox.addListener('places_changed', ()=> {
   const place = searchBox.getPlaces()[0]
   if (place == null) {return} else {
     const latitude = place.geometry.location.lat();
     const longtitude = place.geometry.location.lng();
     console.log(longtitude);
     console.log(latitude);
   }

})