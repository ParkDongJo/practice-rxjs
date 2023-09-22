import { range, interval, skip } from 'rxjs';

range(1, 20).pipe(
    skip(5)
).subscribe(console.log)

interval(1000).pipe(
    skip(5)
).subscribe({
    next: console.log,
    error: err => console.error(err),
    complete: () => console.log('COMPLETE')
})
