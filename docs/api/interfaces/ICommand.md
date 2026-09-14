# Interface: ICommand\<Model, Real, RunResult, CheckAsync\>

> Defined in: [packages/fast-check/src/check/model/command/ICommand.ts:11](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/model/command/ICommand.ts#L11)

Interface that should be implemented in order to define a command

## Remarks

Since 1.5.0

## Extended by

- [`AsyncCommand`](AsyncCommand.md)
- [`Command`](Command.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Model` *extends* `object` | - |
| `Real` | - |
| `RunResult` | - |
| `CheckAsync` *extends* `boolean` | `false` |

## Methods

### check() {#check}

> **check**(`m`): `CheckAsync` *extends* `false` ? `boolean` : `Promise`\<`boolean`\>

Defined in: [packages/fast-check/src/check/model/command/ICommand.ts:21](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/model/command/ICommand.ts#L21)

Check if the model is in the right state to apply the command

WARNING: does not change the model

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `m` | `Readonly`\<`Model`\> | Model, simplified or schematic representation of real system |

#### Returns

`CheckAsync` *extends* `false` ? `boolean` : `Promise`\<`boolean`\>

#### Remarks

Since 1.5.0

***

### run() {#run}

> **run**(`m`, `r`): `RunResult`

Defined in: [packages/fast-check/src/check/model/command/ICommand.ts:33](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/model/command/ICommand.ts#L33)

Receive the non-updated model and the real or system under test.
Perform the checks post-execution - Throw in case of invalid state.
Update the model accordingly

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `m` | `Model` | Model, simplified or schematic representation of real system |
| `r` | `Real` | Sytem under test |

#### Returns

`RunResult`

#### Remarks

Since 1.5.0

***

### toString() {#tostring}

> **toString**(): `string`

Defined in: [packages/fast-check/src/check/model/command/ICommand.ts:39](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/model/command/ICommand.ts#L39)

Name of the command

#### Returns

`string`

#### Remarks

Since 1.5.0
