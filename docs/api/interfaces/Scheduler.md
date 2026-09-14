# Interface: Scheduler\<TMetaData\>

> Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:23](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L23)

Instance able to reschedule the ordering of promises for a given app

## Remarks

Since 1.20.0

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TMetaData` | `unknown` |

## Properties

### report {#report}

> **report**: () => [`SchedulerReportItem`](SchedulerReportItem.md)\<`TMetaData`\>[]

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:131](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L131)

Produce an array containing all the scheduled tasks so far with their execution status.
If the task has been executed, it includes a string representation of the associated output or error produced by the task if any.

Tasks will be returned in the order they get executed by the scheduler.

#### Returns

[`SchedulerReportItem`](SchedulerReportItem.md)\<`TMetaData`\>[]

#### Remarks

Since 1.25.0

***

### schedule {#schedule}

> **schedule**: \<`T`\>(`task`, `label?`, `metadata?`, `customAct?`) => `Promise`\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:28](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L28)

Wrap a new task using the Scheduler

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `task` | `Promise`\<`T`\> |
| `label?` | `string` |
| `metadata?` | `TMetaData` |
| `customAct?` | [`SchedulerAct`](../type-aliases/SchedulerAct.md) |

#### Returns

`Promise`\<`T`\>

#### Remarks

Since 1.20.0

***

### scheduleFunction {#schedulefunction}

> **scheduleFunction**: \<`TArgs`, `T`\>(`asyncFunction`, `customAct?`) => (...`args`) => `Promise`\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:34](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L34)

Automatically wrap function output using the Scheduler

#### Type Parameters

| Type Parameter |
| ------ |
| `TArgs` *extends* `any`[] |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `asyncFunction` | (...`args`) => `Promise`\<`T`\> |
| `customAct?` | [`SchedulerAct`](../type-aliases/SchedulerAct.md) |

#### Returns

(...`args`) => `Promise`\<`T`\>

#### Remarks

Since 1.20.0

***

### ~~waitAll~~ {#waitall}

> **waitAll**: (`customAct?`) => `Promise`\<`void`\>

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:82](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L82)

Wait all scheduled tasks,
including the ones that might be created by one of the resolved task

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `customAct?` | [`SchedulerAct`](../type-aliases/SchedulerAct.md) |

#### Returns

`Promise`\<`void`\>

#### Remarks

Since 1.20.0

#### Deprecated

Use `waitIdle()` instead, it comes with a more predictable behavior awaiting all scheduled and reachable tasks to be completed

***

### waitFor {#waitfor}

> **waitFor**: \<`T`\>(`unscheduledTask`, `customAct?`) => `Promise`\<`T`\>

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:121](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L121)

Wait as many scheduled tasks as need to resolve the received Promise

Some tests frameworks like `supertest` are not triggering calls to subsequent queries in a synchronous way,
some are waiting an explicit call to `then` to trigger them (either synchronously or asynchronously)...
As a consequence, none of `waitOne` or `waitAll` cannot wait for them out-of-the-box.

This helper is responsible to wait as many scheduled tasks as needed (but the bare minimal) to get
`unscheduledTask` resolved. Once resolved it returns its output either success or failure.

Be aware that while this helper will wait eveything to be ready for `unscheduledTask` to resolve,
having uncontrolled tasks triggering stuff required for `unscheduledTask` might be a source a uncontrollable
and not reproducible randomness as those triggers cannot be handled and scheduled by fast-check.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `unscheduledTask` | `Promise`\<`T`\> |
| `customAct?` | [`SchedulerAct`](../type-aliases/SchedulerAct.md) |

#### Returns

`Promise`\<`T`\>

#### Remarks

Since 2.24.0

***

### waitIdle {#waitidle}

> **waitIdle**: (`customAct?`) => `Promise`\<`void`\>

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:103](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L103)

Wait until the scheduler becomes idle: all scheduled and reachable tasks have completed.

It will include tasks scheduled by other tasks, recursively.

Note: Tasks triggered by uncontrolled sources (like `fetch` or external events) cannot be detected
or awaited and may lead to incomplete waits.

If you want to wait for a precise event to happen you should rather opt for `waitFor` or `waitNext`
given they offer you a more granular control on what you are exactly waiting for.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `customAct?` | [`SchedulerAct`](../type-aliases/SchedulerAct.md) |

#### Returns

`Promise`\<`void`\>

#### Remarks

Since 4.2.0

***

### waitNext {#waitnext}

> **waitNext**: (`count`, `customAct?`) => `Promise`\<`void`\>

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:88](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L88)

Wait and schedule exactly `count` scheduled tasks.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `count` | `number` |
| `customAct?` | [`SchedulerAct`](../type-aliases/SchedulerAct.md) |

#### Returns

`Promise`\<`void`\>

#### Remarks

Since 4.2.0

***

### ~~waitOne~~ {#waitone}

> **waitOne**: (`customAct?`) => `Promise`\<`void`\>

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:74](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L74)

Wait one scheduled task to be executed

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `customAct?` | [`SchedulerAct`](../type-aliases/SchedulerAct.md) |

#### Returns

`Promise`\<`void`\>

#### Throws

Whenever there is no task scheduled

#### Remarks

Since 1.20.0

#### Deprecated

Use `waitNext(1)` instead, it comes with a more predictable behavior

## Methods

### count() {#count}

> **count**(): `number`

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:66](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L66)

Count of pending scheduled tasks

#### Returns

`number`

#### Remarks

Since 1.20.0

***

### scheduleSequence() {#schedulesequence}

> **scheduleSequence**(`sequenceBuilders`, `customAct?`): `object`

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:53](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L53)

Schedule a sequence of Promise to be executed sequencially.
Items within the sequence might be interleaved by other scheduled operations.

Please note that whenever an item from the sequence has started,
the scheduler will wait until its end before moving to another scheduled task.

A handle is returned by the function in order to monitor the state of the sequence.
Sequence will be marked:
- done if all the promises have been executed properly
- faulty if one of the promises within the sequence throws

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sequenceBuilders` | [`SchedulerSequenceItem`](../type-aliases/SchedulerSequenceItem.md)\<`TMetaData`\>[] |
| `customAct?` | [`SchedulerAct`](../type-aliases/SchedulerAct.md) |

#### Returns

`object`

##### done

> **done**: `boolean`

##### faulty

> **faulty**: `boolean`

##### task

> **task**: `Promise`\<\{ `done`: `boolean`; `faulty`: `boolean`; \}\>

#### Remarks

Since 1.20.0
