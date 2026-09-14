# Function: asyncDefaultReportMessage()

> > **asyncDefaultReportMessage**\<`Ts`\>(`out`): `Promise`\<`undefined`\>

## Call Signature

Defined in: [packages/fast-check/src/check/runner/utils/RunDetailsFormatter.ts:233](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/utils/RunDetailsFormatter.ts#L233)

Format output of [check](check.md) using the default error reporting of [assert](assert.md)

Produce a string containing the formated error in case of failed run,
undefined otherwise.

### Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `out` | [`RunDetails`](../type-aliases/RunDetails.md)\<`Ts`\> & `object` |

### Returns

`Promise`\<`undefined`\>

### Remarks

Since 2.17.0

## Call Signature

> **asyncDefaultReportMessage**\<`Ts`\>(`out`): `Promise`\<`string`\>

Defined in: [packages/fast-check/src/check/runner/utils/RunDetailsFormatter.ts:243](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/utils/RunDetailsFormatter.ts#L243)

Format output of [check](check.md) using the default error reporting of [assert](assert.md)

Produce a string containing the formated error in case of failed run,
undefined otherwise.

### Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `out` | [`RunDetails`](../type-aliases/RunDetails.md)\<`Ts`\> & `object` |

### Returns

`Promise`\<`string`\>

### Remarks

Since 2.17.0

## Call Signature

> **asyncDefaultReportMessage**\<`Ts`\>(`out`): `Promise`\<`string` \| `undefined`\>

Defined in: [packages/fast-check/src/check/runner/utils/RunDetailsFormatter.ts:253](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/utils/RunDetailsFormatter.ts#L253)

Format output of [check](check.md) using the default error reporting of [assert](assert.md)

Produce a string containing the formated error in case of failed run,
undefined otherwise.

### Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `out` | [`RunDetails`](../type-aliases/RunDetails.md)\<`Ts`\> |

### Returns

`Promise`\<`string` \| `undefined`\>

### Remarks

Since 2.17.0
