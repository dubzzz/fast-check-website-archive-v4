# Function: uuid()

> > **uuid**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/uuid.ts:56](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/uuid.ts#L56)

For UUID from v1 to v5

According to [RFC 4122](https://tools.ietf.org/html/rfc4122)

No mixed case, only lower case digits (0-9a-f)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `constraints` | [`UuidConstraints`](../interfaces/UuidConstraints.md) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

## Remarks

Since 1.17.0
