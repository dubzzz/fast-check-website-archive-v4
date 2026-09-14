# Type Alias: EntityGraphRelations\<TEntityFields\>

> > **EntityGraphRelations**\<`TEntityFields`\> = `{ [TEntityName in keyof TEntityFields]: { [TField in string]: Relationship<keyof TEntityFields> } }`

Defined in: [packages/fast-check/src/arbitrary/\_internals/interfaces/EntityGraphTypes.ts:165](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/interfaces/EntityGraphTypes.ts#L165)

Defines all relationships between entity types for [entityGraph](../functions/entityGraph.md).

This is the second argument to [entityGraph](../functions/entityGraph.md) and specifies how entities reference each other.
Each entity type can have zero or more relationship fields, where each field defines a link
to other entities.

## Type Parameters

| Type Parameter |
| ------ |
| `TEntityFields` |

## Example

```typescript
{
  employee: {
    manager: { arity: '0-1', type: 'employee' },
    team: { arity: '1', type: 'team' }
  },
  team: {}
}
```

## Remarks

Since 4.5.0
