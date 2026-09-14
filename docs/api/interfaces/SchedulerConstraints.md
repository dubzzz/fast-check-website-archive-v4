# Interface: SchedulerConstraints

> Defined in: [packages/fast-check/src/arbitrary/scheduler.ts:12](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/scheduler.ts#L12)

Constraints to be applied on [scheduler](../functions/scheduler.md)

## Remarks

Since 2.2.0

## Properties

### act {#act}

> **act**: (`f`) => `Promise`\<`unknown`\>

Defined in: [packages/fast-check/src/arbitrary/scheduler.ts:17](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/scheduler.ts#L17)

Ensure that all scheduled tasks will be executed in the right context (for instance it can be the `act` of React)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `f` | () => `Promise`\<`void`\> |

#### Returns

`Promise`\<`unknown`\>

#### Remarks

Since 1.21.0
