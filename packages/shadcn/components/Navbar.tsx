import type { FC } from "react";
import { Home, BookOpen, GalleryHorizontalEnd } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar: FC<{ isDocsApp?: boolean }> = ({ isDocsApp }) =>
  isDocsApp ? (
    <div className="flex gap-2 justify-center mt-2">
      <a href="/">
        <Button variant="link">
          <Home className="mr-2 h-4 w-4" />
          Homepage Main App
        </Button>
      </a>
      <Link href="/">
        <Button variant="link">
          <GalleryHorizontalEnd className="mr-2 h-4 w-4" />
          Homepage DOCS
        </Button>
      </Link>
      <Link href="/about">
        <Button variant="link">
          <BookOpen className="mr-2 h-4 w-4" />
          About Doc App
        </Button>
      </Link>
    </div>
  ) : (
    <div className="flex gap-2 justify-center mt-2">
      <Link href="/">
        <Button variant="link">
          <Home className="mr-2 h-4 w-4" />
          Homepage
        </Button>
      </Link>

      <Link href="/about">
        <Button variant="link">
          <BookOpen className="mr-2 h-4 w-4" />
          About
        </Button>
      </Link>

      <a href="/docs">
        <Button variant="link">
          <GalleryHorizontalEnd className="mr-2 h-4 w-4" />
          Homepage DOCS
        </Button>
      </a>
    </div>
  );

export { Navbar };
