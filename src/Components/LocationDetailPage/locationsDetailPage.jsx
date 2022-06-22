import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function LocationsDetailPage() {
  const [Location, setLocation] = useState();
  const params = useParams();

  async function getLocation() {
    const response = await fetch(
      `https://rickandmortyapi.com/api/location/${params.locationId}`
    );
    const data = await response.json();

    setLocation(data.results);
    console.log(Location);
  }

  useEffect(function () {
    getLocation();
  }, []);

  return (
    <main>
      <h2>ubicaciones</h2>
    </main>
  );
}

export default LocationsDetailPage;
