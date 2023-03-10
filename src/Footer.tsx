import React from "react";
import "@/assets/styles/footer.scss";

function Footer() {
	return (
		<footer className="footer">
			<div>
				<p>© 2023 - SecureKeyGen.com</p>
			</div>
			<div>
				<a target="_blank" href="https://github.com/DerTyp876/SecureKeyGen">
					GitHub
				</a>
				<a href="/privacy">Privacy</a>
				<a href="/legal">Legal Notice</a>
			</div>
		</footer>
	);
}

export default Footer;
