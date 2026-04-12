import Link from "next/link";

export default function Nav({ lang }: { lang: string }) {
    return (
        <nav className="nav">
            <Link href={`/${lang}`}>Home</Link>
            <Link href={`/${lang}/about`}>About</Link>
            <Link href={`/${lang}/services`}>Services</Link>
            <Link href={`/${lang}/resources`}>Resources</Link>
            <Link href={`/${lang}/contact`}>Contact</Link>
        </nav>
    );
}
