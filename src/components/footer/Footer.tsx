import { SiGithub, SiTwitter, SiInstagram, SiFacebook, SiDiscord } from "@icons-pack/react-simple-icons";

export function Footer() {
	return (
		<footer className="footer p-10 bg-neutral-100 text-neutral-900 dark:bg-transparent dark:text-neutral-200">
			<div>
				<h3 className="text-xl font-bold leading-tight cursor-pointer">
					todoapp<span className="text-sky-500">.gg</span>
				</h3>
				<p>
					Authored and Maintained by almostJohn
					<br />
					Copyright © 2023
				</p>
			</div>
			<div>
				<span className="footer-title">Social</span>
				<div className="grid grid-flow-col gap-4">
					<a
						aria-label="GitHub"
						href="https://github.com/almostJohn"
						rel="external noopener noreferrer"
						target="_blank"
						title="GitHub"
					>
						<SiGithub />
					</a>
					<a
						aria-label="Twitter"
						href="https://twitter.com/almostJohn1"
						rel="external noopener noreferrer"
						target="_blank"
						title="Twitter"
					>
						<SiTwitter />
					</a>
					<a
						aria-label="Instagram"
						href="https://instagram.com/almostjohn1"
						rel="external noopener noreferrer"
						target="_blank"
						title="Instagram"
					>
						<SiInstagram />
					</a>
					<a
						aria-label="Facebook"
						href="https://facebook.com/alsojohn01"
						rel="external noopener noreferrer"
						target="_blank"
						title="Facebook"
					>
						<SiFacebook />
					</a>
					<a
						aria-label="Discord"
						href="https://discord.com/users/996354867708841984"
						rel="external noopener noreferrer"
						target="_blank"
						title="Discord"
					>
						<SiDiscord />
					</a>
				</div>
			</div>
		</footer>
	);
}
