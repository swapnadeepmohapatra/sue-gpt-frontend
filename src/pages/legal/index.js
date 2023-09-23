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
      <div className={styles.grid}>
        <Link href={"/legal/form"}>
          <div className={styles.card}>Sale Deed</div>
        </Link>
        <Link href={"/legal/form"}>
          <div className={styles.card}>Rent Deed</div>
        </Link>
        <Link href={"/legal/form"}>
          <div className={styles.card}>Tenant Eviction</div>
        </Link>
        <Link href={"/legal/form"}>
          <div className={styles.card}>Contract</div>
        </Link>
        <Link href={"/legal/form"}>
          <div className={styles.card}>Non-Payment of Salary</div>
        </Link>
        <Link href={"/legal/form"}>
          <div className={styles.card}>
            Forfeiture of the Mortgaged Property
          </div>
        </Link>
        <Link href={"/legal/form"}>
          <div className={styles.card}>Dissolution Of Partnership</div>
        </Link>
        <Link href={"/legal/form"}>
          <div className={styles.card}>Non-Disclosure Agreement</div>
        </Link>
      </div>
      <div className={styles.grid}></div>
    </main>
  );
}
