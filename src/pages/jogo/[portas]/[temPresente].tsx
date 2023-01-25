import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import criarPortas, { atualizarPortas } from "../../../functions/portas";
import styles from "../../../styles/jogo.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function jogo() {

  const router = useRouter();

  const [portas, setPortas] = useState([]);

  useEffect(()=> {
    const qtdPortas = +router.query.portas;
    const temPresente = +router.query.temPresente;
    
    setPortas(criarPortas(qtdPortas, temPresente));

  }, [router.query])
  

  function renderizarPortas() {
    return portas.map((porta, i) => (
      <Porta key={porta.numero} value={porta}
       onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
    ))
  }

  return (
    <div className={styles.jogo}>
        <div className={styles.porta}>
            {renderizarPortas()}
        </div>

        <div className={styles.botoes}>
            <Link href="/">
                <button>Reiniciar</button>
            </Link>
        </div>
    </div>
  )
}