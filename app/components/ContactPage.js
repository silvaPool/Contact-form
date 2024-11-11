import { useRouter } from "next/router";
import React, { useState } from "react";

const ContactPage = () => {
    const [submitterName, setSubmitterName] = useState("");
    const router = useRouter();
    const confirmationScreenVisible = router.query?.success && router.query.success === "true";
    const formVisible = !confirmationScreenVisible;

    const ConfirmationMessage = (
        <React.Fragment>
            <p>
            Thank you for submitting this form. Someone should get back to you within 24-48 hours.
            </p>

            <button onClick={() => router.replace("/contact", undefined, {shallow: true})}>Submit Another Response</button>
        </React.Fragment>
    )

    return (
        <div>
            <h1>Contact Us</h1>
            {formVisible ? ContactForm : ConfirmationMessage}
        </div>
    );
};

export default ContactPage;