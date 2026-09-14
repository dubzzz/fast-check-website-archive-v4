# Function: assert()

> > **assert**\<`Ts`\>(`property`, `params?`): `Promise`\<`void`\>

## Call Signature

Defined in: [packages/fast-check/src/check/runner/Runner.ts:281](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/Runner.ts#L281)

Run the property, throw in case of failure

It can be called directly from describe/it blocks of Mocha.
No meaningful results are produced in case of success.

WARNING: Has to be awaited

### Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `property` | [`IAsyncProperty`](../interfaces/IAsyncProperty.md)\<`Ts`\> | Asynchronous property to be checked |
| `params?` | [`Parameters`](../interfaces/Parameters.md)\<`Ts`\> | Optional parameters to customize the execution |

### Returns

`Promise`\<`void`\>

### Remarks

Since 0.0.7

## Call Signature

> **assert**\<`Ts`\>(`property`, `params?`): `void`

Defined in: [packages/fast-check/src/check/runner/Runner.ts:294](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/Runner.ts#L294)

Run the property, throw in case of failure

It can be called directly from describe/it blocks of Mocha.
No meaningful results are produced in case of success.

### Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `property` | [`IProperty`](../interfaces/IProperty.md)\<`Ts`\> | Synchronous property to be checked |
| `params?` | [`Parameters`](../interfaces/Parameters.md)\<`Ts`\> | Optional parameters to customize the execution |

### Returns

`void`

### Remarks

Since 0.0.1

## Call Signature

> **assert**\<`Ts`\>(`property`, `params?`): `void` \| `Promise`\<`void`\>

Defined in: [packages/fast-check/src/check/runner/Runner.ts:309](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/Runner.ts#L309)

Run the property, throw in case of failure

It can be called directly from describe/it blocks of Mocha.
No meaningful results are produced in case of success.

WARNING: Returns a promise to be awaited if the property is asynchronous

### Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `property` | [`IRawProperty`](../interfaces/IRawProperty.md)\<`Ts`\> | Synchronous or asynchronous property to be checked |
| `params?` | [`Parameters`](../interfaces/Parameters.md)\<`Ts`\> | Optional parameters to customize the execution |

### Returns

`void` \| `Promise`\<`void`\>

### Remarks

Since 0.0.7
