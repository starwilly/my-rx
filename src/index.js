const noop = () => {};

function Observable(subscribe) {
    this._subscribe = subscribe;
}

Observable.fromEvent = function(dom, eventName) {
    return new Observable(function subscribe(observer) {
        const handler = (e) => observer.next(e);
        dom.addEventListener(eventName, handler);

        // subscription
        return {
            unsubscribe: ()  => dom.removeEventListener(eventName, handler)
        }
    });
};

Observable.prototype.subscribe = function (next, error, complete) {
    if (typeof next === 'function') {
        return this._subscribe({
            next,
            error: error || noop,
            complete: complete || noop
        })
    } else  {
        return this._subscribe(next);
    }
};

