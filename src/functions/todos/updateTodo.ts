"use server";

import { prisma } from "@/prisma";

export async function updateTodo(id: string, title: string) {
	await prisma.todoList.update({
		where: { id },
		data: { title },
	});
}
