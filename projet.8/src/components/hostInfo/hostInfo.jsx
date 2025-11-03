import React from "react";
import "./HostInfo.css";

const HostInfo = ({ host }) => {
  return (
    <div className="host">
      <div>
        {host.name.split(" ").map((n, i) => (
          <p key={i}>{n}</p>
        ))}
      </div>
      <img className="host-picture" alt="Hôte" src={host.picture} />
    </div>
  );
};

export default HostInfo;
