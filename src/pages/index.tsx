import { useState } from "react";
import Porta from "../components/Porta";
import criarPortas, { atualizarPortas } from "../functions/portas";

export default function Home() {

  const [portas, setPortas] = useState(criarPortas(5, 3));

  function renderizarPortas() {
    return portas.map((porta, i) => (
      <Porta key={porta.numero} value={porta}
       onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    ))
  }

  return (
    <div style={{ display: "flex", gap: "1rem"}}>
        {renderizarPortas()}
    </div>
  )
}
