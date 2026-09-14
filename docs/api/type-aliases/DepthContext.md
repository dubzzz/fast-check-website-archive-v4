# Type Alias: DepthContext

> > **DepthContext** = `object`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/DepthContext.ts:28](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/DepthContext.ts#L28)

Instance of depth, can be used to alter the depth perceived by an arbitrary
or to bias your own arbitraries based on the current depth

## Remarks

Since 2.25.0

## Properties

### depth {#depth}

> **depth**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_internals/helpers/DepthContext.ts:38](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/helpers/DepthContext.ts#L38)

Current depth (starts at 0, continues with 1, 2...).
Only made of integer values superior or equal to 0.

Remark: Whenever altering the `depth` during a `generate`, please make sure to ALWAYS
reset it to its original value before you leave the `generate`. Otherwise the execution
will imply side-effects that will potentially impact the following runs and make replay
of the issue barely impossible.
