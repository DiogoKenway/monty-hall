
import styles from "../styles/Cartao.module.css";

export default function Cartao(props) {
    return (
        <div className={styles.cartao}
        style={{ backgroundColor: props.bgColor ?? "#FFF"}}>
            Cartão
        </div>
    )
}