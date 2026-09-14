# Function: option()

> > **option**\<`T`, `TNil`\>(`arb`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`T` \| `TNil`\>

Defined in: [packages/fast-check/src/arbitrary/option.ts:60](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/option.ts#L60)

For either nil or a value coming from `arb` with custom frequency

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | - |
| `TNil` | `null` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Arbitrary that will be called to generate a non nil value |
| `constraints` | [`OptionConstraints`](../interfaces/OptionConstraints.md)\<`TNil`\> | Constraints on the option(since 1.17.0) |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T` \| `TNil`\>

## Remarks

Since 0.0.6
