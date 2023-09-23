import Image from "next/image";
import Link from "next/link";
import styles from "../styles/page.module.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function LegalNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchLegalNews = async () => {
      try {
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=indian+legal+case"
        );

        if (response.data.hits) {
          setNews(response.data.hits);
        }
      } catch (error) {
        console.error("Error fetching legal news:", error);
      }
    };

    fetchLegalNews();
  }, []);
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
        <h2>Legal News</h2>
        <ul>
          {news.map((item) => (
            <li key={item.objectID}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title || item.story_title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
      <div></div>
    </main>
  );
}
