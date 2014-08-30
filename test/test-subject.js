/*globals describe, before, it*/
var ProteanSubject = require('../'),
    should = require('should');

function onError (error) { throw error; }

describe('ProteanSubject', function () {

    describe('AsyncSubject from ProteanSubject', function () {
        function AsyncSubject () {
            AsyncSubject.superclass.call(this);
        }

        ProteanSubject.extend(AsyncSubject, {
            value: null,

            hasValue: false,

            next: function (value) {
                this.value = value;
                this.hasValue = true;
            },

            completed: function () {
                if (this.hasValue) {
                    this.notifyNext(this.value);
                }
                AsyncSubject.superproto.completed.call(this);
            },

            completedOnSubscribe: function (observer) {
                if (this.hasValue) {
                    observer.onNext(this.value);
                }
                AsyncSubject.superproto.completedOnSubscribe.call(this, observer);
            }
        });

        it('should only onNext after completing', function (done) {
            var subject = new AsyncSubject(),
                count = 0,
                value;

            subject.subscribe(
                function (next) {
                    value = next;
                    count++;
                },
                onError,
                function () {
                    value.should.equal('bar');
                    count.should.equal(1);
                    done();
                }
            );

            subject.onNext('foo');
            subject.onNext('bar');
            subject.onCompleted();
        });

        it('should immediately onNext if already completed', function (done) {
            var subject = new AsyncSubject(),
                count = 0,
                value;

            subject.onNext('foo');
            subject.onNext('bar');
            subject.onCompleted();

            subject.subscribe(
                function (next) {
                    value = next;
                    count++;
                },
                onError,
                function () {
                    value.should.equal('bar');
                    count.should.equal(1);
                    done();
                }
            );
        });
    });

    describe('BehaviorSubject from ProteanSubject', function () {
        function BehaviorSubject (initial) {
            BehaviorSubject.superclass.call(this);
            this.value = initial;
        }

        ProteanSubject.extend(BehaviorSubject, {
            next: function (value) {
                this.value = value;
                BehaviorSubject.superproto.next.call(this, value);
            },

            subscribed: function (observer) {
                observer.onNext(this.value);
            }
        });

        it('should onNext its current value when subscribed', function (done) {
            var subject = new BehaviorSubject('foo');

            subject.onNext('bar');

            subject.subscribe(function (value) {
                value.should.equal('bar');
                done();
            });
        });
    });
});
