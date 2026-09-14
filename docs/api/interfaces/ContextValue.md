# Interface: ContextValue

> Defined in: [packages/fast-check/src/arbitrary/context.ts:10](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/context.ts#L10)

Execution context attached to one predicate run

## Remarks

Since 2.2.0

## Methods

### log() {#log}

> **log**(`data`): `void`

Defined in: [packages/fast-check/src/arbitrary/context.ts:17](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/context.ts#L17)

Log execution details during a test.
Very helpful when troubleshooting failures

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `string` | Data to be logged into the current context |

#### Returns

`void`

#### Remarks

Since 1.8.0

***

### size() {#size}

> **size**(): `number`

Defined in: [packages/fast-check/src/arbitrary/context.ts:22](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/context.ts#L22)

Number of logs already logged into current context

#### Returns

`number`

#### Remarks

Since 1.8.0
