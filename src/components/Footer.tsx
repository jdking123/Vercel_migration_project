import Link from "next/link";

export default function Footer({
    lang,
    className,
}: {
    lang: string;
    className?: string;
}) {
    return (
        <footer className={className}>
            {/* Main Footer */}
            <div className="section border-t">
                <div className="container-jdpsf grid gap-12 py-12 md:grid-cols-3">

                    {/* Column 1 — Identity */}
                    <div className="flex flex-col gap-4">
                        <div className="font-serif text-xl">JDPSF</div>
                        <p className="small opacity-70">
                            The JD Product Stewardship Foundation advances global stewardship,
                            regulatory clarity, and institutional trust.
                        </p>
                    </div>

                    {/* Column 2 — Navigation */}
                    <div className="flex flex-col gap-3">
                        <FooterLink href={`/${lang}/about`}>About</FooterLink>
                        <FooterLink href={`/${lang}/services`}>Services</FooterLink>
                        <FooterLink href={`/${lang}/resources`}>Resources</FooterLink>
                        <FooterLink href={`/${lang}/contact`}>Contact</FooterLink>
                    </div>

                    {/* Column 3 — Legal */}
                    <div className="flex flex-col gap-3">
                        <FooterLink href={`/${lang}/privacy`}>Privacy Policy</FooterLink>
                        <FooterLink href={`/${lang}/terms`}>Terms of Service</FooterLink>
                        <FooterLink href={`/${lang}/governance`}>Governance</FooterLink>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t py-6">
                <div className="container-jdpsf flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                    <p className="small opacity-70">
                        © {new Date().getFullYear()} JD Product Stewardship Foundation
                    </p>
                    <p className="small opacity-70">All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className="small opacity-70 transition-opacity hover:opacity-100"
        >
            {children}
        </Link>
    );
}
