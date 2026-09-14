# Function: sample()

> > **sample**\<`Ts`\>(`generator`, `params?`): `Ts`[]

Defined in: [packages/fast-check/src/check/runner/Sampler.ts:62](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/Sampler.ts#L62)

Generate an array containing all the values that would have been generated during [assert](assert.md) or [check](check.md)

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `generator` | [`IRawProperty`](../interfaces/IRawProperty.md)\<`Ts`, `boolean`\> \| [`Arbitrary`](../classes/Arbitrary.md)\<`Ts`\> | [IProperty](../interfaces/IProperty.md) or [Arbitrary](../classes/Arbitrary.md) to extract the values from |
| `params?` | `number` \| [`Parameters`](../interfaces/Parameters.md)\<`Ts`\> | Integer representing the number of values to generate or `Parameters` as in [assert](assert.md) |

## Returns

`Ts`[]

## Example

```typescript
fc.sample(fc.nat(), 10); // extract 10 values from fc.nat() Arbitrary
fc.sample(fc.nat(), {seed: 42}); // extract values from fc.nat() as if we were running fc.assert with seed=42
```

## Remarks

Since 0.0.6
