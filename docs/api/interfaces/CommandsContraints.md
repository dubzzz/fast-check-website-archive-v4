# Interface: CommandsContraints

> Defined in: [packages/fast-check/src/check/model/commands/CommandsContraints.ts:8](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/model/commands/CommandsContraints.ts#L8)

Parameters for [commands](../functions/commands.md)

## Remarks

Since 2.2.0

## Properties

### disableReplayLog? {#disablereplaylog}

> `optional` **disableReplayLog?**: `boolean`

Defined in: [packages/fast-check/src/check/model/commands/CommandsContraints.ts:28](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/model/commands/CommandsContraints.ts#L28)

Do not show replayPath in the output

#### Default Value

```ts
false
```

#### Remarks

Since 1.11.0

***

### maxCommands? {#maxcommands}

> `optional` **maxCommands?**: `number`

Defined in: [packages/fast-check/src/check/model/commands/CommandsContraints.ts:17](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/model/commands/CommandsContraints.ts#L17)

Maximal number of commands to generate per run

You probably want to use `size` instead.

#### Default Value

0x7fffffff — _defaulting seen as "max non specified" when `defaultSizeToMaxWhenMaxSpecified=true`_

#### Remarks

Since 1.11.0

***

### replayPath? {#replaypath}

> `optional` **replayPath?**: `string`

Defined in: [packages/fast-check/src/check/model/commands/CommandsContraints.ts:36](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/model/commands/CommandsContraints.ts#L36)

Hint for replay purposes only

Should be used in conjonction with `{ seed, path }` of [assert](../functions/assert.md)

#### Remarks

Since 1.11.0

***

### size? {#size}

> `optional` **size?**: [`SizeForArbitrary`](../type-aliases/SizeForArbitrary.md)

Defined in: [packages/fast-check/src/check/model/commands/CommandsContraints.ts:22](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/model/commands/CommandsContraints.ts#L22)

Define how large the generated values (number of commands) should be (at max)

#### Remarks

Since 2.22.0
