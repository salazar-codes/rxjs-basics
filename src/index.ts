import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
	next: (valor) => console.log("next:", valor),
	error: (error) => console.warn(error),
	complete: () => console.info("Completado"),
};

const intervalo$ = new Observable<number>((subscriber) => {
	let count = 0;
	const interval = setInterval(() => {
		// cada segundo
		count++;
		subscriber.next(count);
		console.log(count);
	}, 1000);

	setTimeout(() => {
		subscriber.complete();
	}, 2500);

	// Procedimiento a ejecutar cuando se llame el UNSUBSCRIBE
	return () => {
		clearInterval(interval);
		console.log("Intérvalo destruido");
	};
});

const subs1 = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {
	subs1.unsubscribe();
	// subs2.unsubscribe();
	// subs3.unsubscribe();
	console.log("Completado timeout");
}, 3000);
