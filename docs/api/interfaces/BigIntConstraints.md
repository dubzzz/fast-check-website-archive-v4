# Interface: BigIntConstraints

> Defined in: [packages/fast-check/src/arbitrary/bigInt.ts:10](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/bigInt.ts#L10)

Constraints to be applied on [bigInt](../functions/bigInt.md)

## Remarks

Since 2.6.0

## Properties

### max? {#max}

> `optional` **max?**: `bigint`

Defined in: [packages/fast-check/src/arbitrary/bigInt.ts:20](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/bigInt.ts#L20)

Upper bound for the generated bigints (eg.: -2n, 2147483647n, BigInt(Number.MAX_SAFE_INTEGER))

#### Remarks

Since 2.6.0

***

### min? {#min}

> `optional` **min?**: `bigint`

Defined in: [packages/fast-check/src/arbitrary/bigInt.ts:15](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/bigInt.ts#L15)

Lower bound for the generated bigints (eg.: -5n, 0n, BigInt(Number.MIN_SAFE_INTEGER))

#### Remarks

Since 2.6.0
