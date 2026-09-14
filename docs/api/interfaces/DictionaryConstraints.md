# Interface: DictionaryConstraints

> Defined in: [packages/fast-check/src/arbitrary/dictionary.ts:23](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/dictionary.ts#L23)

Constraints to be applied on [dictionary](../functions/dictionary.md)

## Remarks

Since 2.22.0

## Properties

### depthIdentifier? {#depthidentifier}

> `optional` **depthIdentifier?**: `string` \| [`DepthIdentifier`](../type-aliases/DepthIdentifier.md)

Defined in: [packages/fast-check/src/arbitrary/dictionary.ts:49](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/dictionary.ts#L49)

Depth identifier can be used to share the current depth between several instances.

By default, if not specified, each instance of dictionary will have its own depth.
In other words: you can have depth=1 in one while you have depth=100 in another one.

#### Remarks

Since 3.15.0

***

### maxKeys? {#maxkeys}

> `optional` **maxKeys?**: `number`

Defined in: [packages/fast-check/src/arbitrary/dictionary.ts:35](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/dictionary.ts#L35)

Upper bound for the number of keys defined into the generated instance

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 2.22.0

***

### minKeys? {#minkeys}

> `optional` **minKeys?**: `number`

Defined in: [packages/fast-check/src/arbitrary/dictionary.ts:29](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/dictionary.ts#L29)

Lower bound for the number of keys defined into the generated instance

#### Default Value

```ts
0
```

#### Remarks

Since 2.22.0

***

### noNullPrototype? {#nonullprototype}

> `optional` **noNullPrototype?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/dictionary.ts:55](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/dictionary.ts#L55)

Do not generate objects with null prototype

#### Default Value

```ts
false
```

#### Remarks

Since 3.13.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](../type-aliases/SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/dictionary.ts:40](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/dictionary.ts#L40)

Define how large the generated values should be (at max)

#### Remarks

Since 2.22.0
