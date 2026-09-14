# Type Alias: PluginStore

> > **PluginStore** = `object`

Defined in: [packages/fast-check/src/check/plugin/Plugin.ts:11](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/Plugin.ts#L11)

Storage shared by all the plugins instantiated for one call to [check](../functions/check.md) or [assert](../functions/assert.md).
Use it to cooperate across plugins.

## Remarks

Since 4.10.0

## Properties

### get {#get}

> **get**: \<`T`\>(`key`) => `T` \| `undefined`

Defined in: [packages/fast-check/src/check/plugin/Plugin.ts:17](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/Plugin.ts#L17)

Read the value registered for `key`, if any.  
WARNING: `T` is declared by the caller, never checked by the store.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `symbol` |

#### Returns

`T` \| `undefined`

#### Remarks

Since 4.10.0

***

### set {#set}

> **set**: \<`T`\>(`key`, `value`) => `void`

Defined in: [packages/fast-check/src/check/plugin/Plugin.ts:22](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/Plugin.ts#L22)

Register `value` for `key`, replacing any previous value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `symbol` |
| `value` | `T` |

#### Returns

`void`

#### Remarks

Since 4.10.0
