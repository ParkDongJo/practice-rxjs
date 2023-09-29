import { range, interval, takeLast, take, filter } from 'rxjs';

range(1, 20).pipe(
    takeLast(5)
).subscribe(console.log)

interval(1000).pipe(
    take(10),
    takeLast(5)
).subscribe({
    next: console.log,
    error: err => console.error(err),
    complete: () => console.log('COMPLETE')
})
