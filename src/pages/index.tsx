import styles from "../styles/formulario.module.css";
import Cartao from "../components/Cartao";

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor={"#c0392c"} />
        <Cartao />
      </div>
      <div>
        <Cartao />
        <Cartao bgColor={"#28a085"} />
      </div>
    </div>
  )
}
