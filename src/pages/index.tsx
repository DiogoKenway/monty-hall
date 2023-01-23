import { useState } from "react";
import Porta from "../components/Porta";
import criarPortas from "../functions/portas";
import PortaModel from "../model/porta";
// import Presente from "@/components/Presente";

export default function Home() {

  const [p1, setP1] = useState(new PortaModel(1));
  const [portas, setPortas] = useState(criarPortas(5, 3));

  function renderizarPortas() {
    return portas.map((porta, i) => (
      <Porta key={porta.numero} value={porta} onChange={console.log
      }/>
    ))
  }

  return (
    <div style={{ display: "flex", gap: "1rem"}}>
        {renderizarPortas()}
    </div>
  )
}
