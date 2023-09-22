import { range, interval, skipLast } from 'rxjs';

// skipLast 직접 확인 해보기

range(1, 20).pipe(
    skipLast(5)
).subscribe(console.log)

interval(1000).pipe(
    skipLast(5)
).subscribe({
    next: console.log,
    error: err => console.error(err),
    complete: () => console.log('COMPLETE')
})
