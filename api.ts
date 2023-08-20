import type { TaskInfo } from "./types/Tasks";

const BASE_URL = "http://localhost:3001";

export async function getAllTodos(): Promise<TaskInfo[]> {
	const res = await fetch(`${BASE_URL}/tasks`, { cache: "no-store" });
	const todos = (await res.json()) as TaskInfo[];
	return todos;
}

export async function addTodo(todo: TaskInfo): Promise<TaskInfo> {
	const res = await fetch(`${BASE_URL}/tasks`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todo),
	});

	const newTodo = (await res.json()) as TaskInfo;
	return newTodo;
}

export async function editTodo(todo: TaskInfo): Promise<TaskInfo> {
	const res = await fetch(`${BASE_URL}/tasks/${todo.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(todo),
	});

	const editedTodo = (await res.json()) as TaskInfo;
	return editedTodo;
}

export async function deleteTodo(id: string): Promise<void> {
	await fetch(`${BASE_URL}/tasks/${id}`, {
		method: "DELETE",
	});
}
