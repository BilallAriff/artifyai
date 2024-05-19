import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <h1>
        Hello, World
        <br />
        <span style={{ fontWeight: 400 }}>Artify</span>
        <span style={{ color: "red" }}>AI</span>
      </h1>
    </main>
  );
}
