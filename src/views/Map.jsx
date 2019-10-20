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
import axios from "axios";

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

class Map extends React.Component {
  _ismounted = false;

  constructor(props) {
    super(props);
    this.state = {
      oceanData: []
    };
  }

  async componentDidMount() {
    this._ismounted = true;
    const response = await axios.get(
      "https://7i739zug0g.execute-api.us-east-1.amazonaws.com/dev/sensores"
    );
    this.setState({
      oceanData: response.data
    });
    console.log(this.state.oceanData);
  }

  MapWrapper = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: 37.048, lng: -73.9385 }}
        defaultOptions={{
          scrollwheel: false //we disable de scroll over the map, it is a really annoing when you scroll through page
        }}
      >
        {this.state.oceanData.map((marker, index) => (
          <Marker
            key={index}
            position={{
              lat: marker.latitude,
              lng: marker.longitude
            }}
            icon={{
              url:
                "https://cdn4.iconfinder.com/data/icons/ecology-filled-line-1/64/21_plastic_bottle_sea_water_polution_ecology-512.png",
              scaledSize: new window.google.maps.Size(22, 22)
            }}
          />
        ))}
        <Polygon
          path={this.reversedCoords}
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
                    <this.MapWrapper
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
