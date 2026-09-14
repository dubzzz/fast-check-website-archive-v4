# Function: check()

> > **check**\<`Ts`\>(`property`, `params?`): `Promise`\<[`RunDetails`](../type-aliases/RunDetails.md)\<`Ts`\>\>

## Call Signature

Defined in: [packages/fast-check/src/check/runner/Runner.ts:163](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/Runner.ts#L163)

Run the property, do not throw contrary to [assert](assert.md)

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

`Promise`\<[`RunDetails`](../type-aliases/RunDetails.md)\<`Ts`\>\>

Test status and other useful details

### Remarks

Since 0.0.7

## Call Signature

> **check**\<`Ts`\>(`property`, `params?`): [`RunDetails`](../type-aliases/RunDetails.md)\<`Ts`\>

Defined in: [packages/fast-check/src/check/runner/Runner.ts:175](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/Runner.ts#L175)

Run the property, do not throw contrary to [assert](assert.md)

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

[`RunDetails`](../type-aliases/RunDetails.md)\<`Ts`\>

Test status and other useful details

### Remarks

Since 0.0.1

## Call Signature

> **check**\<`Ts`\>(`property`, `params?`): [`RunDetails`](../type-aliases/RunDetails.md)\<`Ts`\> \| `Promise`\<[`RunDetails`](../type-aliases/RunDetails.md)\<`Ts`\>\>

Defined in: [packages/fast-check/src/check/runner/Runner.ts:189](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/Runner.ts#L189)

Run the property, do not throw contrary to [assert](assert.md)

WARNING: Has to be awaited if the property is asynchronous

### Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `property` | [`IRawProperty`](../interfaces/IRawProperty.md)\<`Ts`\> | Property to be checked |
| `params?` | [`Parameters`](../interfaces/Parameters.md)\<`Ts`\> | Optional parameters to customize the execution |

### Returns

[`RunDetails`](../type-aliases/RunDetails.md)\<`Ts`\> \| `Promise`\<[`RunDetails`](../type-aliases/RunDetails.md)\<`Ts`\>\>

Test status and other useful details

### Remarks

Since 0.0.7
