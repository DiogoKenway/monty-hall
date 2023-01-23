import styles from "../styles/Porta.module.css";
import PortaModel from "../model/porta";

interface PortaProps {
    value: PortaModel;
    onChange: (porta) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value;
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : "";

    const alternarSelecao = (e) => props.onChange(porta.alternarSelecao())
    const abrirPorta = (e) => {
        e.stopPropagation()
        props.onChange(porta.abrir());
    }

    const renderizarPorta = (
        <>
            <div className={styles.porta}>
                <div className={styles.numero} >{porta.numero}</div>
                <div className={styles.macaneta} onClick={abrirPorta} />
            </div>
        </>
    )
    
    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                { porta.aberta ? <></> : renderizarPorta }
            </div>
            <div className={styles.chao} />
        </div>
    )
}