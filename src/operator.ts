import { range, filter, interval, tap, map } from 'rxjs';

const observable$ = range(1, 10)

const observer = {
  next: (x: any) => console.log(x + ' 발행'),
  error: (err: Error) => console.error('발행중 오류', err),
  complete: () => console.log('발행물 완결'),
}

observable$.pipe(
  filter(x => x % 2 === 0)
).subscribe(observer)

const observable2$ = interval(1000) 

observable2$.pipe(
  tap(console.log),
  filter(x => x % 2 === 0),
  map(x => x * x)
).subscribe(observer)
