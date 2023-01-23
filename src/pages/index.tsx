import { useState } from "react";
import Porta from "../components/Porta";
import criarPortas from "../functions/portas";
import PortaModel from "../model/porta";
// import Presente from "@/components/Presente";

export default function Home() {

  const [p1, setP1] = useState(new PortaModel(1));

  console.log(
  criarPortas(4, 3));

  return (
    <div style={{ display: "flex", gap: "1rem"}}>
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
    </div>
  )
}
