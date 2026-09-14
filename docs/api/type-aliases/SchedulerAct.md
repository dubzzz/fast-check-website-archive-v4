# Type Alias: SchedulerAct

> > **SchedulerAct** = (`f`) => `Promise`\<`void`\>

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:16](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L16)

Function responsible to run the passed function and surround it with whatever needed.
The name has been inspired from the `act` function coming with React.

This wrapper function is not supposed to throw. The received function f will never throw.

Wrapping order in the following:

- global act defined on `fc.scheduler` wraps wait level one
- wait act defined on `s.waitX` wraps local one
- local act defined on `s.scheduleX(...)` wraps the trigger function

## Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | () => `Promise`\<`void`\> |

## Returns

`Promise`\<`void`\>

## Remarks

Since 3.9.0
