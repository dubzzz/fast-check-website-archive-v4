# Function: subarray()

> > **subarray**\<`T`\>(`originalArray`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

Defined in: [packages/fast-check/src/arbitrary/subarray.ts:33](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/subarray.ts#L33)

For subarrays of `originalArray` (keeps ordering)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `originalArray` | `T`[] | Original array |
| `constraints` | [`SubarrayConstraints`](../interfaces/SubarrayConstraints.md) | Constraints to apply when building instances (since 2.4.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`[]\>

## Remarks

Since 1.5.0
