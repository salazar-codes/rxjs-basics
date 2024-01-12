import { asyncScheduler, observeOn, of, range } from "rxjs";

// const src$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// const src$ = range();
// const src$ = range(5);
// const src$ = range(1, 5);
const src$ = range(1, 5).pipe(observeOn(asyncScheduler)); //se hace asíncrono

console.log("inicio");
src$.subscribe(console.log);
console.log("fin");
