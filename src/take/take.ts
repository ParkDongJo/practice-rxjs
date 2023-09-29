import { range, interval, takeLast, take, filter } from 'rxjs';

range(1, 20).pipe(
    take(5)
).subscribe(console.log)

range(1, 20).pipe(
    filter(x => x % 2 === 0),
    take(5)
).subscribe(console.log)

interval(1000).pipe(
    take(5)
).subscribe({
    next: console.log,
    error: err => console.error(err),
    complete: () => console.log('COMPLETE')
})
