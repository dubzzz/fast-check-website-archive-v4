# Function: asyncModelRun()

> > **asyncModelRun**\<`Model`, `Real`, `CheckAsync`, `InitialModel`\>(`s`, `cmds`): `Promise`\<`void`\>

Defined in: [packages/fast-check/src/check/model/ModelRunner.ts:131](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/model/ModelRunner.ts#L131)

Run asynchronous commands over a `Model` and the `Real` system

Throw in case of inconsistency

## Type Parameters

| Type Parameter |
| ------ |
| `Model` *extends* `object` |
| `Real` |
| `CheckAsync` *extends* `boolean` |
| `InitialModel` *extends* `object` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `s` | [`ModelRunSetup`](../type-aliases/ModelRunSetup.md)\<`InitialModel`, `Real`\> \| [`ModelRunAsyncSetup`](../type-aliases/ModelRunAsyncSetup.md)\<`InitialModel`, `Real`\> | Initial state provider |
| `cmds` | `Iterable`\<[`AsyncCommand`](../interfaces/AsyncCommand.md)\<`Model`, `Real`, `CheckAsync`\>\> | Asynchronous commands to be executed |

## Returns

`Promise`\<`void`\>

## Remarks

Since 1.5.0
