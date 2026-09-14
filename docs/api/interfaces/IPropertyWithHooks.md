# Interface: IPropertyWithHooks\<Ts\>

> Defined in: [packages/fast-check/src/check/property/Property.generic.ts:38](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/Property.generic.ts#L38)

Interface for synchronous property defining hooks, see [IProperty](IProperty.md)

## Remarks

Since 2.2.0

## Extends

- [`IProperty`](IProperty.md)\<`Ts`\>

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

## Properties

### runAfterEach {#runaftereach}

> **runAfterEach**: () => `void`

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:81](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L81)

Run after each hook

#### Returns

`void`

#### Remarks

Since 3.4.0

#### Inherited from

[`IProperty`](IProperty.md).[`runAfterEach`](IProperty.md#runaftereach)

***

### runBeforeEach {#runbeforeeach}

> **runBeforeEach**: () => `void`

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:75](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L75)

Run before each hook

#### Returns

`void`

#### Remarks

Since 3.4.0

#### Inherited from

[`IProperty`](IProperty.md).[`runBeforeEach`](IProperty.md#runbeforeeach)

## Methods

### ~~afterEach()~~ {#aftereach}

#### Call Signature

> **afterEach**(`invalidHookFunction`): `"afterEach expects a synchronous function but was given a function returning a Promise"`

Defined in: [packages/fast-check/src/check/property/Property.generic.ts:63](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/Property.generic.ts#L63)

Define a function that should be called after all calls to the predicate

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `invalidHookFunction` | (`hookFunction`) => `Promise`\<`unknown`\> | Function to be called, please provide a valid hook function |

##### Returns

`"afterEach expects a synchronous function but was given a function returning a Promise"`

##### Deprecated

Prefer the life-cycle plugins: `fc.assert(property, { plugins: [fc.afterEach(fn)] })`

##### Remarks

Since 1.6.0

#### Call Signature

> **afterEach**(`hookFunction`): `IPropertyWithHooks`\<`Ts`\>

Defined in: [packages/fast-check/src/check/property/Property.generic.ts:72](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/Property.generic.ts#L72)

Define a function that should be called after all calls to the predicate

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hookFunction` | [`PropertyHookFunction`](../type-aliases/PropertyHookFunction.md) | Function to be called |

##### Returns

`IPropertyWithHooks`\<`Ts`\>

##### Deprecated

Prefer the life-cycle plugins: `fc.assert(property, { plugins: [fc.afterEach(fn)] })`

##### Remarks

Since 1.6.0

***

### ~~beforeEach()~~ {#beforeeach}

#### Call Signature

> **beforeEach**(`invalidHookFunction`): `"beforeEach expects a synchronous function but was given a function returning a Promise"`

Defined in: [packages/fast-check/src/check/property/Property.generic.ts:45](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/Property.generic.ts#L45)

Define a function that should be called before all calls to the predicate

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `invalidHookFunction` | (`hookFunction`) => `Promise`\<`unknown`\> | Function to be called, please provide a valid hook function |

##### Returns

`"beforeEach expects a synchronous function but was given a function returning a Promise"`

##### Deprecated

Prefer the life-cycle plugins: `fc.assert(property, { plugins: [fc.beforeEach(fn)] })`

##### Remarks

Since 1.6.0

#### Call Signature

> **beforeEach**(`hookFunction`): `IPropertyWithHooks`\<`Ts`\>

Defined in: [packages/fast-check/src/check/property/Property.generic.ts:55](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/Property.generic.ts#L55)

Define a function that should be called before all calls to the predicate

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hookFunction` | [`PropertyHookFunction`](../type-aliases/PropertyHookFunction.md) | Function to be called |

##### Returns

`IPropertyWithHooks`\<`Ts`\>

##### Deprecated

Prefer the life-cycle plugins: `fc.assert(property, { plugins: [fc.beforeEach(fn)] })`

##### Remarks

Since 1.6.0

***

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

[`IProperty`](IProperty.md).[`generate`](IProperty.md#generate)

***

### isAsync() {#isasync}

> **isAsync**(): `false`

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:39](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L39)

Is the property asynchronous?

true in case of asynchronous property, false otherwise

#### Returns

`false`

#### Remarks

Since 0.0.7

#### Inherited from

[`IProperty`](IProperty.md).[`isAsync`](IProperty.md#isasync)

***

### run() {#run}

> **run**(`v`): [`PreconditionFailure`](../classes/PreconditionFailure.md) \| [`PropertyFailure`](../type-aliases/PropertyFailure.md) \| `null`

Defined in: [packages/fast-check/src/check/property/IRawProperty.ts:65](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/IRawProperty.ts#L65)

Check the predicate for v

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `Ts` | Value of which we want to check the predicate |

#### Returns

[`PreconditionFailure`](../classes/PreconditionFailure.md) \| [`PropertyFailure`](../type-aliases/PropertyFailure.md) \| `null`

#### Remarks

Since 0.0.7

#### Inherited from

[`IProperty`](IProperty.md).[`run`](IProperty.md#run)

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

[`IProperty`](IProperty.md).[`shrink`](IProperty.md#shrink)
