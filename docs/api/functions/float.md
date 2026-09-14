# Function: float()

> > **float**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

Defined in: [packages/fast-check/src/arbitrary/float.ts:154](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/float.ts#L154)

For 32-bit floating point numbers:
- sign: 1 bit
- significand: 23 bits
- exponent: 8 bits

The smallest non-zero value (in absolute value) that can be represented by such float is: 2 ** -126 * 2 ** -23.
And the largest one is: 2 ** 127 * (1 + (2 ** 23 - 1) / 2 ** 23).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`FloatConstraints`](../interfaces/FloatConstraints.md) | Constraints to apply when building instances (since 2.8.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`number`\>

## Remarks

Since 0.0.6
