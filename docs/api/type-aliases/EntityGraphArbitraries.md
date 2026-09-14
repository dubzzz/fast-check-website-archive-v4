# Type Alias: EntityGraphArbitraries\<TEntityFields\>

> > **EntityGraphArbitraries**\<`TEntityFields`\> = `{ [TEntityName in keyof TEntityFields]: ArbitraryStructure<TEntityFields[TEntityName]> }`

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/EntityGraphTypes.ts:38](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/EntityGraphTypes.ts#L38)

Defines all entity types and their data fields for [entityGraph](../functions/entityGraph.md).

This is the first argument to [entityGraph](../functions/entityGraph.md) and specifies the non-relational properties
of each entity type. Each key is the name of an entity type and its value defines the
arbitraries for that entity.

## Type Parameters

| Type Parameter |
| ------ |
| `TEntityFields` |

## Example

```typescript
{
  employee: { name: fc.string(), age: fc.nat(100) },
  team: { name: fc.string(), size: fc.nat(50) }
}
```

## Remarks

Since 4.5.0
