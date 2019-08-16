import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW53aXR0dyIsImEiOiJjanphN3ZpdTQwMTNlM3BxbGZ4aDdnNjdnIn0.M6RJRjhrRQTrT_07LYd-xw";

export default function Map() {
  const lat = -9.1374977;
  const lng = 38.7222532;

  const [map, setMap] = useState({
    map: null,
    marker: null
  });

  useEffect(() => {
    setMap({
      ...map,
      map: initMap(lng, lat)
    });
  }, []);

  function initMap(lng, lat) {
    return new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lat, lng],
      zoom: 12
    });
  }
  function setMarker(lng, lat) {
    return (map.map.marker = new mapboxgl.Marker({ color: "red" })
      .setLngLat([lat, lng])
      .addTo(map.map));
  }

  return (
    <div className="Map">
      <div className="Map__Container" id="mapContainer" />
    </div>
  );
}
