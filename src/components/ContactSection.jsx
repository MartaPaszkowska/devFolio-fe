import "../styles/ContactSection.css";

function ContactSection() {
	return (
		<section className="contact">
			<div className="contact-content">
				<div className="contact-text">
					<h2>Hire Me</h2>
					<p>
						Let's collaborate to create perfect and most
						user-friendly digital products. Just leave a message to
						get in touch.
					</p>
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
