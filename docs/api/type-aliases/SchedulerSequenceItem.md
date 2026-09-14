# Type Alias: SchedulerSequenceItem\<TMetaData\>

> > **SchedulerSequenceItem**\<`TMetaData`\> = \{ `builder`: () => `Promise`\<`any`\>; `label`: `string`; `metadata?`: `TMetaData`; \} \| (() => `Promise`\<`any`\>)

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/Scheduler.ts:139](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/Scheduler.ts#L139)

Define an item to be passed to `scheduleSequence`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TMetaData` | `unknown` |

## Union Members

### Type Literal

\{ `builder`: () => `Promise`\<`any`\>; `label`: `string`; `metadata?`: `TMetaData`; \}

#### builder

> **builder**: () => `Promise`\<`any`\>

Builder to start the task

##### Returns

`Promise`\<`any`\>

##### Remarks

Since 1.20.0

#### label

> **label**: `string`

Label

##### Remarks

Since 1.20.0

#### metadata?

> `optional` **metadata?**: `TMetaData`

Metadata to be attached into logs

##### Remarks

Since 1.25.0

***

### Function

() => `Promise`\<`any`\>

## Remarks

Since 1.20.0
