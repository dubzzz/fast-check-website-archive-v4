# Function: skipEqualValues()

> > **skipEqualValues**(): [`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

Defined in: [packages/fast-check/src/check/plugin/EqualValuesPlugins.ts:93](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/EqualValuesPlugins.ts#L93)

Never execute the predicate twice on the same value.

A duplicated run whose first execution succeeded is marked as skipped instead of successful.
If too many runs get skipped the run will be marked as failed.

Close to [ignoreEqualValues](ignoreEqualValues.md) except we skip runs having the same value.

WARNING: Detecting equal values is based on stringifying them. It may result in false positives and false negatives.

## Returns

[`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

## Example

```ts
fc.assert(
  fc.property(..., (...) => {...}),
  { plugins: [fc.skipEqualValues()] }
)
```

## Remarks

Since 4.10.0
