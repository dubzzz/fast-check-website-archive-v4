# Type Alias: PluginInstance\<Ts\>

> > **PluginInstance**\<`Ts`\> = `object`

Defined in: [packages/fast-check/src/check/plugin/Plugin.ts:36](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/Plugin.ts#L36)

Runtime part of a plugin.

The runtime part is made of the hooks called by the runner.
Hooks will be called when relevant for the runner.

All the hooks are optional.

## Remarks

Since 4.10.0

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

## Properties

### afterAll? {#afterall}

> `optional` **afterAll?**: () => `Promise`\<`void`\> \| `void`

Defined in: [packages/fast-check/src/check/plugin/Plugin.ts:78](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/Plugin.ts#L78)

Called once at the end of the full property assessment, after all other methods of the plugin.
Use it to clean up and release resources acquired by the plugin.

Every `afterAll` is guaranteed to run, even if an `onAllRunsComplete` or another `afterAll` threw.
In case several `onAllRunsComplete` or `afterAll` throw, only the first failure is reported, the others will be swallowed.

WARNING: Always return synchronously for synchronous properties.

#### Returns

`Promise`\<`void`\> \| `void`

#### Remarks

Since 4.10.0

***

### decorateGenerate? {#decorategenerate}

> `optional` **decorateGenerate?**: (`nestedGenerate`) => [`IRawProperty`](../interfaces/IRawProperty.md)\<`Ts`, `boolean`\>\[`"generate"`\]

Defined in: [packages/fast-check/src/check/plugin/Plugin.ts:42](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/Plugin.ts#L42)

Surcharge the original `generate` coming with the property with extra capabilities.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nestedGenerate` | [`IRawProperty`](../interfaces/IRawProperty.md)\<`Ts`, `boolean`\>\[`"generate"`\] |

#### Returns

[`IRawProperty`](../interfaces/IRawProperty.md)\<`Ts`, `boolean`\>\[`"generate"`\]

#### Remarks

Since 4.10.0

***

### decorateRun? {#decoraterun}

> `optional` **decorateRun?**: (`nestedRun`) => [`IRawProperty`](../interfaces/IRawProperty.md)\<`Ts`, `boolean`\>\[`"run"`\]

Defined in: [packages/fast-check/src/check/plugin/Plugin.ts:53](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/Plugin.ts#L53)

Enrich the execution of the predicate linked to the property with extra behaviors.
Called once per execution of the predicate.

WARNING: `nestedRun` never throws and neither should the function returned by `decorateRun`.
WARNING: If run returns synchronously, the decorated function must too.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `nestedRun` | [`IRawProperty`](../interfaces/IRawProperty.md)\<`Ts`, `boolean`\>\[`"run"`\] |

#### Returns

[`IRawProperty`](../interfaces/IRawProperty.md)\<`Ts`, `boolean`\>\[`"run"`\]

#### Remarks

Since 4.10.0

***

### onAllRunsComplete? {#onallrunscomplete}

> `optional` **onAllRunsComplete?**: (`runDetails`) => `Promise`\<`void`\> \| `void`

Defined in: [packages/fast-check/src/check/plugin/Plugin.ts:66](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/plugin/Plugin.ts#L66)

Called once at the end of the full property assessment, with the result of the execution.

Throwing allows you to override the default error reporting provided by [assert](../functions/assert.md).

Every `onAllRunsComplete` is guaranteed to run, even if another `onAllRunsComplete` threw.
In case several of them throw, only the first failure is reported, the others will be swallowed.

WARNING: Always return synchronously for synchronous properties.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `runDetails` | [`RunDetails`](RunDetails.md)\<`Ts`\> |

#### Returns

`Promise`\<`void`\> \| `void`

#### Remarks

Since 4.10.0
