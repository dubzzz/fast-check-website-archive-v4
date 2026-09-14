# Function: commands()

> > **commands**\<`Model`, `Real`, `CheckAsync`\>(`commandArbs`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`Iterable`\<[`AsyncCommand`](../interfaces/AsyncCommand.md)\<`Model`, `Real`, `CheckAsync`\>, `any`, `any`\>\>

## Call Signature

Defined in: [packages/fast-check/src/arbitrary/commands.ts:24](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/commands.ts#L24)

For arrays of [AsyncCommand](../interfaces/AsyncCommand.md) to be executed by [asyncModelRun](asyncModelRun.md)

This implementation comes with a shrinker adapted for commands.
It should shrink more efficiently than [array](array.md) for [AsyncCommand](../interfaces/AsyncCommand.md) arrays.

### Type Parameters

| Type Parameter |
| ------ |
| `Model` *extends* `object` |
| `Real` |
| `CheckAsync` *extends* `boolean` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandArbs` | [`Arbitrary`](../classes/Arbitrary.md)\<[`AsyncCommand`](../interfaces/AsyncCommand.md)\<`Model`, `Real`, `CheckAsync`\>\>[] | Arbitraries responsible to build commands |
| `constraints?` | [`CommandsContraints`](../interfaces/CommandsContraints.md) | Constraints to be applied when generating the commands (since 1.11.0) |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`Iterable`\<[`AsyncCommand`](../interfaces/AsyncCommand.md)\<`Model`, `Real`, `CheckAsync`\>, `any`, `any`\>\>

### Remarks

Since 1.5.0

## Call Signature

> **commands**\<`Model`, `Real`\>(`commandArbs`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`Iterable`\<[`Command`](../interfaces/Command.md)\<`Model`, `Real`\>, `any`, `any`\>\>

Defined in: [packages/fast-check/src/arbitrary/commands.ts:40](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/commands.ts#L40)

For arrays of [Command](../interfaces/Command.md) to be executed by [modelRun](modelRun.md)

This implementation comes with a shrinker adapted for commands.
It should shrink more efficiently than [array](array.md) for [Command](../interfaces/Command.md) arrays.

### Type Parameters

| Type Parameter |
| ------ |
| `Model` *extends* `object` |
| `Real` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandArbs` | [`Arbitrary`](../classes/Arbitrary.md)\<[`Command`](../interfaces/Command.md)\<`Model`, `Real`\>\>[] | Arbitraries responsible to build commands |
| `constraints?` | [`CommandsContraints`](../interfaces/CommandsContraints.md) | Constraints to be applied when generating the commands (since 1.11.0) |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`Iterable`\<[`Command`](../interfaces/Command.md)\<`Model`, `Real`\>, `any`, `any`\>\>

### Remarks

Since 1.5.0
