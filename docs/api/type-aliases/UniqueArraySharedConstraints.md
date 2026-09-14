# Type Alias: UniqueArraySharedConstraints

> > **UniqueArraySharedConstraints** = `object`

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:51](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L51)

Shared constraints to be applied on [uniqueArray](../functions/uniqueArray.md)

## Remarks

Since 2.23.0

## Properties

### depthIdentifier? {#depthidentifier}

> `optional` **depthIdentifier?**: [`DepthIdentifier`](DepthIdentifier.md) \| `string`

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:82](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L82)

When receiving a depth identifier, the arbitrary will impact the depth
attached to it to avoid going too deep if it already generated lots of items.

In other words, if the number of generated values within the collection is large
then the generated items will tend to be less deep to avoid creating structures a lot
larger than expected.

For the moment, the depth is not taken into account to compute the number of items to
define for a precise generate call of the array. Just applied onto eligible items.

#### Remarks

Since 2.25.0

***

### maxLength? {#maxlength}

> `optional` **maxLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:63](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L63)

Upper bound of the generated array size

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 2.23.0

***

### minLength? {#minlength}

> `optional` **minLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:57](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L57)

Lower bound of the generated array size

#### Default Value

```ts
0
```

#### Remarks

Since 2.23.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/uniqueArray.ts:68](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uniqueArray.ts#L68)

Define how large the generated values should be (at max)

#### Remarks

Since 2.23.0
