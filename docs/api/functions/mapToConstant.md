# Function: mapToConstant()

> > **mapToConstant**\<`T`\>(...`entries`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/mapToConstant.ts:40](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/mapToConstant.ts#L40)

Generate non-contiguous ranges of values
by mapping integer values to constant

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| ...`entries` | `object`[] |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

## Example

```
// generate alphanumeric values (a-z0-9)
mapToConstant(
  { num: 26, build: v => String.fromCharCode(v + 0x61) },
  { num: 10, build: v => String.fromCharCode(v + 0x30) },
)
```

## Remarks

Since 1.14.0
