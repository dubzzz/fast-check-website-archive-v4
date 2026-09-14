# Type Alias: StringMatchingConstraints

> > **StringMatchingConstraints** = `object`

Defined in: [packages/fast-check/src/arbitrary/stringMatching.ts:34](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/stringMatching.ts#L34)

Constraints to be applied on the arbitrary [stringMatching](../functions/stringMatching.md)

## Remarks

Since 3.10.0

## Properties

### maxLength? {#maxlength}

> `optional` **maxLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/stringMatching.ts:40](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/stringMatching.ts#L40)

Upper bound of the generated string length (included)

#### Default Value

```ts
0x7fffffff
```

#### Remarks

Since 4.6.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](SizeForArbitrary.md)

Defined in: [packages/fast-check/src/arbitrary/stringMatching.ts:45](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/stringMatching.ts#L45)

Define how large the generated values should be (at max)

#### Remarks

Since 3.10.0
