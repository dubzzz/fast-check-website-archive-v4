# Function: hash()

> > **hash**(`repr`): `number`

Defined in: [packages/fast-check/src/utils/hash.ts:46](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/utils/hash.ts#L46)

CRC-32 based hash function

Used internally by fast-check in [func](func.md), [compareFunc](compareFunc.md) or even [compareBooleanFunc](compareBooleanFunc.md).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `repr` | `string` | String value to be hashed |

## Returns

`number`

## Remarks

Since 2.1.0
