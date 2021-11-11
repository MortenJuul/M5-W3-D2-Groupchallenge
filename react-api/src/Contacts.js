import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Contacts = (props) => {
  console.log(props);
  let cards = props.contacts.map((contact) => {
    return (
      <Card key={contact.id}>
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {contact.email}
          </Card.Subtitle>
          <Card.Text>{contact.company.catchPhrase}</Card.Text>
          <ComposableMap  style={{ width: '18rem' }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#DDD"
                    stroke="#FFF"
                  />
                ))
              }
            </Geographies>
            <Marker coordinates={[parseFloat(contact.address.geo.lat), parseFloat(contact.address.geo.lng)]}>
              <circle r={20} fill="#000" />
            </Marker>
          </ComposableMap>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      <h1>Contact List</h1>
      {cards}
    </div>
  );
};

export default Contacts;
