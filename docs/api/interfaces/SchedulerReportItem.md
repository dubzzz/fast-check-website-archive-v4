# Interface: SchedulerReportItem\<TMetaData\>

> Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:164](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L164)

Describe a task for the report produced by the scheduler

## Remarks

Since 1.25.0

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TMetaData` | `unknown` |

## Properties

### label {#label}

> **label**: `string`

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:192](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L192)

Label of the task

#### Remarks

Since 1.25.0

***

### metadata? {#metadata}

> `optional` **metadata?**: `TMetaData`

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:197](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L197)

Metadata linked when scheduling the task

#### Remarks

Since 1.25.0

***

### outputValue? {#outputvalue}

> `optional` **outputValue?**: `string`

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:202](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L202)

Stringified version of the output or error computed using fc.stringify

#### Remarks

Since 1.25.0

***

### schedulingType {#schedulingtype}

> **schedulingType**: `"function"` \| `"promise"` \| `"sequence"`

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:182](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L182)

How was this task scheduled?
- promise: schedule
- function: scheduleFunction
- sequence: scheduleSequence

#### Remarks

Since 1.25.0

***

### status {#status}

> **status**: `"resolved"` \| `"rejected"` \| `"pending"`

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:173](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L173)

Execution status for this task
- resolved: task released by the scheduler and successful
- rejected: task released by the scheduler but with errors
- pending:  task still pending in the scheduler, not released yet

#### Remarks

Since 1.25.0

***

### taskId {#taskid}

> **taskId**: `number`

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:187](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L187)

Incremental id for the task, first received task has taskId = 1

#### Remarks

Since 1.25.0
