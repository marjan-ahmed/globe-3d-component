import React, { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const WorldCitiesGlobe = () => {
  const [places, setPlaces] = useState([]);
  const globeEl = useRef();

  // Load city data
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_populated_places_simple.geojson'
    )
      .then((res) => res.json())
      .then(({ features }) => setPlaces(features));
  }, []);

  // Make globe resize with window
  useEffect(() => {
    const handleResize = () => {
      if (globeEl.current) {
        globeEl.current.width = window.innerWidth;
        globeEl.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // set initial size
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Globe
      ref={globeEl}
      width={600}
      height={600}
      globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
      backgroundColor="rgba(0,0,0,0)" // transparent background
      labelsData={places}
      labelLat={(d) => d.properties.latitude}
      labelLng={(d) => d.properties.longitude}
      labelText={(d) => d.properties.name}
      labelSize={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
      labelDotRadius={(d) => Math.sqrt(d.properties.pop_max) * 4e-4}
      labelColor={() => 'rgba(255, 165, 25, 0.75)'}
      labelResolution={2}
    />
  );
};

export default WorldCitiesGlobe;
