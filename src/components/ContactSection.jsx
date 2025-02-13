import "../styles/ContactSection.css";
import locationIcon from "../assets/svg/location.svg";
import envelopeIcon from "../assets/svg/envelope.svg";
import whatsAppIcon from "../assets/svg/whatsapp.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(REACT_SERVICE_ID, REACT_TEMPLATE_ID, form.current, {
				publicKey: REACT_PUBLIC_KEY,
			})
			.then(
				() => {
					alert("Your message has been sent!");
				},
				(error) => {
					console.log("FAILED...", error.text);
					alert("Error sending message. Please try again.");
				}
			);
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

				<form ref={form} onSubmit={sendEmail} className="contact-form">
					<input
						type="text"
						name="user_name"
						placeholder="Full Name/Company*"
						required
					/>
					<input
						type="email"
						name="user_email"
						placeholder="E-mail"
						required
					/>
					<textarea
						name="message"
						placeholder="How can I help you?*"
						required
					></textarea>
					<button type="submit" value="Send">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}

export default ContactSection;
