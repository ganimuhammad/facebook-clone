import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";

function Story({ image, profilrSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar className="story__avatar" src={profilrSrc} />
      <h4>{title}</h4>p
    </div>
  );
}

export default Story;
