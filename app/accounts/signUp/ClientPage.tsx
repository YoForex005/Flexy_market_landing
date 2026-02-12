import AuthForm from '@/components/AuthForm';
import AuthSplitLayout from '@/components/AuthSplitLayout';

export default function SignUpPage() {
    const leftContent = (
        <>
            <h1 className="fw-bold mb-4" style={{ fontSize: "3.5rem", color: "#2c3e50" }}>
                <span style={{ color: "#0f4941" }}>Flexy Markets</span>
            </h1>
            <p className="lead mb-5 text-muted" style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                Join thousands of professionals who trust Flexy to streamline their workflow and boost efficiency. Experience the difference today.
            </p>

            <h4 className="fw-bold mb-4" style={{ color: "#2c3e50" }}>Why Choose Flexy?</h4>
            <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-3 text-muted">
                    <span className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "24px", height: "24px", backgroundColor: "#0f4941", color: "#fff", fontSize: "12px" }}>
                        <i className="fas fa-check"></i>
                    </span>
                    Secure & encrypted data protection
                </li>
                <li className="d-flex align-items-center mb-3 text-muted">
                    <span className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "24px", height: "24px", backgroundColor: "#0f4941", color: "#fff", fontSize: "12px" }}>
                        <i className="fas fa-check"></i>
                    </span>
                    Lightning-fast performance
                </li>
                <li className="d-flex align-items-center mb-0 text-muted">
                    <span className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: "24px", height: "24px", backgroundColor: "#0f4941", color: "#fff", fontSize: "12px" }}>
                        <i className="fas fa-check"></i>
                    </span>
                    Real-time analytics & insights
                </li>
            </ul>
        </>
    );

    return (
        <AuthSplitLayout leftContent={leftContent}>
            <AuthForm mode="signup" />
        </AuthSplitLayout>
    );
}
