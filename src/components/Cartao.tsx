import styles from "../styles/Cartao.module.css";

interface CartaoProps {
    bgColor?: string;
}

export default function Cartao( props : CartaoProps ) {
    return (
        <div className={styles.cartao}
            style={{ backgroundColor: props.bgColor ?? "#FFF" }} />  
    )
}