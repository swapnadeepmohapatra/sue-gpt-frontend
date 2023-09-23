import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <label>
          Name:
          <input placeholder="Enter your names" />
        </label>
        <label>
          Address:
          <input placeholder="Enter your address" />
        </label>
        <label>
          Date of offer letter:
          <input placeholder="Enter date of your offer letter" />
        </label>
        <label>
          Date of joining:
          <input placeholder="Enter date of your joining" />
        </label>
        <label>
          Salary:
          <input placeholder="Enter your salary" />
        </label>
        <label>
          Date of non-payment of salary:
          <input placeholder="Enter date of non-payment of salary" />
        </label>
        <label>
          Month of non-payment of salary:
          <input placeholder="Enter month of non-payment of salary" />
        </label>
        <label>
          Additional salary {"(if any)"}:
          <input placeholder="Enter additional salary if any" />
        </label>
        <br />
        <button className={styles.button}>Generate Doccument</button>
      </div>
      <div></div>
      <div></div>
    </main>
  );
}
