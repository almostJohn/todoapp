import { SiGithub, SiTwitter, SiInstagram, SiFacebook, SiDiscord } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="footer p-10">
			<aside>
				<Image className="cursor-pointer" src="/favicon.png" width={32} height={32} alt="notes" />
				<p>
					<span className="cursor-pointer">Todo</span>
					<br />
					Copyright © 2023
				</p>
			</aside>
			<nav>
				<header className="footer-title">Social</header>
				<div className="grid grid-flow-col gap-4">
					<div className="tooltip tooltip-bottom" data-tip="GitHub">
						<Link
							aria-label="GitHub"
							href="https://github.com/almostJohn"
							rel="external noopener noreferrer"
							target="_blank"
						>
							<SiGithub />
						</Link>
					</div>
					<div className="tooltip tooltip-bottom" data-tip="Twitter">
						<Link
							aria-label="Twitter"
							href="https://twitter.com/almostJohn1"
							rel="external noopener noreferrer"
							target="_blank"
						>
							<SiTwitter />
						</Link>
					</div>
					<div className="tooltip tooltip-bottom" data-tip="Instagram">
						<Link
							aria-label="Instagram"
							href="https://instagram.com/almostjohn1"
							rel="external noopener noreferrer"
							target="_blank"
						>
							<SiInstagram />
						</Link>
					</div>
					<div className="tooltip tooltip-bottom" data-tip="Facebook">
						<Link
							aria-label="Facebook"
							href="https://facebook.com/alsojohn01"
							rel="external noopener noreferrer"
							target="_blank"
						>
							<SiFacebook />
						</Link>
					</div>
					<div className="tooltip tooltip-bottom" data-tip="Discord">
						<Link
							aria-label="Discord"
							href="https://discord.com/users/996354867708841984"
							rel="external noopener noreferrer"
							target="_blank"
						>
							<SiDiscord />
						</Link>
					</div>
				</div>
			</nav>
		</footer>
	);
}
