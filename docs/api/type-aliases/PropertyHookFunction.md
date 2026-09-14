# ~~Type Alias: PropertyHookFunction~~

> > **PropertyHookFunction** = (`globalHookFunction`) => `void`

Defined in: [packages/fast-check/src/check/property/Property.generic.ts:24](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/property/Property.generic.ts#L24)

Type of legal hook function that can be used to call `beforeEach` or `afterEach`
on a [IPropertyWithHooks](../interfaces/IPropertyWithHooks.md)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `globalHookFunction` | [`GlobalPropertyHookFunction`](GlobalPropertyHookFunction.md) |

## Returns

`void`

## Deprecated

Prefer `beforeEach` and/or `afterEach` plugins: `fc.assert(property, { plugins: [fc.beforeEach(fn)] })`

## Remarks

Since 2.2.0
