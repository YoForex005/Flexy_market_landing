import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../public/hd_logo.webp';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: "#f4f7fa" }}>
            {/* Header with Logo */}
            <header className="py-4 px-4 px-md-5">
                <div className="container-fluid">
                    <Link href="/" className="navbar-brand">
                        <Image
                            src={logoImg}
                            alt="Flexy Markets"
                            style={{ height: "45px", width: "auto" }}
                            priority
                        />
                    </Link>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-grow-1 d-flex align-items-center position-relative">
                {children}
            </main>

            {/* Footer (Simplified for this layout if needed, or keep existing legal text) */}
            <footer className="py-4 mt-auto container text-center" style={{ fontSize: "11px", color: "#999" }}>
                <p className="mb-0">© 2026. Flexy Markets. All rights reserved.</p>
            </footer>
        </div>
    );
}
