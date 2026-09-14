# Function: dictionary()

> > **dictionary**\<`T`\>(`keyArb`, `valueArb`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`Record`\<`string`, `T`\>\>

## Call Signature

Defined in: [packages/fast-check/src/arbitrary/dictionary.ts:67](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/dictionary.ts#L67)

For dictionaries with keys produced by `keyArb` and values from `valueArb`

### Type Parameters

| Type Parameter |
| ------ |
| `T` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyArb` | [`Arbitrary`](../classes/Arbitrary.md)\<`string`\> | Arbitrary used to generate the keys of the object |
| `valueArb` | [`Arbitrary`](../classes/Arbitrary.md)\<`T`\> | Arbitrary used to generate the values of the object |
| `constraints?` | [`DictionaryConstraints`](../interfaces/DictionaryConstraints.md) | - |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`Record`\<`string`, `T`\>\>

### Remarks

Since 1.0.0

## Call Signature

> **dictionary**\<`K`, `V`\>(`keyArb`, `valueArb`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<`Record`\<`K`, `V`\>\>

Defined in: [packages/fast-check/src/arbitrary/dictionary.ts:81](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/dictionary.ts#L81)

For dictionaries with keys produced by `keyArb` and values from `valueArb`

### Type Parameters

| Type Parameter |
| ------ |
| `K` *extends* `PropertyKey` |
| `V` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyArb` | [`Arbitrary`](../classes/Arbitrary.md)\<`K`\> | Arbitrary used to generate the keys of the object |
| `valueArb` | [`Arbitrary`](../classes/Arbitrary.md)\<`V`\> | Arbitrary used to generate the values of the object |
| `constraints?` | [`DictionaryConstraints`](../interfaces/DictionaryConstraints.md) | - |

### Returns

[`Arbitrary`](../classes/Arbitrary.md)\<`Record`\<`K`, `V`\>\>

### Remarks

Since 4.4.0
