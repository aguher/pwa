import type { FC } from "react";
import { Link, A } from "@vercel/examples-ui";
import styles from "./navbar.module.css";

const Navbar: FC<{ isDocsApp?: boolean }> = ({ isDocsApp }) =>
  isDocsApp ? (
    <div className={styles.grid}>
      <A href="/" className={styles.card}>
        <h2>
          Home app<span>-&gt;</span> Multizone
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </A>

      <Link href="/" className={styles.card}>
        <h2>
          Docs app<span>-&gt;</span> Homepage
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </Link>

      <Link href="/about" className={styles.card}>
        <h2>
          Docs app<span>-&gt;</span> About
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </Link>
    </div>
  ) : (
    <div className={styles.grid}>
      <Link href="/" className={styles.card}>
        <h2>
          Home app<span>-&gt;</span> Homepage
        </h2>
        <p>Find in-depth information about Next.js features and API.</p>
      </Link>

      <Link href="/about" className={styles.card}>
        <h2>
          Home app<span>-&gt;</span> About
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </Link>

      <A href="/docs" className={styles.card}>
        <h2>
          Docs app<span>-&gt;</span> Homepage docs
        </h2>
        <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
      </A>
    </div>
  );

export default Navbar;
