# Function: timeout()

> > **timeout**(`timeMs`): [`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

Defined in: [packages/fast-check/src/check/plugin/TimeoutPlugin.ts:58](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/TimeoutPlugin.ts#L58)

Mark the execution of a predicate as failed if it exceeds `timeMs` milliseconds to complete.

WARNING: It cannot stop a running predicate.
It mainly returns earlier so the test runner can move forward.

NOTE: It has no effect on a synchronously running predicate.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `timeMs` | `number` | Maximal number of milliseconds granted to an execution of the predicate |

## Returns

[`Plugin`](../type-aliases/Plugin.md)\<`unknown`\>

## Example

```ts
fc.assert(
  fc.asyncProperty(..., async (...) => {...}),
  { plugins: [fc.timeout(1000)] }
)
```

## Remarks

Since 4.10.0
