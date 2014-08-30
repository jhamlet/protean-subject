var protean = require('protean'),
    inherit = protean.inherit,
    Rx = require('rx');
/**
 * @class ProteanSubject
 * @extends external:Rx.Observable
 * @mixes external:Rx.Observer
 */
function ProteanSubject () {
    ProteanSubject.superclass.call(this, this._subscribe.bind(this));
    this.observers = [];
} 
//------------------------------------------------------------------------------
// Class Properties/Methods
//------------------------------------------------------------------------------
ProteanSubject.InnerSubscription = require('./inner-subscription');
//------------------------------------------------------------------------------
// Mix-in Rx.Observer
//------------------------------------------------------------------------------
protean.augment(ProteanSubject.prototype, Rx.Observer);
//------------------------------------------------------------------------------
// Instance Properties/Methods
//------------------------------------------------------------------------------
module.exports = inherit(Rx.Observable, ProteanSubject,
    /** @lends ProteanSubject */{
    /**
     * @property {Boolean}
     */
    isDisposed: false,
    /**
     * @property {Boolean}
     */
    isStopped: false,
    /**
     * @property {null|Error}
     */
    exception: null,
    /**
     * @property {Array<external:Rx.Observer>}
     */
    observers: null,
    /**
     * @returns {Boolean}
     */
    hasObservers: function () {
        return this.observers.length > 0;
    },
    /**
     * By default we just notify our observers with the value
     * @param {Mixed} value
     */
    next: function (value) {
        this.notifyNext(value);
    },
    /**
     * By default we just stop and cache our exception and then notify our observers
     * of the error
     * @param {Error} error
     */
    error: function (error) {
        this.isStopped = true;
        this.exception = error;
        this.notifyError(error);
    },
    /**
     * By defualt we just stop and then notify the observers
     */
    completed: function () {
        this.isStopped = true;
        this.notifyCompleted();
    },
    /**
     * Called when an observer is registered
     * @abstract
     * @param {external:Rx.Observer} observer
     */
    subscribed: function () {},
    /**
     * Called when we encounter an error on subscribe
     * @param {external:Rx.Observer} observer
     */
    errorOnSubscribe: function (observer) {
        observer.onError(this.exception);
    },
    /**
     * Called when we are already completed when subscribed
     * @param {external:Rx.Observer} observer
     */
    completedOnSubscribe: function (observer) {
        observer.onCompleted();
    },
    /**
     * @param {Mixed} value
     */
    onNext: function (value) {
        this._checkDisposed();
        
        if (!this.isStopped) {
            this.next(value);
        }
    },
    /**
     * @param {Error} error
     */
    onError: function (error) {
        if (!this.isStopped) {
            this.error(error);
            if (this.isStopped) {
                this.reset();
            }
        }
    },
    /**
     */
    onCompleted: function () {
        this._checkDisposed();

        if (!this.isStopped) {
            this.completed();
            if (this.isStopped) {
                this.reset();
            }
        }
    },
    /**
     * @param {Mixed} value
     */
    notifyNext: function (value) { this._notify('onNext', value); },
    /**
     * @param {Error} error
     */
    notifyError: function (error) { this._notify('onError', error); },
    /**
     */
    notifyCompleted: function () { this._notify('onCompleted'); },
    /**
     */
    dispose: function () {
        this._checkDisposed();

        if (!this.isDisposed) {
            this.isDisposed = true;
            this.reset();
        }
    },
    /**
     * @abstract
     */
    reset: function () {
        (this.observers || (this.observers = [])).length = 0;
    },
    /**
     */
    destroy: function () {
        this.observers = null;
    },
    /**
     * Notify all obeservers with the given method, and pass the optional value
     * @private
     * @param {String} method
     * @param {Mixed} [value]
     */
    _notify: function (method, value) {
        var observers = this.observers.slice(0),
            len = observers.length,
            i = 0;

        for (; i < len; i++) {
            observers[i][method](value);
        }
    },
    /**
     * @private
     */
    _checkDisposed: function () {
        if (this.isDisposed) {
            throw new Error('ProteanSubject is disposed.');
        }
    },
    /**
    * @private
    * @param {external:Rx.Observer} observer
    * @returns {external:Rx.Disposable}
    */
    _subscribe: function (observer) {
        this._checkDisposed();

        if (!this.isStopped) {
            this.observers.push(observer);
            this.subscribed(observer);
            return new ProteanSubject.InnerSubscription(this, observer);
        }

        if (this.exception) {
            this.errorOnSubscribe(observer);
            return Rx.Disposable.empty;
        }

        this.completedOnSubscribe(observer);
        return Rx.Disposable.empty;
    },

});
