import React, { useState, useEffect } from "react";
import { Map, Draggable } from "pigeon-maps";
import Marker from "../assets/images/flamber-marker.svg";

export function MapMenu() {
  const [anchor, setAnchor] = useState([42.44174222764973, 19.2623181739408]);

  useEffect(() => {
    console.log(anchor);
  }, [anchor]);

  return (
    <Map
      height={300}
      defaultCenter={[42.44174222764973, 19.2623181739408]}
      defaultZoom={11}
    >
      <Draggable offset={[50, 50]} anchor={anchor} onDragEnd={setAnchor}>
        <img src={Marker} width={100} height={95} alt="Marker" />
      </Draggable>
    </Map>
  );
}
