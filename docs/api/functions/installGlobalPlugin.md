# Function: installGlobalPlugin()

> > **installGlobalPlugin**(`plugin`): `void`

Defined in: [packages/fast-check/src/check/runner/configuration/GlobalPlugins.ts:26](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/GlobalPlugins.ts#L26)

Install a plugin to be used by all the runners
Installed plugins come before the ones passed via the `plugins` option of the run.

In other words, they are the outermost ones: they are entered first when running the predicate.
Think of: `outer(inner(predicate))`.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `plugin` | [`Plugin`](../type-aliases/Plugin.md)\<`unknown`\> | Plugin to be installed globally |

## Returns

`void`

## Example

```typescript
fc.installGlobalPlugin(myPlugin());
//...
fc.assert(myProp, { plugins: [myOtherPlugin()] })
// equivalent to { plugins: [myPlugin(), myOtherPlugin()] }
// myPlugin will wrap myOtherPlugin, itself wrapping the default behavior
```

## Remarks

Since 4.10.0
