# Function: date()

> > **date**(`constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`Date`\>

Defined in: [packages/fast-check/src/arbitrary/date.ts:47](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/date.ts#L47)

For date between constraints.min or new Date(-8640000000000000) (included) and constraints.max or new Date(8640000000000000) (included)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `constraints` | [`DateConstraints`](../interfaces/DateConstraints.md) | Constraints to apply when building instances |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`Date`\>

## Remarks

Since 1.17.0
