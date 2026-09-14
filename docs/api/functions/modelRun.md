# Function: modelRun()

> > **modelRun**\<`Model`, `Real`, `InitialModel`\>(`s`, `cmds`): `void`

Defined in: [packages/fast-check/src/check/model/ModelRunner.ts:113](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/model/ModelRunner.ts#L113)

Run synchronous commands over a `Model` and the `Real` system

Throw in case of inconsistency

## Type Parameters

| Type Parameter |
| ------ |
| `Model` *extends* `object` |
| `Real` |
| `InitialModel` *extends* `object` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `s` | [`ModelRunSetup`](../type-aliases/ModelRunSetup.md)\<`InitialModel`, `Real`\> | Initial state provider |
| `cmds` | `Iterable`\<[`Command`](../interfaces/Command.md)\<`Model`, `Real`\>\> | Synchronous commands to be executed |

## Returns

`void`

## Remarks

Since 1.5.0
