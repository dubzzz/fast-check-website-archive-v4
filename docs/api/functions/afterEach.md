# Function: afterEach()

> > **afterEach**(`fn`): [`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

Defined in: [packages/fast-check/src/check/plugin/LifeCyclePlugins.ts:234](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/LifeCyclePlugins.ts#L234)

Register a callback to be called after each run of your predicate.
If the function returns a promise, we wait until the promise resolves before running anything else.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `fn` | `AfterEachHook` | Hook to be executed after each execution of the predicate |

## Returns

[`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

## Example

```ts
fc.assert(
  fc.property(..., (...) => {...}),
  { plugins: [fc.afterEach(() => {...})] }
)
```

## Remarks

Since 4.10.0
