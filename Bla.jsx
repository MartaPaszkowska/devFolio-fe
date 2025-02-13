import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("REACT_SERVICE_ID", "REACT_TEMPLATE_ID", form.current, {
				publicKey: "REACT_PUBLIC_KEY",
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
		<form ref={form} onSubmit={sendEmail}>
			<label>Name</label>
			<input type="text" name="user_name" />
			<label>Email</label>
			<input type="email" name="user_email" />
			<label>Message</label>
			<textarea name="message" />
			<input type="submit" value="Send" />
		</form>
	);
};
