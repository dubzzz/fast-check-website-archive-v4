# Interface: ArrayConstraints

> Defined in: [packages/fast-check/src/arbitrary/array.ts:15](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/array.ts#L15)

Constraints to be applied on [array](../functions/array.md)

## Remarks

Since 2.4.0

## Properties

### depthIdentifier? {#depthidentifier}

> `optional` **depthIdentifier?**: `string` \| [`DepthIdentifier`](../type-aliases/DepthIdentifier.md)

Defined in: [packages/fast-check/src/arbitrary/array.ts:51](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/array.ts#L51)

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

Defined in: [packages/fast-check/src/arbitrary/array.ts:27](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/array.ts#L27)

Upper bound of the generated array size

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 2.4.0

***

### minLength? {#minlength}

> `optional` **minLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/array.ts:21](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/array.ts#L21)

Lower bound of the generated array size

#### Default Value

```ts
0
```

#### Remarks

Since 2.4.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](../type-aliases/SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/array.ts:37](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/array.ts#L37)

Define how large the generated values should be (at max)

When used in conjonction with `maxLength`, `size` will be used to define
the upper bound of the generated array size while `maxLength` will be used
to define and document the general maximal length allowed for this case.

#### Remarks

Since 2.22.0
