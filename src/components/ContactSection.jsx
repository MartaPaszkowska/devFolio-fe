import "../styles/ContactSection.css";
import locationIcon from "../assets/svg/location.svg";
import envelopeIcon from "../assets/svg/envelope.svg";
import whatsAppIcon from "../assets/svg/whatsapp.svg";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const ContactSection = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		const serviceId = import.meta.env.VITE_REACT_APP_SERVICE_ID;
		const templateId = import.meta.env.VITE_REACT_APP_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_REACT_APP_PUBLIC_KEY;

		emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
			() => {
				alert("Your message has been sent!");
			},
			(error) => {
				console.error("FAILED...", error.text);
				alert("Error sending message. Please try again.");
			}
		);
		form.current.reset();
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

				<form onSubmit={sendEmail} ref={form} className="contact-form">
					<input
						type="text"
						placeholder="Your Name"
						name="from_name"
						required
					/>
					<input
						type="email"
						placeholder="Your Email"
						name="from_email"
						required
					/>
					<textarea
						placeholder="Your Message"
						name="message"
						required
					></textarea>
					<button type="submit" value="Send">
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactSection;
