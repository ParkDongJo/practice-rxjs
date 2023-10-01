import { merge, map, take, concat, interval, fromEvent } from 'rxjs';

const intv1$ = interval(1000).pipe(
    map(() => 'INTERVAL 1'), take(3))
const intv2$ = interval(1000).pipe(
    map(() => 'INTERVAL 2'), take(6))
const intv3$ = interval(1000).pipe(
    map(() => 'INTERVAL 3'), take(9))
const intv4$ = interval(1000).pipe(
    map(() => 'INTERVAL 4'), take(9))
const intv5$ = interval(1000).pipe(
    map(() => 'INTERVAL 5'), take(9))

// 마지막 숫자는 3개만 merge 한다는 의미이다
// 현재 take가 제각각이고 intv3$은 9개를 발행하므로
// 처음에는 intv1$, intv2$, intv3$의 3개만 발행하고
// 두번째는 intv2$, intv3$, intv4$의 3개만 발행하고
// 세번째는 intv3$, intv4$, intv5$의 3개만 발행한다.
// 이런식으로 설정된 숫자만큼 발행한다.
merge(intv1$, intv2$, intv3$, intv4$, intv5$, 3)
.subscribe(console.log)

// 만약 이렇게 1로 설정했을 때는
// concat과 같은 효과를 낸다.
merge(intv1$, intv2$, intv3$, intv4$, intv5$, 1)
.subscribe(console.log)


// 만약 이렇게 1로 설정했을 때는
// concat과 같은 효과를 낸다.
concat(intv1$, intv2$, intv3$, intv4$, intv5$)
.subscribe(console.log)


// 하지만 concat도
// 아래와 같이 예제를 작성 했을 시, interval이 돌고 있을 때는 click 스트림이 발행되지 않는다.
// 그리고 interval이 다 끝나고 나서야 click 스트림을 그제서야 받는다.
// 아래와 같이 subscribe 가 concat 이후 되어 있을때
// interval을 구독하고, interval이 끝나고 나서야 click을 구독한다.
const interval$ = interval(1000).pipe(
        map(_ => 'interval'), take(5)
    )
const click$ = fromEvent(document, 'click').pipe(map(_ => 'click'))

concat(interval$, click$).subscribe(console.log)