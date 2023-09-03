import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export default function NotFound() {
	return (
		<div className="flex flex-col justify-center items-center h-[100vh]">
			<h1 className="text-[6em] m-0">404</h1>
			<p className="text-[1.5em] m-0 mt-[20px] mb-5">You&apos;ve lost track! page not found</p>
			<Link className={buttonVariants({ variant: "default" })} href="/">
				Take me back
			</Link>
		</div>
	);
}
