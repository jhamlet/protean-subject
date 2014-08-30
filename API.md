<a name="ProteanSubject"></a>
#class: ProteanSubject
**Extends**: `external:Rx.Observable`  
**Members**

* [class: ProteanSubject](#ProteanSubject)
  * [ProteanSubject.isDisposed](#ProteanSubject.isDisposed)
  * [ProteanSubject.isStopped](#ProteanSubject.isStopped)
  * [ProteanSubject.exception](#ProteanSubject.exception)
  * [ProteanSubject.observers](#ProteanSubject.observers)
  * [ProteanSubject.hasObservers()](#ProteanSubject.hasObservers)
  * [ProteanSubject.next(value)](#ProteanSubject.next)
  * [ProteanSubject.error(error)](#ProteanSubject.error)
  * [ProteanSubject.completed()](#ProteanSubject.completed)
  * [ProteanSubject.subscribed(observer)](#ProteanSubject.subscribed)
  * [ProteanSubject.errorOnSubscribe(observer)](#ProteanSubject.errorOnSubscribe)
  * [ProteanSubject.completedOnSubscribe(observer)](#ProteanSubject.completedOnSubscribe)
  * [ProteanSubject.onNext(value)](#ProteanSubject.onNext)
  * [ProteanSubject.onError(error)](#ProteanSubject.onError)
  * [ProteanSubject.onCompleted()](#ProteanSubject.onCompleted)
  * [ProteanSubject.notifyNext(value)](#ProteanSubject.notifyNext)
  * [ProteanSubject.notifyError(error)](#ProteanSubject.notifyError)
  * [ProteanSubject.notifyCompleted()](#ProteanSubject.notifyCompleted)
  * [ProteanSubject.dispose()](#ProteanSubject.dispose)
  * [ProteanSubject.reset()](#ProteanSubject.reset)
  * [ProteanSubject.destroy()](#ProteanSubject.destroy)
  * [class: ProteanSubject.InnerSubscription](#ProteanSubject.InnerSubscription)

<a name="ProteanSubject.isDisposed"></a>
##ProteanSubject.isDisposed
<a name="ProteanSubject.isStopped"></a>
##ProteanSubject.isStopped
<a name="ProteanSubject.exception"></a>
##ProteanSubject.exception
<a name="ProteanSubject.observers"></a>
##ProteanSubject.observers
<a name="ProteanSubject.hasObservers"></a>
##ProteanSubject.hasObservers()
**Returns**: `Boolean`  
<a name="ProteanSubject.next"></a>
##ProteanSubject.next(value)
By default we just notify our observers with the value

**Params**

- value `Mixed`  

<a name="ProteanSubject.error"></a>
##ProteanSubject.error(error)
By default we just stop and cache our exception and then notify our observers
of the error

**Params**

- error `Error`  

<a name="ProteanSubject.completed"></a>
##ProteanSubject.completed()
By defualt we just stop and then notify the observers

<a name="ProteanSubject.subscribed"></a>
##ProteanSubject.subscribed(observer)
Called when an observer is registered

**Params**

- observer <code>[external:Rx.Observer](external:Rx.Observer)</code>  

<a name="ProteanSubject.errorOnSubscribe"></a>
##ProteanSubject.errorOnSubscribe(observer)
Called when we encounter an error on subscribe

**Params**

- observer <code>[external:Rx.Observer](external:Rx.Observer)</code>  

<a name="ProteanSubject.completedOnSubscribe"></a>
##ProteanSubject.completedOnSubscribe(observer)
Called when we are already completed when subscribed

**Params**

- observer <code>[external:Rx.Observer](external:Rx.Observer)</code>  

<a name="ProteanSubject.onNext"></a>
##ProteanSubject.onNext(value)
**Params**

- value `Mixed`  

<a name="ProteanSubject.onError"></a>
##ProteanSubject.onError(error)
**Params**

- error `Error`  

<a name="ProteanSubject.onCompleted"></a>
##ProteanSubject.onCompleted()
<a name="ProteanSubject.notifyNext"></a>
##ProteanSubject.notifyNext(value)
**Params**

- value `Mixed`  

<a name="ProteanSubject.notifyError"></a>
##ProteanSubject.notifyError(error)
**Params**

- error `Error`  

<a name="ProteanSubject.notifyCompleted"></a>
##ProteanSubject.notifyCompleted()
<a name="ProteanSubject.dispose"></a>
##ProteanSubject.dispose()
<a name="ProteanSubject.reset"></a>
##ProteanSubject.reset()
<a name="ProteanSubject.destroy"></a>
##ProteanSubject.destroy()
<a name="ProteanSubject.InnerSubscription"></a>
##class: ProteanSubject.InnerSubscription
**Members**

* [class: ProteanSubject.InnerSubscription](#ProteanSubject.InnerSubscription)

