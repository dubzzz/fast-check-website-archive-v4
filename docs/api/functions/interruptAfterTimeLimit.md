# Function: interruptAfterTimeLimit()

> > **interruptAfterTimeLimit**(`timeLimitMs`, `options?`): [`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

Defined in: [packages/fast-check/src/check/plugin/InterruptAfterTimeLimitPlugin.ts:97](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/InterruptAfterTimeLimitPlugin.ts#L97)

Interrupt test execution after a given time limit.

NOTE: Useful to avoid having too long running processes in your CI while preserving replay capabilities if needed.

WARNING: A test interrupted before any failure counts as a success, even if it did not
reach `numRuns` runs, unless `failOnInterrupt` is set to `true`.

As predicates cannot be stopped, the underlying execution keeps running but its outcome gets ignored.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeLimitMs` | `number` | Delay in milliseconds after which runs gets interrupted |
| `options` | [`InterruptAfterTimeLimitOptions`](../type-aliases/InterruptAfterTimeLimitOptions.md) | - |

## Returns

[`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

## Example

```ts
fc.assert(
  fc.asyncProperty(..., async (...) => {...}),
  { plugins: [fc.interruptAfterTimeLimit(1000)] }
)
```

## Remarks

Since 4.10.0
