# Function: unbiased()

> > **unbiased**(): [`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

Defined in: [packages/fast-check/src/check/plugin/UnbiasedPlugin.ts:18](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/UnbiasedPlugin.ts#L18)

Forces values passed to the predicate to be generated without bias.
By default, arbitraries tasked to generate biased values.

## Returns

[`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

## Example

```ts
fc.assert(
  fc.property(..., (...) => {...}),
  { plugins: [fc.unbiased()] }
)
```

## Remarks

Since 4.10.0
