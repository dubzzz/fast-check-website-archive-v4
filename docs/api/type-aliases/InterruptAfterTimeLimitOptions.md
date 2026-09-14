# Type Alias: InterruptAfterTimeLimitOptions

> > **InterruptAfterTimeLimitOptions** = `object`

Defined in: [packages/fast-check/src/check/plugin/InterruptAfterTimeLimitPlugin.ts:63](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/InterruptAfterTimeLimitPlugin.ts#L63)

Options for [interruptAfterTimeLimit](../functions/interruptAfterTimeLimit.md)

## Remarks

Since 4.10.0

## Properties

### failOnInterrupt? {#failoninterrupt}

> `optional` **failOnInterrupt?**: `boolean`

Defined in: [packages/fast-check/src/check/plugin/InterruptAfterTimeLimitPlugin.ts:71](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/InterruptAfterTimeLimitPlugin.ts#L71)

Whether an interruption triggered by this plugin should be reported as a failure.
When set to `true`, a property interrupted before reaching `numRuns` is reported as a failure.

#### Default Value

`false`

#### Remarks

Since 4.10.0
