mapboxgl.accessToken = mapToken;

      const map = new mapboxgl.Map({
          container: 'map', // container ID
          style: 'mapbox://styles/mapbox/streets-v12', //style URL(to change map theme use dark-v11 instead streets-v12)
          center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
          zoom: 9 // starting zoom
});

// console.log(coordinates);
const marker1 = new mapboxgl.Marker({ color:"red" })
.setLngLat(listing.geometry.coordinates) //Listing.geometery.coordinates
.setPopup(new mapboxgl.Popup({offset: 25})
.setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking!</p>`))
.addTo(map);