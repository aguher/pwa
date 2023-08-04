import type { FC } from "react";
import { Link, A } from "@vercel/examples-ui";
import "shadcn/styles/globals.css";

import styles from "./navbar.module.css";
import { Mail } from "lucide-react";

import { Button } from "shadcn";
const Navbar: FC<{ isDocsApp?: boolean }> = ({ isDocsApp }) =>
  isDocsApp ? (
    <div className={styles.grid}>
      <A href="/" className={styles.card}>
        <Button variant="premium">
          <Mail className="mr-2 h-4 w-4" />
          <p className="italic">Home Main App</p>
        </Button>
      </A>

      <Link href="/" className={styles.card}>
        <Button variant="destructive">Homepage Doc App</Button>
      </Link>

      <Link href="/about" className={styles.card}>
        <Button variant="destructive">About Doc App</Button>
      </Link>
    </div>
  ) : (
    <div className={styles.grid}>
      <Link href="/" className={styles.card}>
        <Button variant="destructive">Homepage</Button>
      </Link>

      <Link href="/about" className={styles.card}>
        <Button variant="destructive">About</Button>
      </Link>

      <A href="/docs" className={styles.card}>
        <Button variant="destructive">Homepage DOCS</Button>
      </A>
    </div>
  );

export default Navbar;
