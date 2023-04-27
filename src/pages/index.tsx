import Header from "../components/header";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

export default function Home() {

  /* on start up */
  useEffect(() => {
    window.localStorage.setItem('testStuff', 'testValue')
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Home page</h1>
      </main>
    </div>
  );
}
