import { interval, delay, take, tap } from 'rxjs';

interval(1000).pipe(
  take(5),
  tap(x => console.log(x + ' 발행시작')),
  delay(1500)
).subscribe(x => console.log(x + ' 발행완료'))

