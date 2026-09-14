# Function: entityGraph()

> > **entityGraph**\<`TEntityFields`, `TEntityRelations`\>(`arbitraries`, `relations`, `constraints?`): [`Arbitrary`](../classes/Arbitrary.md)\<[`EntityGraphValue`](../type-aliases/EntityGraphValue.md)\<`TEntityFields`, `TEntityRelations`\>\>

Defined in: [packages/fast-check/src/arbitrary/entityGraph.ts:120](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/entityGraph.ts#L120)

Generates interconnected entities with relationships based on a schema definition.

This arbitrary creates structured data where entities can reference each other through defined
relationships. The generated values automatically include links between entities, making it
ideal for testing graph structures, relational data, or interconnected object models.

The output is an object where each key corresponds to an entity type and the value is an array
of entities of that type. Entities contain both their data fields and relationship links.

## Type Parameters

| Type Parameter |
| ------ |
| `TEntityFields` |
| `TEntityRelations` *extends* [`EntityGraphRelations`](../type-aliases/EntityGraphRelations.md)\<`TEntityFields`\> |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `arbitraries` | [`EntityGraphArbitraries`](../type-aliases/EntityGraphArbitraries.md)\<`TEntityFields`\> | Defines the data fields for each entity type (non-relational properties) |
| `relations` | `TEntityRelations` | Defines how entities reference each other (relational properties) |
| `constraints` | [`EntityGraphConstraints`](../type-aliases/EntityGraphConstraints.md)\<`TEntityFields`\> | Optional configuration to customize generation behavior |

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<[`EntityGraphValue`](../type-aliases/EntityGraphValue.md)\<`TEntityFields`, `TEntityRelations`\>\>

## Examples

```typescript
// Generate a simple directed graph where nodes link to other nodes
fc.entityGraph(
  { node: { id: fc.stringMatching(/^[A-Z][a-z]*$/) } },
  { node: { linkTo: { arity: 'many', type: 'node' } } },
)
// Produces: { node: [{ id: "Abc", linkTo: [<node#1>, <node#0>] }, ...] }
```

```typescript
// Generate employees with managers and teams
fc.entityGraph(
  {
    employee: { name: fc.string() },
    team: { name: fc.string() }
  },
  {
    employee: {
      manager: { arity: '0-1', type: 'employee' },  // Optional manager
      team: { arity: '1', type: 'team' }           // Required team
    },
    team: {}
  }
)
```

## Remarks

Since 4.5.0
