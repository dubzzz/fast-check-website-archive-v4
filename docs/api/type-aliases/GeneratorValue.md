# Type Alias: GeneratorValue

> > **GeneratorValue** = `GeneratorValueFunction` & `GeneratorValueMethods`

Defined in: [packages/fast-check/src/arbitrary/\_internals/builders/GeneratorValueBuilder.ts:45](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/arbitrary/_internals/builders/GeneratorValueBuilder.ts#L45)

An instance of GeneratorValue can be leveraged within predicates themselves to produce extra random values
while preserving part of the shrinking capabilities on the produced values.

It can be seen as a way to start property based testing within something looking closer from what users will
think about when thinking about random in tests. But contrary to raw random, it comes with many useful strengths
such as: ability to re-run the test (seeded), shrinking...

## Remarks

Since 3.8.0
