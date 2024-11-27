import { useState } from "react";
import "./App.css";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState(false);

    const handleSubmission = event => {
        event.preventDefault();
        console.log("Formulário enviado:", { name, email, message });
        setSent(true);
        setName("");
        setEmail("");
        setMessage("");
    };
    return (
        <div className="contact-form">
            <h2>Formulário de Contato</h2>
            <form onSubmit={handleSubmission} className="form-container">
                <div className="form-group">
                    <label>
                        Nome:
                        <input
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            className="form-input"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        E-mail:
                        <input
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            className="form-input"
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Mensagem:
                        <textarea
                            value={message}
                            onChange={event => setMessage(event.target.value)}
                            className="form-textarea"
                        />
                    </label>
                </div>
                <button type="submit" className="form-button">
                    Enviar
                </button>
                {sent && (
                    <p className="success-message">
                        Formulário enviado com sucesso!
                    </p>
                )}
            </form>
        </div>
    );
}
export default ContactForm;
