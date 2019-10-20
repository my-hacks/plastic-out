import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polygon
} from "react-google-maps";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

const markers = [
  {
    id: 1,
    latitude: -24.03,
    longitude: -46.2667
  },
  {
    id: 2,
    latitude: -24.02,
    longitude: -46.1
  },
  {
    id: 3,
    latitude: -24.1,
    longitude: -46
  },
  {
    id: 4,
    latitude: -24.09,
    longitude: -46.266
  },
  {
    id: 5,
    latitude: -24.01,
    longitude: -46.18
  },
  {
    id: 5,
    latitude: -24.01,
    longitude: -46.33
  },
  {
    id: 6,
    latitude: -24.2,
    longitude: -46.33
  }
];

const reversedCoords = markers.map(marker => {
  return { lat: marker.latitude, lng: marker.longitude };
});
const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -23.9618, lng: -46.3322 }}
      defaultOptions={{
        scrollwheel: false //we disable de scroll over the map, it is a really annoing when you scroll through page
      }}
    >
      {markers.map(marker => (
        <Marker
          key={marker.id}
          position={{
            lat: marker.latitude,
            lng: marker.longitude
          }}
          icon={{
            url:
              "https://cdn.iconscout.com/icon/free/png-512/plastic-bottle-1468369-1242821.png",
            scaledSize: new window.google.maps.Size(18, 22)
          }}
        />
      ))}
      <Polygon
        path={reversedCoords}
        options={{
          fillColor: "pink",
          fillOpacity: 0.4,
          strokeColor: "pink",
          strokeOpacity: 1,
          strokeWeight: 1
        }}
      />
    </GoogleMap>
  ))
);

class Map extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>Google Maps</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    <MapWrapper
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQ2nKaowulyv42DMgZp5yuBLniDOg2xfM"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `100%` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Map;
