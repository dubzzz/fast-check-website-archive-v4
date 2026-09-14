# Type Alias: EntityGraphConstraints\<TEntityFields\>

> > **EntityGraphConstraints**\<`TEntityFields`\> = `object`

Defined in: [packages/fast-check/src/arbitrary/entityGraph.ts:20](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/entityGraph.ts#L20)

Constraints to be applied on [entityGraph](../functions/entityGraph.md)

## Remarks

Since 4.5.0

## Type Parameters

| Type Parameter |
| ------ |
| `TEntityFields` |

## Properties

### initialPoolConstraints? {#initialpoolconstraints}

> `optional` **initialPoolConstraints?**: `{ [EntityName in keyof TEntityFields]?: ArrayConstraints }`

Defined in: [packages/fast-check/src/arbitrary/entityGraph.ts:37](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/entityGraph.ts#L37)

Controls the minimum number of entities generated for each entity type in the initial pool.

The initial pool defines the baseline set of entities that are created before any relationships
are established. Other entities may be created later to satisfy relationship requirements.

#### Example

```typescript
// Ensure at least 2 employees and at most 5 teams in the initial pool
// But possibly more than 5 teams at the end
{ initialPoolConstraints: { employee: { minLength: 2 }, team: { maxLength: 5 } } }
```

#### Default Value

When unspecified, defaults from [array](../functions/array.md) are used for each entity type

#### Remarks

Since 4.5.0

***

### noNullPrototype? {#nonullprototype}

> `optional` **noNullPrototype?**: `boolean`

Defined in: [packages/fast-check/src/arbitrary/entityGraph.ts:64](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/entityGraph.ts#L64)

Do not generate values with null prototype

#### Default Value

```ts
false
```

#### Remarks

Since 4.5.0

***

### unicityConstraints? {#unicityconstraints}

> `optional` **unicityConstraints?**: `{ [EntityName in keyof TEntityFields]?: UniqueArrayConstraintsRecommended<TEntityFields[EntityName], unknown>["selector"] }`

Defined in: [packages/fast-check/src/arbitrary/entityGraph.ts:53](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/entityGraph.ts#L53)

Defines uniqueness criteria for entities of each type to prevent duplicate values.

The selector function extracts a key from each entity. Entities with identical keys
(compared using `Object.is`) are considered duplicates and only one instance will be kept.

#### Example

```typescript
// Ensure employees have unique names
{ unicityConstraints: { employee: (emp) => emp.name } }
```

#### Default Value

```ts
All entities are considered unique (no deduplication is performed)
```

#### Remarks

Since 4.5.0
