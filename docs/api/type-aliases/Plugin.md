# Type Alias: Plugin\<Ts\>

> > **Plugin**\<`Ts`\> = (`pluginIndex`, `pluginStore`) => [`PluginInstance`](PluginInstance.md)\<`Ts`\>

Defined in: [packages/fast-check/src/check/plugin/Plugin.ts:94](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/Plugin.ts#L94)

Builder instantiating a plugin.
Each property will instantiate its own plugin when starting to be assessed via [check](../functions/check.md) or [assert](../functions/assert.md).

Parameters received by the Plugin function:
- 1st argument or pluginIndex: Corresponds to the index of the plugin within the run (starts at zero).
  Plugins are instantiated in order. As such, for a given batch expect to see index 0 instantiated first, followed by others.
- 2nd argument or pluginStore: Context parameter shared across all builders.
  The store can be leveraged to exchange insights with other builders.

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `pluginIndex` | `number` |
| `pluginStore` | [`PluginStore`](PluginStore.md) |

## Returns

[`PluginInstance`](PluginInstance.md)\<`Ts`\>

## Remarks

Since 4.10.0
