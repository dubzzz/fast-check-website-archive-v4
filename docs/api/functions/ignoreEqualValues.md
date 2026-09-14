# Function: ignoreEqualValues()

> > **ignoreEqualValues**(): [`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

Defined in: [packages/fast-check/src/check/plugin/EqualValuesPlugins.ts:63](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/EqualValuesPlugins.ts#L63)

Never execute the predicate twice on the same value and replay the outcome of the first execution instead.
Discarded runs still count as runs.

Close to [skipEqualValues](skipEqualValues.md) except we replay the output of the first passing, meaning the replay counts as a run.

WARNING: Detecting equal values is based on stringifying them. It may result in false positives and false negatives.

## Returns

[`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

## Example

```ts
fc.assert(
  fc.property(..., (...) => {...}),
  { plugins: [fc.ignoreEqualValues()] }
)
```

## Remarks

Since 4.10.0
