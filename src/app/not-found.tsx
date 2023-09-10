import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export default function NotFound() {
	return (
		<div className="mx-auto max-w-lg min-h-screen flex flex-col place-content-center place-items-center gap-8 pb-6">
			<h1 className="text-[12rem] font-black leading-none md:text-[6rem]">404</h1>
			<h2 className="text-[3rem] md:text-[3rem] text-center">Not found.</h2>
			<Link className={buttonVariants({ variant: "default" })} href="/">
				Take me back
			</Link>
		</div>
	);
}
