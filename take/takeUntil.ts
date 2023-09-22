import { map, interval, takeUntil, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

interval(50).pipe(
    takeUntil(
        ajax('http://127.0.0.1:3000/people/name/random').pipe(
            map(x => x?.response),
            tap(console.log)
        )
    )
).subscribe(console.log)
