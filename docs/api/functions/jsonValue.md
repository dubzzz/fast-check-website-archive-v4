# Function: jsonValue()

> > **jsonValue**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<[`JsonValue`](../type-aliases/JsonValue.md)\>

Defined in: [packages/fast-check/src/arbitrary/jsonValue.ts:22](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/jsonValue.ts#L22)

For any JSON compliant values

Keys and string values rely on [string](string.md)

As `JSON.parse` preserves `-0`, `jsonValue` can also have `-0` as a value.
`jsonValue` must be seen as: any value that could have been built by doing a `JSON.parse` on a given string.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`JsonSharedConstraints`](../interfaces/JsonSharedConstraints.md) | Constraints to be applied onto the generated instance |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<[`JsonValue`](../type-aliases/JsonValue.md)\>

## Remarks

Since 2.20.0
