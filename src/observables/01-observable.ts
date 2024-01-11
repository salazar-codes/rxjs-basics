import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
 next: (valor) => console.log(valor),
 error: (error) => console.warn(error),
 complete: () => console.info("Completado"),
};

//const obs$ = Observable.create();
// Observable de tipo string (fluirán datos string)
const obs$ = new Observable<string>((subs) => {
 subs.next("Hola");
 subs.next("Hola");
 subs.next("Hola1");
 subs.complete(); //le dice a los subscribers q no emitirás nada más.
 subs.next("Hola2");
});

// obs$.subscribe({
//  next: (valor) => console.log(valor),
//  error: (error) => console.warn(error),
//  complete: () => console.info("Completado"),
// });

obs$.subscribe(observer);
