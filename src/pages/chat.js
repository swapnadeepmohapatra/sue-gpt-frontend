import Image from "next/image";
import Link from "next/link";
import styles from "../styles/page.module.css";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getPrompt = async () => {
    setLoading(true);
    const res = await fetch(
      `${"http://localhost:3001/"}/api/chat?prompt=${prompt}`
    );
    const data = await res.json();
    console.log(data);
    setData(data);
    setLoading(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1
          style={{
            fontSize: "2rem",
          }}
        >
          SueGPT
        </h1>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <Link href="/legal">
            <p>Document Generation </p>
          </Link>
          <Link href="/chat">
            <p>Legal Advice</p>
          </Link>
          <Link href="/">
            <p>Who we are</p>
          </Link>
          <p>Login</p>
        </div>
      </div>
      <form
        style={{
          display: "flex",
          width: "100%",
          gap: "0.5rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          getPrompt();
        }}
      >
        <input
          className={styles.textInput}
          placeholder="Enter your legal question here."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
      <p
        style={{
          textAlign: "justify",
        }}
        className={inter.className}
      >
        {loading ? "Loading..." : data.completion}
      </p>
      <div className={styles.grid}></div>
    </main>
  );
}
