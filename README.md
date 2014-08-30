ProteanSubject
==============

> An extendable Rx.Subject



Summary
-------

**ProteanSubject** is an **Rx.Subject** that allows for easily creating new
subjects through subclassing by not having to implement all of a subject's methods.

The main methods that may be overwritten to accomlish the subject behavior you
desire are:

* `next(value)` Called when the subject is `onNext`ed
* `error(error)` Called when the subject is `onError`ed
* `completed()` Called when the subject is `onCompleted`
* `subscribed(observer)` Called when an observer subscribes to the subject
* `errorOnSubscribe(observer)` Called when the subject is in an error state and an
  observer subscribes
* `completedOnSubscribed(observer)` Called when the subject is in a completed state
  and an observer subscribes

The falling methods you should use when ready to notify the subject's observers:

* `notifyNext(value)`
* `notifyError(error)`
* `notifyCompleted()`

For more information see the [API documentation](%-links.apiDoc%>).


Installation
------------

~~~
% npm install protean-subject
~~~



Documentation
-------------

* [API documentation](API.md)




Dependencies
------------

These are installed when **protean-subject** is installed.

~~~
rx:      2.x.x
protean: x.x.x
~~~

### Development Dependencies ###

Installed when you run `npm install` in the package directory.

~~~
mocha:             1.x.x
should:            3.x.x
del:               *
gulp:              3.x.x
gulp-util:         *
gulp-ejs:          0.x.x
gulp-concat:       *
gulp-jsdoc:        0.x.x
jsdoc-to-markdown: 0.x.x
~~~



Report an Issue
---------------

* [Bugs](http://github.com/jhamlet/protean-subject/issues)
* Contact the author: <jerry@hamletink.com>



License
-------

> Copyright (c) 2014 Jerry Hamlet <jerry@hamletink.com>
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> The Software shall be used for Good, not Evil.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.
