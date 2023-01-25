import { useState } from "react";
import Porta from "../components/Porta";
import criarPortas, { atualizarPortas } from "../functions/portas";
import styles from "../styles/jogo.module.css";

export default function jogo() {

  const [portas, setPortas] = useState(criarPortas(5, 3));

  function renderizarPortas() {
    return portas.map((porta, i) => (
      <Porta key={porta.numero} value={porta}
       onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    ))
  }

  return (
    <div className={styles.jogo}>
        {renderizarPortas()}
    </div>
  )
}