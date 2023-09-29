import { range, interval, skipWhile } from 'rxjs';

range(1, 20).pipe(
    skipWhile(x => x <= 10)
).subscribe(console.log)

interval(1000).pipe(
    skipWhile(x => x < 5)
).subscribe({
    next: console.log,
    error: err => console.error(err),
    complete: () => console.log('COMPLETE')
})
