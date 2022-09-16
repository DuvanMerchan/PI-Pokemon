import React from "react";

const Stats = ({valor, nombre}) => {
  return (
    <>
      <div>
        <span>{nombre}</span>
        <meter
          min="0"
          max="120"
          value={valor}
          low="25"
          high="100"
          optimum="120"
        /><span>{valor}</span>
        {/* <p>
          {nombre} ------ <span>{valor}</span>
        </p> */}
      </div>
    </>
  );
};

export default Stats;