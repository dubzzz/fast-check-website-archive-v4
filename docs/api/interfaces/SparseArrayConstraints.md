# Interface: SparseArrayConstraints

> Defined in: [packages/fast-check/src/arbitrary/sparseArray.ts:23](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/sparseArray.ts#L23)

Constraints to be applied on [sparseArray](../functions/sparseArray.md)

## Remarks

Since 2.13.0

## Properties

### depthIdentifier? {#depthidentifier}

> `optional` **depthIdentifier?**: `string` \| [`DepthIdentifier`](../type-aliases/DepthIdentifier.md)

Defined in: [packages/fast-check/src/arbitrary/sparseArray.ts:66](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/sparseArray.ts#L66)

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

Defined in: [packages/fast-check/src/arbitrary/sparseArray.ts:29](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/sparseArray.ts#L29)

Upper bound of the generated array size (maximal size: 4294967295)

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 2.13.0

***

### maxNumElements? {#maxnumelements}

> `optional` **maxNumElements?**: `number`

Defined in: [packages/fast-check/src/arbitrary/sparseArray.ts:41](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/sparseArray.ts#L41)

Upper bound of the number of non-hole elements

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 2.13.0

***

### minNumElements? {#minnumelements}

> `optional` **minNumElements?**: `number`

Defined in: [packages/fast-check/src/arbitrary/sparseArray.ts:35](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/sparseArray.ts#L35)

Lower bound of the number of non-hole elements

#### Default Value

```ts
0
```

#### Remarks

Since 2.13.0

***

### noTrailingHole? {#notrailinghole}

> `optional` **noTrailingHole?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/sparseArray.ts:47](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/sparseArray.ts#L47)

When enabled, all generated arrays will either be the empty array or end by a non-hole

#### Default Value

```ts
false
```

#### Remarks

Since 2.13.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](../type-aliases/SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/sparseArray.ts:52](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/sparseArray.ts#L52)

Define how large the generated values should be (at max)

#### Remarks

Since 2.22.0
