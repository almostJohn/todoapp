import { redirect } from "next/navigation";
import { prisma } from "@/backend/prisma";

export async function createTodo(data: FormData) {
	"use server";

	const title = data.get("title")!.valueOf();

	if (typeof title !== "string") {
		throw new Error("Invalid title provided");
	}

	if (title.length >= 500) {
		throw new Error("Max length of title exceeded");
	}

	if (title.length === 0) {
		throw new Error("Can't put an empty value");
	}

	await prisma.todoList.create({
		data: {
			title,
			completed: false,
		},
	});
	redirect("/");
}
