# Function: double()

> > **double**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

Defined in: [packages/fast-check/src/arbitrary/double.ts:152](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/double.ts#L152)

For 64-bit floating point numbers:
- sign: 1 bit
- significand: 52 bits
- exponent: 11 bits

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`DoubleConstraints`](../interfaces/DoubleConstraints.md) | Constraints to apply when building instances (since 2.8.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

## Remarks

Since 0.0.6
