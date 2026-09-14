# Function: property()

> > **property**\<`Ts`\>(...`args`): [`IPropertyWithHooks`](../interfaces/IPropertyWithHooks.md)\<`Ts`\>

Defined in: [packages/fast-check/src/check/property/Property.ts:15](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/Property.ts#L15)

Instantiate a new fast-check#IProperty

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` *extends* \[`unknown`, `...unknown[]`\] |

## Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | \[...arbitraries: \{ \[K in string \| number \| symbol\]: Arbitrary\<Ts\[K\]\> \}\[\], (...`args`) => `boolean` \| `void`\] |

## Returns

[`IPropertyWithHooks`](../interfaces/IPropertyWithHooks.md)\<`Ts`\>

## Remarks

Since 0.0.1
