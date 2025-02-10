import "../styles/ContactSection.css";
import locationIcon from "../assets/svg/location.svg";
import envelopeIcon from "../assets/svg/envelope.svg";
import whatsAppIcon from "../assets/svg/whatsapp.svg";

function ContactSection() {
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
				<form className="contact-form">
					<input
						type="text"
						placeholder="Full Name/Company*"
						required
					/>
					<input type="email" placeholder="E-mail/Tel*" required />
					<textarea
						placeholder="How can I help you?*"
						required
					></textarea>
					<button type="submit">Send Message</button>
				</form>
			</div>
		</section>
	);
}

export default ContactSection;
