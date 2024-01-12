import { of } from "rxjs";

// const obs$ = of(1, 2, 3, 4, 5, 6);
// const obs$ = of<number>(...[1, 2, 3, 4, 5, 6]); //Es bueno agregar el tipado
const obs$ = of(
	[1, 2],
	{ a: 3, b: 4 },
	function () {},
	true,
	Promise.resolve(true)
);

console.log("Inicio del obs$");
obs$.subscribe({
	next: (next) => console.log("next", next),
	error: null,
	complete: () => console.log("Terminamos la secuencia"),
});
console.log("Fin del obs$");
