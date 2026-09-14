# Function: limitShrink()

> > **limitShrink**\<`T`\>(`arbitrary`, `maxShrinks`): [`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/limitShrink.ts:24](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/limitShrink.ts#L24)

Create another Arbitrary with a limited (or capped) number of shrink values

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arbitrary` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Instance of arbitrary responsible to generate and shrink values |
| `maxShrinks` | `number` | Maximal number of shrunk values that can be pulled from the resulting arbitrary |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`T`\>

Create another arbitrary with limited number of shrink values

## Example

```typescript
const dataGenerator: Arbitrary<string> = ...;
const limitedShrinkableDataGenerator: Arbitrary<string> = fc.limitShrink(dataGenerator, 10);
// up to 10 shrunk values could be extracted from the resulting arbitrary
```

NOTE: Although limiting the shrinking capabilities can speed up your CI when failures occur, we do not recommend this approach.
Instead, if you want to reduce the shrinking time for automated jobs or local runs, consider using `endOnFailure` or `interruptAfterTimeLimit`.

## Remarks

Since 3.20.0
