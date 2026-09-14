# Type Alias: SetConstraints

> > **SetConstraints** = `object`

Defined in: [packages/fast-check/src/arbitrary/set.ts:12](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/set.ts#L12)

Constraints to be applied on [set](../functions/set.md)

## Remarks

Since 4.4.0

## Properties

### depthIdentifier? {#depthidentifier}

> `optional` **depthIdentifier?**: [`DepthIdentifier`](DepthIdentifier.md) \| `string`

Defined in: [packages/fast-check/src/arbitrary/set.ts:43](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/set.ts#L43)

When receiving a depth identifier, the arbitrary will impact the depth
attached to it to avoid going too deep if it already generated lots of items.

In other words, if the number of generated values within the collection is large
then the generated items will tend to be less deep to avoid creating structures a lot
larger than expected.

For the moment, the depth is not taken into account to compute the number of items to
define for a precise generate call of the set. Just applied onto eligible items.

#### Remarks

Since 4.4.0

***

### maxLength? {#maxlength}

> `optional` **maxLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/set.ts:24](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/set.ts#L24)

Upper bound of the generated set size

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 4.4.0

***

### minLength? {#minlength}

> `optional` **minLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/set.ts:18](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/set.ts#L18)

Lower bound of the generated set size

#### Default Value

```ts
0
```

#### Remarks

Since 4.4.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/set.ts:29](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/set.ts#L29)

Define how large the generated values should be (at max)

#### Remarks

Since 4.4.0
