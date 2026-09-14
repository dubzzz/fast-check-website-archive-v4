# Function: base64String()

> > **base64String**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/base64String.ts:50](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/base64String.ts#L50)

For base64 strings

A base64 string will always have a length multiple of 4 (padded with =)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`StringSharedConstraints`](../interfaces/StringSharedConstraints.md) | Constraints to apply when building instances (since 2.4.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

## Remarks

Since 0.0.1
