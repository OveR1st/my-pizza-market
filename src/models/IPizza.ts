export interface IPizza {
	id: string
	imageUrl: string
	title: string
	types: number[]
	sizes: number[]
	price: number
	category: number
	rating: number
	pizzaCount: number
	initPrice: number
}

export type TPizzaCart = Pick<
	IPizza,
	'id' | 'imageUrl' | 'title' | 'price' | 'pizzaCount' | 'types' | 'sizes' | 'initPrice'
>
// type TodoInfo = Omit<Todo, "completed" | "createdAt">;
