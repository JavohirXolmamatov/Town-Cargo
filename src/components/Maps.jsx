import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Maps() {
  return (
    <MapContainer
      center={[41.3111, 69.2797]}
      zoom={13}
      className="md:w-full md:h-[400px] h-[200px] z-0"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[41.3111, 69.2797]}>
        <Popup>Bu yer Toshkent!</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps;
