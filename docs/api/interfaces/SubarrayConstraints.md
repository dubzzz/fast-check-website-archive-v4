# Interface: SubarrayConstraints

> Defined in: [packages/fast-check/src/arbitrary/subarray.ts:9](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/subarray.ts#L9)

Constraints to be applied on [subarray](../functions/subarray.md)

## Remarks

Since 2.4.0

## Properties

### maxLength? {#maxlength}

> `optional` **maxLength?**: `number`

Defined in: [packages/fast-check/src/arbitrary/subarray.ts:21](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/subarray.ts#L21)

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

Defined in: [packages/fast-check/src/arbitrary/subarray.ts:15](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/subarray.ts#L15)

Lower bound of the generated subarray size (included)

#### Default Value

```ts
0
```

#### Remarks

Since 2.4.0
