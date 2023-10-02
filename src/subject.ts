/*
  rxjs에서는 대부분 observable을 사용한다.
  하지만 observable은 두가지의 문제점이 있다.
  1. observable은 cold observable이다.
  2. observable은 unicast이다.

  이런 한계점 때문에 subject를 사용할 때가 있다.
*/


/*
[Observable]
- 누군가 구독을 해야 발행을 시작
- 각 구독자에게 따로 발행
- unicast
- 🧊 cold 발행
- Netflix

[Subject]
- 개발자가 원하는 때에 발행
- 모든 구독자에게 똑같이 발행
- multicast 방식
- 🔥 hot 발행
- TV채널 (3화를 놓쳤다면, 다시 3화를 볼수 없다. 4화부터 볼수 있따)

*/
import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
const subject = new Subject()

subject.subscribe(console.log)

subject.next(1)
subject.next(3)
subject.next(5)


// 추가 기능이 있는 Subject들

// BehaviorSubject
// 마지막 값을 저장 후 추가 구독자에게 발행

const bhSubject = new BehaviorSubject(0) // 초기값이 있음
 
bhSubject.subscribe((x) => console.log('A: ' + x))
 
bhSubject.next(1)
bhSubject.next(2)
bhSubject.next(3)
 
// 아래와 같이 다시 subscribe를 하면
// 이전 마지막 값이였던 3이 초기값으로 발행되고
// 그 다음 값이 발행된다.
bhSubject.subscribe((x) => console.log('B: ' + x))
 
bhSubject.next(4)
bhSubject.next(5)



// ReplaySubject
// 인자로 N을 넘기면
// 마지막 N개 값을 저장 후 추가 구독자에게 발행
const rpSubject = new ReplaySubject(3) // 마지막 3개 값 저장
 
rpSubject.subscribe((x) => console.log('A: ' + x))
 
rpSubject.next(1)
rpSubject.next(2)
rpSubject.next(3)
rpSubject.next(4)
rpSubject.next(5)
 
subject.subscribe((x) => console.log('B: ' + x))
 
rpSubject.next(6)
rpSubject.next(7)


// AsyncSubject
// Complete 후의 마지막 값만 발행
const asSubject = new AsyncSubject()
 
asSubject.subscribe((x) => console.log('A: ' + x))
 
asSubject.next(1)
asSubject.next(2)
asSubject.next(3)
 
asSubject.subscribe((x) => console.log('B: ' + x))
 
asSubject.next(4)
asSubject.next(5)

asSubject.subscribe((x) => console.log('C: ' + x))

asSubject.next(6)
asSubject.next(7)
// 이 이후의 마지막 값만 발행함
asSubject.complete()