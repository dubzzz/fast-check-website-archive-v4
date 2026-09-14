# Interface: IAsyncProperty\<Ts\>

> Defined in: [packages/fast-check/src/check/property/AsyncProperty.generic.ts:33](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/AsyncProperty.generic.ts#L33)

Interface for asynchronous property, see [IRawProperty](IRawProperty.md)

## Remarks

Since 1.19.0

## Extends

- [`IRawProperty`](IRawProperty.md)\<`Ts`, `true`\>

## Extended by

- [`IAsyncPropertyWithHooks`](IAsyncPropertyWithHooks.md)

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

## Properties

### runAfterEach {#runaftereach}

> **runAfterEach**: () => `Promise`\<`void`\>

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:81](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L81)

Run after each hook

#### Returns

`Promise`\<`void`\>

#### Remarks

Since 3.4.0

#### Inherited from

[`IRawProperty`](IRawProperty.md).[`runAfterEach`](IRawProperty.md#runaftereach)

***

### runBeforeEach {#runbeforeeach}

> **runBeforeEach**: () => `Promise`\<`void`\>

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:75](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L75)

Run before each hook

#### Returns

`Promise`\<`void`\>

#### Remarks

Since 3.4.0

#### Inherited from

[`IRawProperty`](IRawProperty.md).[`runBeforeEach`](IRawProperty.md#runbeforeeach)

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

#### Inherited from

[`IRawProperty`](IRawProperty.md).[`generate`](IRawProperty.md#generate)

***

### isAsync() {#isasync}

> **isAsync**(): `true`

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:39](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L39)

Is the property asynchronous?

true in case of asynchronous property, false otherwise

#### Returns

`true`

#### Remarks

Since 0.0.7

#### Inherited from

[`IRawProperty`](IRawProperty.md).[`isAsync`](IRawProperty.md#isasync-1)

***

### run() {#run}

> **run**(`v`): `Promise`\<[`PreconditionFailure`](../classes/PreconditionFailure.md) \| [`PropertyFailure`](../type-aliases/PropertyFailure.md) \| `null`\>

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:65](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L65)

Check the predicate for v

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Ts` | Value of which we want to check the predicate |

#### Returns

`Promise`\<[`PreconditionFailure`](../classes/PreconditionFailure.md) \| [`PropertyFailure`](../type-aliases/PropertyFailure.md) \| `null`\>

#### Remarks

Since 0.0.7

#### Inherited from

[`IRawProperty`](IRawProperty.md).[`run`](IRawProperty.md#run)

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

#### Inherited from

[`IRawProperty`](IRawProperty.md).[`shrink`](IRawProperty.md#shrink)
