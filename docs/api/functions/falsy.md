# Function: falsy()

> > **falsy**\<`TConstraints`\>(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<[`FalsyValue`](../type-aliases/FalsyValue.md)\<`TConstraints`\>\>

Defined in: [packages/fast-check/src/arbitrary/falsy.ts:41](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/falsy.ts#L41)

For falsy values:
- ''
- 0
- NaN
- false
- null
- undefined
- 0n (whenever withBigInt: true)

## Type Parameters

| Type Parameter |
| ------ |
| `TConstraints` *extends* [`FalsyContraints`](../interfaces/FalsyContraints.md) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints?` | `TConstraints` | Constraints to apply when building instances |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<[`FalsyValue`](../type-aliases/FalsyValue.md)\<`TConstraints`\>\>

## Remarks

Since 1.26.0
