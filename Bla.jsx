import "../styles/ContactSection.css";
import locationIcon from "../assets/svg/location.svg";
import envelopeIcon from "../assets/svg/envelope.svg";
import whatsAppIcon from "../assets/svg/whatsapp.svg";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Konfiguracja EmailJS
		const serviceId = process.env.REACT_SERVICE_ID;
		const templateId = process.env.REACT_TEMPLATE_ID;
		const publicKey = process.env.REACT_PUBLIC_KEY;

		// Dane wysyłane do EmailJS
		const templateParams = {
			from_name: name,
			from_email: email,
			message: message,
		};

		// Wysyłanie wiadomości
		emailjs
			.send(serviceId, templateId, templateParams, publicKey)
			.then((response) => {
				console.log("Email sent successfully:", response);
				alert("Your message has been sent!");
				setName(""); // Czyści pola po wysłaniu
				setEmail("");
				setMessage("");
			})
			.catch((error) => {
				console.error("Error sending email:", error);
				alert("Error sending message. Please try again.");
			});
	};

	return (
		<section className="contact">
			<div className="contact-content">
				<div className="contact-text">
					<h2>Get in touch</h2>
					<p className="contact-description">
						Drop me a line, give me a call, or send me a message by
						submitting the form.
					</p>

					<address>
						<p>
							<img
								src={locationIcon}
								alt="location"
								className="contact-icon"
							/>
							Wrocław, Poland
						</p>
						<p>
							<img
								src={envelopeIcon}
								alt="phone"
								className="contact-icon"
							/>
							<a href="mailto:marta.j.paszkowska@gmail.com">
								marta.j.paszkowska@gmail.com
							</a>
						</p>
						<p>
							<img
								src={whatsAppIcon}
								alt="whatsApp"
								className="contact-icon"
							/>
							<a href="tel:+48513964028">+48 513 964 028</a>
						</p>
					</address>
				</div>

				<form onSubmit={handleSubmit} className="contact-form">
					<input
						type="text"
						placeholder="Your Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<input
						type="email"
						placeholder="Your Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<textarea
						placeholder="Your Message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
					></textarea>
					<button type="submit">Send Message</button>
				</form>
			</div>
		</section>
	);
}

export default ContactSection;
