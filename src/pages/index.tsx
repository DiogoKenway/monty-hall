import Porta from "../components/Porta";
// import Presente from "@/components/Presente";

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {/* <Presente /> */}
      <Porta selecionada/>
      <Porta />
    </div>
  )
}
