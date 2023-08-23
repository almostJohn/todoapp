"use server";

import { prisma } from "@/backend/prisma";

export async function upsertTodo(id: string, updatedTitle: string) {
	await prisma.todoList.update({
		where: { id },
		data: { title: updatedTitle },
	});
}
