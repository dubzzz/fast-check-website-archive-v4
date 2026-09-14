# Function: configureGlobal()

> > **configureGlobal**(`parameters`): `void`

Defined in: [packages/fast-check/src/check/runner/configuration/GlobalParameters.ts:118](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/configuration/GlobalParameters.ts#L118)

Define global parameters that will be used by all the runners

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parameters` | [`GlobalParameters`](../type-aliases/GlobalParameters.md) | Global parameters |

## Returns

`void`

## Example

```typescript
fc.configureGlobal({ numRuns: 10 });
//...
fc.assert(
  fc.property(
    fc.nat(), fc.nat(),
    (a, b) => a + b === b + a
  ), { seed: 42 }
) // equivalent to { numRuns: 10, seed: 42 }
```

## Remarks

Since 1.18.0
