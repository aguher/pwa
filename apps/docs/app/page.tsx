import Image from "next/image";
import styles from "./page.module.css";
import "shadcn/styles/globals.css";
import { Button, Skeleton } from "shadcn";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>This is Home page from DOCS app</h1>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <div className={styles.center}>
        <Button asChild variant="destructive">
          <Link href="/about"> Go to ABOUT page for DOCS app</Link>
        </Button>
      </div>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
