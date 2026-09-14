# Class: Value\<T\>

> Defined in: [packages/fast-check/src/check/arbitrary/definition/Value.ts:13](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/arbitrary/definition/Value.ts#L13)

A `Value<T, TShrink = T>` holds an internal value of type `T`
and its associated context

## Remarks

Since 3.0.0 (previously called `NextValue` in 2.15.0)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Constructors

### Constructor

> **new Value**\<`T`\>(`value_`, `context`, `customGetValue?`): `Value`\<`T`\>

Defined in: [packages/fast-check/src/check/arbitrary/definition/Value.ts:50](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/arbitrary/definition/Value.ts#L50)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value_` | `T` | Internal value of the shrinkable |
| `context` | `unknown` | Context associated to the generated value (useful for shrink) |
| `customGetValue?` | () => `T` | Limited to internal usages (to ease migration to next), it will be removed on next major |

#### Returns

`Value`\<`T`\>

## Properties

### context {#context}

> `readonly` **context**: `unknown`

Defined in: [packages/fast-check/src/check/arbitrary/definition/Value.ts:43](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/arbitrary/definition/Value.ts#L43)

Context for the generated value
TODO - Do we want to clone it too?

#### Remarks

2.15.0

***

### hasToBeCloned {#hastobecloned}

> `readonly` **hasToBeCloned**: `boolean`

Defined in: [packages/fast-check/src/check/arbitrary/definition/Value.ts:19](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/arbitrary/definition/Value.ts#L19)

State storing the result of hasCloneMethod
If `true` the value will be cloned each time it gets accessed

#### Remarks

Since 2.15.0

***

### value {#value}

> `readonly` **value**: `T`

Defined in: [packages/fast-check/src/check/arbitrary/definition/Value.ts:32](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/arbitrary/definition/Value.ts#L32)

Safe value of the shrinkable
Depending on `hasToBeCloned` it will either be `value_` or a clone of it

#### Remarks

Since 2.15.0

***

### value\_ {#value_}

> `readonly` **value\_**: `T`

Defined in: [packages/fast-check/src/check/arbitrary/definition/Value.ts:37](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/arbitrary/definition/Value.ts#L37)

Internal value of the shrinkable

#### Remarks

Since 2.15.0
