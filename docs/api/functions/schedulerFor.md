# Function: schedulerFor()

> > **schedulerFor**\<`TMetaData`\>(`constraints?`): (`_strs`, ...`ordering`) => [`Scheduler`](../interfaces/Scheduler.md)\<`TMetaData`\>

## Call Signature

Defined in: [packages/fast-check/src/arbitrary/scheduler.ts:66](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/scheduler.ts#L66)

For custom scheduler with predefined resolution order

Ordering is defined by using a template string like the one generated in case of failure of a [scheduler](scheduler.md)

It may be something like:

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TMetaData` | `unknown` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `constraints?` | [`SchedulerConstraints`](../interfaces/SchedulerConstraints.md) |

### Returns

(`_strs`, ...`ordering`) => [`Scheduler`](../interfaces/Scheduler.md)\<`TMetaData`\>

### Example

```typescript
fc.schedulerFor()`
  -> [task\${2}] promise pending
  -> [task\${3}] promise pending
  -> [task\${1}] promise pending
`
```

Or more generally:
```typescript
fc.schedulerFor()`
  This scheduler will resolve task ${2} first
  followed by ${3} and only then task ${1}
`
```

WARNING:
Custom scheduler will
neither check that all the referred promises have been scheduled
nor that they resolved with the same status and value.

WARNING:
If one the promises is wrongly defined it will fail - for instance asking to resolve 5 while 5 does not exist.

### Remarks

Since 1.25.0

## Call Signature

> **schedulerFor**\<`TMetaData`\>(`customOrdering`, `constraints?`): [`Scheduler`](../interfaces/Scheduler.md)\<`TMetaData`\>

Defined in: [packages/fast-check/src/arbitrary/scheduler.ts:85](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/scheduler.ts#L85)

For custom scheduler with predefined resolution order

WARNING:
Custom scheduler will not check that all the referred promises have been scheduled.

WARNING:
If one the promises is wrongly defined it will fail - for instance asking to resolve 5 while 5 does not exist.

### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TMetaData` | `unknown` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customOrdering` | `number`[] | Array defining in which order the promises will be resolved. Id of the promises start at 1. 1 means first scheduled promise, 2 second scheduled promise and so on. |
| `constraints?` | [`SchedulerConstraints`](../interfaces/SchedulerConstraints.md) | - |

### Returns

[`Scheduler`](../interfaces/Scheduler.md)\<`TMetaData`\>

### Remarks

Since 1.25.0
