import React from "react";
import "../css/Botones.css";

const Botones = ({
  operacion,
  limpiarPantalla,
  retroceder,
  calcularResultado,
}) => {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("equalbtn").click();
    }
  });

  return (
    <div className="ordenar-botones">
      <button className="btn exp" onClick={operacion}>
        sin
      </button>
      <button className="btn exp" onClick={operacion}>
        ^
      </button>
      <button className="btn exp" onClick={operacion}>
        (
      </button>
      <button className="btn exp" onClick={operacion}>
        )
      </button>
      <button className="btn clr" onClick={retroceder}>
        ⌫
      </button>
      <button className="btn clr" onClick={limpiarPantalla}>
        AC
      </button>
      <button className="btn exp" onClick={operacion}>
        cos
      </button>
      <button className="btn exp" onClick={operacion}>
        x<sup>2</sup>
      </button>
      <button className="btn" onClick={operacion}>
        7
      </button>
      <button className="btn" onClick={operacion}>
        8
      </button>
      <button className="btn" onClick={operacion}>
        9
      </button>
      <button className="btn exp" onClick={operacion}>
        ÷
      </button>

      <button className="btn exp" onClick={operacion}>
        tan
      </button>
      <button className="btn exp" onClick={operacion}>
        x<sup>3</sup>
      </button>
      <button className="btn" onClick={operacion}>
        4
      </button>
      <button className="btn" onClick={operacion}>
        5
      </button>
      <button className="btn" onClick={operacion}>
        6
      </button>
      <button className="btn exp" onClick={operacion}>
        x
      </button>

      <button className="btn exp" onClick={operacion}>
        log
      </button>
      <button className="btn exp" onClick={operacion}>
        √
      </button>
      <button className="btn" onClick={operacion}>
        1
      </button>
      <button className="btn" onClick={operacion}>
        2
      </button>
      <button className="btn" onClick={operacion}>
        3
      </button>
      <button className="btn exp" onClick={operacion}>
        -
      </button>

      <button className="btn exp" onClick={operacion}>
        %
      </button>
      <button className="btn exp" onClick={operacion}>
        <sup>3</sup>√
      </button>
      <button className="btn" onClick={operacion}>
        0
      </button>
      <button className="btn exp" onClick={operacion}>
        .
      </button>
      <button
        className="btn exp equal res"
        id="equalbtn"
        onClick={calcularResultado}
      >
        =
      </button>
      <button className="btn exp" onClick={operacion}>
        +
      </button>
    </div>
  );
};

export default Botones;
