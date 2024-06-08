import React from "react";
import Container from "../../shared/Container";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
const Location = () => {
  const position = [23.797911, 90.414391];
  const icon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/9356/9356230.png",
    iconSize: [40, 43],
  });
  return (
    <Container>
      <div className="pb-16">
        <h2 className="font-bold pb-10 text-center text-4xl">Our Location</h2>
        <div className="flex justify-between gap-5 flex-col lg:flex-row">
          <div className="lg:w-1/2 w-full">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution=""
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={icon}>
                <Popup>Gulsan-1,Dhaka</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="lg:w-1/2 bg-[#ff5a3c] py-20 md:px-16 px-8 rounded-md w-full text-white">
            <h1 className="white font-bold text-3xl mb-5">Deluxe Portion</h1>
            <p className="mb-4">
              Our building is located in the heart of the city, offering easy
              access to all major attractions and transportation hubs.
              Conveniently situated near shopping centers, restaurants, and
              parks, you’ll have everything you need within reach.
            </p>
            <p className="mb-4">
              <span className="font-semibold text-lg">Address :</span> Gulsan-1
              Dhaka
            </p>
            <p className="mb-8">
              How to get there: Easily accessible by public transportation. The
              nearest subway station is just a 5-minute walk away. Parking is
              available on-site for residents.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Location;
