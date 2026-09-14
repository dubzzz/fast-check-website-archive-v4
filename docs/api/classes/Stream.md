# Class: Stream\<T\>

> Defined in: [packages/fast-check/src/stream/Stream.ts:20](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L20)

Wrapper around `IterableIterator` interface
offering a set of helpers to deal with iterations in a simple way

## Remarks

Since 0.0.7

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Implements

- `IterableIterator`\<`T`\>

## Constructors

### Constructor

> **new Stream**\<`T`\>(`g`): `Stream`\<`T`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:46](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L46)

Create a Stream based on `g`

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `g` | `IterableIterator`\<`T`\> | Underlying data of the Stream |

#### Returns

`Stream`\<`T`\>

## Methods

### \[iterator\]() {#iterator}

> **\[iterator\]**(): `IterableIterator`\<`T`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:58](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L58)

#### Returns

`IterableIterator`\<`T`\>

#### Implementation of

`IterableIterator.[iterator]`

***

### drop() {#drop}

> **drop**(`n`): `Stream`\<`T`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:114](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L114)

Drop `n` first elements of the Stream

WARNING: It closes the current stream

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | Number of elements to drop |

#### Returns

`Stream`\<`T`\>

#### Remarks

Since 0.0.1

***

### dropWhile() {#dropwhile}

> **dropWhile**(`f`): `Stream`\<`T`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:96](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L96)

Drop elements from the Stream while `f(element) === true`

WARNING: It closes the current stream

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `f` | (`v`) => `boolean` | Drop condition |

#### Returns

`Stream`\<`T`\>

#### Remarks

Since 0.0.1

***

### every() {#every}

> **every**(`f`): `boolean`

Defined in: [packages/fast-check/src/stream/Stream.ts:180](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L180)

Check whether all elements of the Stream are successful for `f`

WARNING: It closes the current stream

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `f` | (`v`) => `boolean` | Condition to check |

#### Returns

`boolean`

#### Remarks

Since 0.0.1

***

### filter() {#filter}

#### Call Signature

> **filter**\<`U`\>(`f`): `Stream`\<`U`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:157](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L157)

Filter elements of the Stream

WARNING: It closes the current stream

##### Type Parameters

| Type Parameter |
| ------ |
| `U` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `f` | (`v`) => `v is U` | Elements to keep |

##### Returns

`Stream`\<`U`\>

##### Remarks

Since 1.23.0

#### Call Signature

> **filter**(`f`): `Stream`\<`T`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:166](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L166)

Filter elements of the Stream

WARNING: It closes the current stream

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `f` | (`v`) => `boolean` | Elements to keep |

##### Returns

`Stream`\<`T`\>

##### Remarks

Since 0.0.1

***

### flatMap() {#flatmap}

> **flatMap**\<`U`\>(`f`): `Stream`\<`U`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:83](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L83)

Flat map all elements of the Stream using `f`

WARNING: It closes the current stream

#### Type Parameters

| Type Parameter |
| ------ |
| `U` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `f` | (`v`) => `IterableIterator`\<`U`\> | Mapper function |

#### Returns

`Stream`\<`U`\>

#### Remarks

Since 0.0.1

***

### getNthOrLast() {#getnthorlast}

> **getNthOrLast**(`nth`): `T` \| `null`

Defined in: [packages/fast-check/src/stream/Stream.ts:228](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L228)

Take the `nth` element of the Stream of the last (if it does not exist)

WARNING: It closes the current stream

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `nth` | `number` | Position of the element to extract |

#### Returns

`T` \| `null`

#### Remarks

Since 0.0.12

***

### has() {#has}

> **has**(`f`): \[`boolean`, `T` \| `null`\]

Defined in: [packages/fast-check/src/stream/Stream.ts:197](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L197)

Check whether one of the elements of the Stream is successful for `f`

WARNING: It closes the current stream

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `f` | (`v`) => `boolean` | Condition to check |

#### Returns

\[`boolean`, `T` \| `null`\]

#### Remarks

Since 0.0.1

***

### join() {#join}

> **join**(...`others`): `Stream`\<`T`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:215](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L215)

Join `others` Stream to the current Stream

WARNING: It closes the current stream and the other ones (as soon as it iterates over them)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`others` | `IterableIterator`\<`T`, `any`, `any`\>[] | Streams to join to the current Stream |

#### Returns

`Stream`\<`T`\>

#### Remarks

Since 0.0.1

***

### map() {#map}

> **map**\<`U`\>(`f`): `Stream`\<`U`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:71](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L71)

Map all elements of the Stream using `f`

WARNING: It closes the current stream

#### Type Parameters

| Type Parameter |
| ------ |
| `U` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `f` | (`v`) => `U` | Mapper function |

#### Returns

`Stream`\<`U`\>

#### Remarks

Since 0.0.1

***

### next() {#next}

> **next**(): `IteratorResult`\<`T`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:55](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L55)

#### Returns

`IteratorResult`\<`T`\>

#### Implementation of

`IterableIterator.next`

***

### take() {#take}

> **take**(`n`): `Stream`\<`T`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:144](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L144)

Take `n` first elements of the Stream

WARNING: It closes the current stream

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | Number of elements to take |

#### Returns

`Stream`\<`T`\>

#### Remarks

Since 0.0.1

***

### takeWhile() {#takewhile}

> **takeWhile**(`f`): `Stream`\<`T`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:132](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L132)

Take elements from the Stream while `f(element) === true`

WARNING: It closes the current stream

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `f` | (`v`) => `boolean` | Take condition |

#### Returns

`Stream`\<`T`\>

#### Remarks

Since 0.0.1

***

### nil() {#nil}

> `static` **nil**\<`T`\>(): `Stream`\<`T`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:25](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L25)

Create an empty stream of T

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Returns

`Stream`\<`T`\>

#### Remarks

Since 0.0.1

***

### of() {#of}

> `static` **of**\<`T`\>(...`elements`): `Stream`\<`T`\>

Defined in: [packages/fast-check/src/stream/Stream.ts:35](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/stream/Stream.ts#L35)

Create a stream of T from a variable number of elements

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| ...`elements` | `T`[] | Elements used to create the Stream |

#### Returns

`Stream`\<`T`\>

#### Remarks

Since 2.12.0
