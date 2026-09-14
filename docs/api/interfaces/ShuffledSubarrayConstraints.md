# Interface: ShuffledSubarrayConstraints

> Defined in: [packages/fast-check/src/arbitrary/shuffledSubarray.ts:9](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/shuffledSubarray.ts#L9)

Constraints to be applied on [shuffledSubarray](../functions/shuffledSubarray.md)

## Remarks

Since 2.18.0

## Properties

### maxLength? {#maxlength}

> `optional` **maxLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/shuffledSubarray.ts:21](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/shuffledSubarray.ts#L21)

Upper bound of the generated subarray size (included)

#### Default Value

```ts
The length of the original array itself
```

#### Remarks

Since 2.4.0

***

### minLength? {#minlength}

> `optional` **minLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/shuffledSubarray.ts:15](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/shuffledSubarray.ts#L15)

Lower bound of the generated subarray size (included)

#### Default Value

```ts
0
```

#### Remarks

Since 2.4.0
