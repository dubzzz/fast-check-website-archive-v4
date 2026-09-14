# Interface: IRawProperty\<Ts, IsAsync\>

> Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:32](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L32)

Property

A property is the combination of:
- Arbitraries: how to generate the inputs for the algorithm
- Predicate: how to confirm the algorithm succeeded?

## Remarks

Since 1.19.0

## Extended by

- [`IProperty`](IProperty.md)
- [`IAsyncProperty`](IAsyncProperty.md)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Ts` | - |
| `IsAsync` *extends* `boolean` | `boolean` |

## Properties

### runAfterEach {#runaftereach}

> **runAfterEach**: () => `IsAsync` *extends* `true` ? `Promise`\<`void`\> : `never` \| `IsAsync` *extends* `false` ? `void` : `never`

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:81](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L81)

Run after each hook

#### Returns

`IsAsync` *extends* `true` ? `Promise`\<`void`\> : `never` \| `IsAsync` *extends* `false` ? `void` : `never`

#### Remarks

Since 3.4.0

***

### runBeforeEach {#runbeforeeach}

> **runBeforeEach**: () => `IsAsync` *extends* `true` ? `Promise`\<`void`\> : `never` \| `IsAsync` *extends* `false` ? `void` : `never`

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:75](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L75)

Run before each hook

#### Returns

`IsAsync` *extends* `true` ? `Promise`\<`void`\> : `never` \| `IsAsync` *extends* `false` ? `void` : `never`

#### Remarks

Since 3.4.0

## Methods

### generate() {#generate}

> **generate**(`mrng`, `runId?`): [`Value`](../classes/Value.md)\<`Ts`\>

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:49](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L49)

Generate values of type Ts

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mrng` | [`Random`](../classes/Random.md) | Random number generator |
| `runId?` | `number` | Id of the generation, starting at 0 - if set the generation might be biased |

#### Returns

[`Value`](../classes/Value.md)\<`Ts`\>

#### Remarks

Since 0.0.7 (return type changed in 3.0.0)

***

### isAsync() {#isasync-1}

> **isAsync**(): `IsAsync`

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:39](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L39)

Is the property asynchronous?

true in case of asynchronous property, false otherwise

#### Returns

`IsAsync`

#### Remarks

Since 0.0.7

***

### run() {#run}

> **run**(`v`): `IsAsync` *extends* `true` ? `Promise`\<[`PreconditionFailure`](../classes/PreconditionFailure.md) \| [`PropertyFailure`](../type-aliases/PropertyFailure.md) \| `null`\> : `never` \| `IsAsync` *extends* `false` ? [`PreconditionFailure`](../classes/PreconditionFailure.md) \| [`PropertyFailure`](../type-aliases/PropertyFailure.md) \| `null` : `never`

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:65](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L65)

Check the predicate for v

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Ts` | Value of which we want to check the predicate |

#### Returns

`IsAsync` *extends* `true` ? `Promise`\<[`PreconditionFailure`](../classes/PreconditionFailure.md) \| [`PropertyFailure`](../type-aliases/PropertyFailure.md) \| `null`\> : `never` \| `IsAsync` *extends* `false` ? [`PreconditionFailure`](../classes/PreconditionFailure.md) \| [`PropertyFailure`](../type-aliases/PropertyFailure.md) \| `null` : `never`

#### Remarks

Since 0.0.7

***

### shrink() {#shrink}

> **shrink**(`value`): [`Stream`](../classes/Stream.md)\<[`Value`](../classes/Value.md)\<`Ts`\>\>

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:58](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L58)

Shrink value of type Ts

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | [`Value`](../classes/Value.md)\<`Ts`\> | The value to be shrunk, it can be context-less |

#### Returns

[`Stream`](../classes/Stream.md)\<[`Value`](../classes/Value.md)\<`Ts`\>\>

#### Remarks

Since 3.0.0
