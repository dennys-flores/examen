import React from "react";
import "../css/Pantalla.css";

const Pantalla = ({ entrada, setearEntrada, respuesta }) => {
  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
        setearEntrada(e.target.value);
    }
  };

  return (
    <>
      <div className="display">
        {respuesta === "" ? (
          <>
            <input
              type="text"
              name="input"
              className="input"
              style={{ padding: "29px" }}
              value={entrada}
              placeholder="0"
              maxLength={12}
              // disabled
              onChange={onChangeTagInput}
              autoComplete="off"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="input"
              className="value"
              value={entrada}
              placeholder="0"
              maxLength={12}
              disabled
            />
            <input
              type="text"
              name="value"
              className="input"
              value={respuesta}
              disabled
            />
          </>
        )}
      </div>
    </>
  );
};

export default Pantalla;
