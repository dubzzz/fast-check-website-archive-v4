# Function: stringMatching()

> > **stringMatching**(`regex`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

Defined in: [packages/fast-check/src/arbitrary/stringMatching.ts:271](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/stringMatching.ts#L271)

For strings matching the provided regex

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `regex` | `RegExp` | Arbitrary able to generate random strings (possibly multiple characters) |
| `constraints` | [`StringMatchingConstraints`](../type-aliases/StringMatchingConstraints.md) | Constraints to apply when building instances |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`string`\>

## Remarks

Since 3.10.0
