const ContactForm = (
    <form
        name="contact-form"
        method="POST"
        action="contact/?success=true"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        // netlify
    >
    <input type="hidden" name="form-name" value="contact-form"/>
    <p hidden>
        <label>
            Don't fill this out: <input name="bot-field" />
        </label>
    </p>
    <label htmlFor="name">Name *</label>
    <input
        id="name"
        name="name"
        required
        type="text"
    />
    <label htmlFor="company">Company *</label>
    <input id="company" name="company" required type="text"/>
    <label htmlFor="email">E-mail Address *</label>
    <input id="email" type="email" name="email" required />
    <label htmlFor="message">Message *</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Submit</button>
    </form>
);