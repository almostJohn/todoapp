"use server";

import { prisma } from "@/prisma";

export async function toggleDelete(id: string) {
	await prisma.todoList.delete({
		where: { id },
		select: {
			id: true,
			title: true,
		},
	});
}
