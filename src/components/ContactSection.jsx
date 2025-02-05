import "../styles/ContactSection.css";

function ContactSection() {
	return (
		<section className="contact">
			<h2>Contact Me</h2>
			<form>
				<input type="text" placeholder="Your Name" required />
				<input type="email" placeholder="Your Email" required />
				<textarea placeholder="Your Message" required></textarea>
				<button type="submit">Send</button>
			</form>
		</section>
	);
}

export default ContactSection;
