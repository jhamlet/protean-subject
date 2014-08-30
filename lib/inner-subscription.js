var classify = require('protean').classify;
/**
 * @class ProteanSubject.InnerSubscription
 */
function InnerSubscription (subject, observer) {
    this.subject = subject;
    this.observer = observer;
}

module.exports = classify(InnerSubscription,
    /** @lends ProteanSubject.InnerSubscription# */{
    dispose: function () {
        var subject = this.subject,
            observer = this.observer,
            idx;

        if (!subject.isDisposed && observer !== null) {
            idx = subject.observers.indexOf(observer);
            subject.observers.splice(idx, 1);
            this.observer = null;
        }
    }
});
