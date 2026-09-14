# Function: shuffledSubarray()

> > **shuffledSubarray**\<`T`\>(`originalArray`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

Defined in: [packages/fast-check/src/arbitrary/shuffledSubarray.ts:33](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/shuffledSubarray.ts#L33)

For subarrays of `originalArray`

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `originalArray` | `T`[] | Original array |
| `constraints` | [`ShuffledSubarrayConstraints`](../interfaces/ShuffledSubarrayConstraints.md) | Constraints to apply when building instances (since 2.4.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

## Remarks

Since 1.5.0
