import React, { useState } from "react";
import Pantalla from "./Pantalla";
import Botones from "./Botones";

import { evaluate, round } from "mathjs";

function Calculadora() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const operacion = (event) => {
    if (answer === "Entrada invalida!!") return;
    let val = event.target.innerText;

    if (val === "x2") val = "^2";
    else if (val === "x3") val = "^3";
    else if (val === "3√") val = "^(1÷3)";
    else if (val === "log") val = "log(";
    else if (val === "sin") val = "sin(";
    else if (val === "cos") val = "cos(";
    else if (val === "tan") val = "tan(";

    let str = input + val;
    if (str.length > 14) return;

    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
  };

  //Limpiar pantalla
  const limpiarPantalla = () => {
    setInput("");
    setAnswer("");
  };

  // calcular
  const calcularResultado = () => {
    if (input === "") return;
    let result = 0;
    let finalexpression = input;

    finalexpression = finalexpression.replaceAll("x", "*");
    finalexpression = finalexpression.replaceAll("÷", "/");

    let noSqrt = input.match(/√[0-9]+/gi);

    if (noSqrt !== null) {
      let evalSqrt = input;
      for (let i = 0; i < noSqrt.length; i++) {
        evalSqrt = evalSqrt.replace(
          noSqrt[i],
          `sqrt(${noSqrt[i].substring(1)})`
        );
      }
      finalexpression = evalSqrt;
    }

    try {
      result = evaluate(finalexpression);
    } catch (error) {
      result = error.message === "" ? "" : "Entrada Invalida!!";
    }
    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  };

  const retroceder = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };

  return (
    <>
      <div>
        <div>
          <Pantalla
            entrada={input}
            setearEntrada={setInput}
            respuesta={answer}
          />
          <Botones
            operacion={operacion}
            limpiarPantalla={limpiarPantalla}
            retroceder={retroceder}
            calcularResultado={calcularResultado}
          />
        </div>
      </div>
    </>
  );
}

export default Calculadora;
