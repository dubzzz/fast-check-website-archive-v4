# Function: gen()

> > **gen**(): [`Arbitrary`](../classes/Arbitrary.md)\<[`GeneratorValue`](../type-aliases/GeneratorValue.md)\>

Defined in: [packages/fast-check/src/arbitrary/gen.ts:40](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/gen.ts#L40)

Generate values within the test execution itself by leveraging the strength of `gen`

## Returns

[`Arbitrary`](../classes/Arbitrary.md)\<[`GeneratorValue`](../type-aliases/GeneratorValue.md)\>

## Example

```javascript
fc.assert(
  fc.property(fc.gen(), gen => {
    const size = gen(fc.nat, {max: 10});
    const array = [];
    for (let index = 0 ; index !== size ; ++index) {
      array.push(gen(fc.integer));
    }
    // Here is an array!
    // Note: Prefer fc.array(fc.integer(), {maxLength: 10}) if you want to produce such array
  })
)
```

⚠️ WARNING:
While `gen` is easy to use, it may not shrink as well as tailored arbitraries based on `filter` or `map`.

⚠️ WARNING:
Additionally it cannot run back the test properly when attempting to replay based on a seed and a path.
You'll need to limit yourself to the seed and drop the path from the options if you attempt to replay something
implying it.  More precisely, you may keep the very first part of the path but have to drop anything after the
first ":".

⚠️ WARNING:
It also does not support custom examples.

## Remarks

Since 3.8.0
