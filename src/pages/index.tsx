import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
// import Presente from "@/components/Presente";

export default function Home() {

  const [p1, setP1] = useState(new PortaModel(1, false, true));

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {/* <Presente /> */}
      <Porta porta={p1}/>
    </div>
  )
}
