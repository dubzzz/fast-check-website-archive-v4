# Interface: MixedCaseConstraints

> Defined in: [packages/fast-check/src/arbitrary/mixedCase.ts:10](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/mixedCase.ts#L10)

Constraints to be applied on [mixedCase](../functions/mixedCase.md)

## Remarks

Since 1.17.0

## Properties

### toggleCase? {#togglecase}

> `optional` **toggleCase?**: (`rawChar`) => `string`

Defined in: [packages/fast-check/src/arbitrary/mixedCase.ts:16](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/mixedCase.ts#L16)

Transform a character to its upper and/or lower case version

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rawChar` | `string` |

#### Returns

`string`

#### Default Value

try `toUpperCase` on the received code-point, if no effect try `toLowerCase`

#### Remarks

Since 1.17.0

***

### untoggleAll? {#untoggleall}

> `optional` **untoggleAll?**: (`toggledString`) => `string`

Defined in: [packages/fast-check/src/arbitrary/mixedCase.ts:22](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/mixedCase.ts#L22)

In order to be fully reversable (only in case you want to shrink user definable values)
you should provide a function taking a string containing possibly toggled items and returning its
untoggled version.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggledString` | `string` |

#### Returns

`string`
