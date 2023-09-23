import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import { Inter } from "next/font/google";
import { jsPDF } from "jspdf";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const doc = new jsPDF({
    orientation: "potrait",
    unit: "in",
    format: [10, 18],
  });

  return (
    <main className={`${styles.main} ${inter.className}`}>
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
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
        }}
      >
        here
      </div>
    </main>
  );
}
