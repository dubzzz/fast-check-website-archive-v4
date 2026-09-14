# Function: json()

> > **json**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/json.ts:32](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/json.ts#L32)

For any JSON strings

Keys and string values rely on [string](string.md)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`JsonSharedConstraints`](../interfaces/JsonSharedConstraints.md) | Constraints to be applied onto the generated instance (since 2.5.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

## Remarks

Since 0.0.7
