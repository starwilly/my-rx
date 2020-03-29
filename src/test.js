const button = document.getElementById('btn');

const btnClick$ = Observable.fromEvent(button, 'click');

const subscription = btnClick$.subscribe(() => console.log('click!'));

// console.log(subscription.unsubscribe());

