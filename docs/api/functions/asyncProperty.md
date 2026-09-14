# Function: asyncProperty()

> > **asyncProperty**\<`Ts`\>(...`args`): [`IAsyncPropertyWithHooks`](../interfaces/IAsyncPropertyWithHooks.md)\<`Ts`\>

Defined in: [packages/fast-check/src/check/property/AsyncProperty.ts:15](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/AsyncProperty.ts#L15)

Instantiate a new fast-check#IAsyncProperty

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` *extends* \[`unknown`, `...unknown[]`\] |

## Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[...arbitraries: \{ \[K in string \| number \| symbol\]: Arbitrary\<Ts\[K\]\> \}\[\], (...`args`) => `Promise`\<`boolean` \| `void`\>\] |

## Returns

[`IAsyncPropertyWithHooks`](../interfaces/IAsyncPropertyWithHooks.md)\<`Ts`\>

## Remarks

Since 0.0.7
