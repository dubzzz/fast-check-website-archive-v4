# Type Alias: OneOfConstraints

> > **OneOfConstraints** = `object`

Defined in: [packages/fast-check/src/arbitrary/oneof.ts:51](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/oneof.ts#L51)

Constraints to be applied on [oneof](../functions/oneof.md)

## Remarks

Since 2.14.0

## Properties

### depthIdentifier? {#depthidentifier}

> `optional` **depthIdentifier?**: [`DepthIdentifier`](DepthIdentifier.md) \| `string`

Defined in: [packages/fast-check/src/arbitrary/oneof.ts:87](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/oneof.ts#L87)

Depth identifier can be used to share the current depth between several instances.

By default, if not specified, each instance of oneof will have its own depth.
In other words: you can have depth=1 in one while you have depth=100 in another one.

#### Remarks

Since 2.14.0

***

### depthSize? {#depthsize}

> `optional` **depthSize?**: [`DepthSize`](DepthSize.md)

Defined in: [packages/fast-check/src/arbitrary/oneof.ts:70](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/oneof.ts#L70)

While going deeper and deeper within a recursive structure (see [letrec](../functions/letrec.md)),
this factor will be used to increase the probability to generate instances
of the first passed arbitrary.

#### Remarks

Since 2.14.0

***

### maxDepth? {#maxdepth}

> `optional` **maxDepth?**: `number`

Defined in: [packages/fast-check/src/arbitrary/oneof.ts:78](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/oneof.ts#L78)

Maximal authorized depth.
Once this depth has been reached only the first arbitrary will be used.

#### Default Value

Number.POSITIVE_INFINITY — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 2.14.0

***

### withCrossShrink? {#withcrossshrink}

> `optional` **withCrossShrink?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/oneof.ts:62](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/oneof.ts#L62)

When set to true, the shrinker of oneof will try to check if the first arbitrary
could have been used to discover an issue. It allows to shrink trees.

Warning: First arbitrary must be the one resulting in the smallest structures
for usages in deep tree-like structures.

#### Default Value

```ts
false
```

#### Remarks

Since 2.14.0
