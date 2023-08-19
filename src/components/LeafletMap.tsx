import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import { useQuery } from "react-query";
import { fetchMapData } from "../API/api";

interface Country {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
  };
  cases: number;
  deaths: number;
  recovered: number;
}

const LeafletMap: React.FC = () => {
  const { data } = useQuery<Country[]>("mapData", fetchMapData);

  if (!data) {
    return (
      <div className="flex justify-center items-center mt-10 text-4xl font-semibold">
        Loading...
      </div>
    );
  }

  // const defaultPosition: [number, number] = [51.505, -0.09];

  return (
    <div className="py-4">
      <div className="w-full h-80">
        {/* <MapContainer
          center={defaultPosition}
          zoom={2}
          style={{ width: "100%", height: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {data.map((country) => (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h2 className="text-lg font-semibold">{country.country}</h2>
                  <p>Cases: {country.cases}</p>
                  <p>Deaths: {country.deaths}</p>
                  <p>Recovered: {country.recovered}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer> */}
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LeafletMap;
