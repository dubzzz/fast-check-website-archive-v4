# Interface: MapConstraints

> Defined in: [packages/fast-check/src/arbitrary/map.ts:18](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/map.ts#L18)

Constraints to be applied on [map](../functions/map.md)

## Remarks

Since 4.4.0

## Properties

### depthIdentifier? {#depthidentifier}

> `optional` **depthIdentifier?**: `string` \| [`DepthIdentifier`](../type-aliases/DepthIdentifier.md)

Defined in: [packages/fast-check/src/arbitrary/map.ts:44](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/map.ts#L44)

Depth identifier can be used to share the current depth between several instances.

By default, if not specified, each instance of map will have its own depth.
In other words: you can have depth=1 in one while you have depth=100 in another one.

#### Remarks

Since 4.4.0

***

### maxKeys? {#maxkeys}

> `optional` **maxKeys?**: `number`

Defined in: [packages/fast-check/src/arbitrary/map.ts:30](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/map.ts#L30)

Upper bound for the number of entries defined into the generated instance

#### Default Value

```ts
0x7fffffff
```

#### Remarks

Since 4.4.0

***

### minKeys? {#minkeys}

> `optional` **minKeys?**: `number`

Defined in: [packages/fast-check/src/arbitrary/map.ts:24](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/map.ts#L24)

Lower bound for the number of entries defined into the generated instance

#### Default Value

```ts
0
```

#### Remarks

Since 4.4.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](../type-aliases/SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/map.ts:35](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/map.ts#L35)

Define how large the generated values should be (at max)

#### Remarks

Since 4.4.0
