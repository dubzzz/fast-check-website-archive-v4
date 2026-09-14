# API Reference

> | Enumeration | Description |
> | ------ | ------ |
> | [ExecutionStatus](enumerations/ExecutionStatus.md) | Status of the execution of the property |
> | [VerbosityLevel](enumerations/VerbosityLevel.md) | Verbosity level |

## Enumerations

## Classes

| Class | Description |
| ------ | ------ |
| [Arbitrary](classes/Arbitrary.md) | Abstract class able to generate values on type `T` |
| [PreconditionFailure](classes/PreconditionFailure.md) | Error type produced whenever a precondition fails |
| [Random](classes/Random.md) | Wrapper around an instance of a `pure-rand`'s random number generator offering a simpler interface to deal with random with impure patterns |
| [Stream](classes/Stream.md) | Wrapper around `IterableIterator` interface offering a set of helpers to deal with iterations in a simple way |
| [Value](classes/Value.md) | A `Value<T, TShrink = T>` holds an internal value of type `T` and its associated context |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [ArrayConstraints](interfaces/ArrayConstraints.md) | Constraints to be applied on [array](functions/array.md) |
| [AsyncCommand](interfaces/AsyncCommand.md) | Interface that should be implemented in order to define an asynchronous command |
| [BigIntConstraints](interfaces/BigIntConstraints.md) | Constraints to be applied on [bigInt](functions/bigInt.md) |
| [Command](interfaces/Command.md) | Interface that should be implemented in order to define a synchronous command |
| [CommandsContraints](interfaces/CommandsContraints.md) | Parameters for [commands](functions/commands.md) |
| [ContextValue](interfaces/ContextValue.md) | Execution context attached to one predicate run |
| [DateConstraints](interfaces/DateConstraints.md) | Constraints to be applied on [date](functions/date.md) |
| [DictionaryConstraints](interfaces/DictionaryConstraints.md) | Constraints to be applied on [dictionary](functions/dictionary.md) |
| [DomainConstraints](interfaces/DomainConstraints.md) | Constraints to be applied on [domain](functions/domain.md) |
| [DoubleConstraints](interfaces/DoubleConstraints.md) | Constraints to be applied on [double](functions/double.md) |
| [EmailAddressConstraints](interfaces/EmailAddressConstraints.md) | Constraints to be applied on [emailAddress](functions/emailAddress.md) |
| [ExecutionTree](interfaces/ExecutionTree.md) | Summary of the execution process |
| [FalsyContraints](interfaces/FalsyContraints.md) | Constraints to be applied on [falsy](functions/falsy.md) |
| [FloatConstraints](interfaces/FloatConstraints.md) | Constraints to be applied on [float](functions/float.md) |
| [IAsyncProperty](interfaces/IAsyncProperty.md) | Interface for asynchronous property, see [IRawProperty](interfaces/IRawProperty.md) |
| [IAsyncPropertyWithHooks](interfaces/IAsyncPropertyWithHooks.md) | Interface for asynchronous property defining hooks, see [IAsyncProperty](interfaces/IAsyncProperty.md) |
| [ICommand](interfaces/ICommand.md) | Interface that should be implemented in order to define a command |
| [IntegerConstraints](interfaces/IntegerConstraints.md) | Constraints to be applied on [integer](functions/integer.md) |
| [IProperty](interfaces/IProperty.md) | Interface for synchronous property, see [IRawProperty](interfaces/IRawProperty.md) |
| [IPropertyWithHooks](interfaces/IPropertyWithHooks.md) | Interface for synchronous property defining hooks, see [IProperty](interfaces/IProperty.md) |
| [IRawProperty](interfaces/IRawProperty.md) | Property |
| [JsonSharedConstraints](interfaces/JsonSharedConstraints.md) | Shared constraints for: - [json](functions/json.md), - [jsonValue](functions/jsonValue.md), |
| [LetrecTypedTie](interfaces/LetrecTypedTie.md) | Strongly typed type for the `tie` function passed by [letrec](functions/letrec.md) to the `builder` function we pass to it. You may want also want to use its loosely typed version [LetrecLooselyTypedTie](type-aliases/LetrecLooselyTypedTie.md). |
| [LoremConstraints](interfaces/LoremConstraints.md) | Constraints to be applied on [lorem](functions/lorem.md) |
| [MapConstraints](interfaces/MapConstraints.md) | Constraints to be applied on [map](functions/map.md) |
| [MixedCaseConstraints](interfaces/MixedCaseConstraints.md) | Constraints to be applied on [mixedCase](functions/mixedCase.md) |
| [NatConstraints](interfaces/NatConstraints.md) | Constraints to be applied on [nat](functions/nat.md) |
| [ObjectConstraints](interfaces/ObjectConstraints.md) | Constraints for [anything](functions/anything.md) and [object](functions/object.md) |
| [OptionConstraints](interfaces/OptionConstraints.md) | Constraints to be applied on [option](functions/option.md) |
| [Parameters](interfaces/Parameters.md) | Customization of the parameters used to run the properties |
| [RunDetailsCommon](interfaces/RunDetailsCommon.md) | Shared part between variants of RunDetails |
| [RunDetailsFailureInterrupted](interfaces/RunDetailsFailureInterrupted.md) | Run reported as failed because it took too long and thus has been interrupted |
| [RunDetailsFailureProperty](interfaces/RunDetailsFailureProperty.md) | Run reported as failed because the property failed |
| [RunDetailsFailureTooManySkips](interfaces/RunDetailsFailureTooManySkips.md) | Run reported as failed because too many retries have been attempted to generate valid values |
| [RunDetailsSuccess](interfaces/RunDetailsSuccess.md) | Run reported as success |
| [Scheduler](interfaces/Scheduler.md) | Instance able to reschedule the ordering of promises for a given app |
| [SchedulerConstraints](interfaces/SchedulerConstraints.md) | Constraints to be applied on [scheduler](functions/scheduler.md) |
| [SchedulerReportItem](interfaces/SchedulerReportItem.md) | Describe a task for the report produced by the scheduler |
| [ShuffledSubarrayConstraints](interfaces/ShuffledSubarrayConstraints.md) | Constraints to be applied on [shuffledSubarray](functions/shuffledSubarray.md) |
| [SparseArrayConstraints](interfaces/SparseArrayConstraints.md) | Constraints to be applied on [sparseArray](functions/sparseArray.md) |
| [StringSharedConstraints](interfaces/StringSharedConstraints.md) | Constraints to be applied on arbitraries for strings |
| [SubarrayConstraints](interfaces/SubarrayConstraints.md) | Constraints to be applied on [subarray](functions/subarray.md) |
| [UuidConstraints](interfaces/UuidConstraints.md) | Constraints to be applied on [uuid](functions/uuid.md) |
| [WebAuthorityConstraints](interfaces/WebAuthorityConstraints.md) | Constraints to be applied on [webAuthority](functions/webAuthority.md) |
| [WebFragmentsConstraints](interfaces/WebFragmentsConstraints.md) | Constraints to be applied on [webFragments](functions/webFragments.md) |
| [WebPathConstraints](interfaces/WebPathConstraints.md) | Constraints to be applied on [webPath](functions/webPath.md) |
| [WebQueryParametersConstraints](interfaces/WebQueryParametersConstraints.md) | Constraints to be applied on [webQueryParameters](functions/webQueryParameters.md) |
| [WebSegmentConstraints](interfaces/WebSegmentConstraints.md) | Constraints to be applied on [webSegment](functions/webSegment.md) |
| [WebUrlConstraints](interfaces/WebUrlConstraints.md) | Constraints to be applied on [webUrl](functions/webUrl.md) |
| [WeightedArbitrary](interfaces/WeightedArbitrary.md) | Conjonction of a weight and an arbitrary used by [oneof](functions/oneof.md) in order to generate values |
| [WithCloneMethod](interfaces/WithCloneMethod.md) | Object instance that should be cloned from one generation/shrink to another |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [~~AsyncPropertyHookFunction~~](type-aliases/AsyncPropertyHookFunction.md) | Type of legal hook function that can be used to call `beforeEach` or `afterEach` on a [IAsyncPropertyWithHooks](interfaces/IAsyncPropertyWithHooks.md) |
| [BigIntArrayConstraints](type-aliases/BigIntArrayConstraints.md) | Constraints to be applied on typed arrays for big int values |
| [CloneValue](type-aliases/CloneValue.md) | Type of the value produced by [clone](functions/clone.md) |
| [DepthContext](type-aliases/DepthContext.md) | Instance of depth, can be used to alter the depth perceived by an arbitrary or to bias your own arbitraries based on the current depth |
| [DepthIdentifier](type-aliases/DepthIdentifier.md) | Type used to strongly type instances of depth identifier while keeping internals what they contain internally |
| [DepthSize](type-aliases/DepthSize.md) | Superset of [Size](type-aliases/Size.md) to override the default defined for size. It can either be based on a numeric value manually selected by the user (not recommended) or rely on presets based on size (recommended). |
| [EntityGraphArbitraries](type-aliases/EntityGraphArbitraries.md) | Defines all entity types and their data fields for [entityGraph](functions/entityGraph.md). |
| [EntityGraphConstraints](type-aliases/EntityGraphConstraints.md) | Constraints to be applied on [entityGraph](functions/entityGraph.md) |
| [~~EntityGraphContraints~~](type-aliases/EntityGraphContraints.md) | Constraints to be applied on [entityGraph](functions/entityGraph.md) |
| [EntityGraphRelations](type-aliases/EntityGraphRelations.md) | Defines all relationships between entity types for [entityGraph](functions/entityGraph.md). |
| [EntityGraphValue](type-aliases/EntityGraphValue.md) | Type of the values generated by [entityGraph](functions/entityGraph.md). |
| [FalsyValue](type-aliases/FalsyValue.md) | Typing for values generated by [falsy](functions/falsy.md) |
| [Float32ArrayConstraints](type-aliases/Float32ArrayConstraints.md) | Constraints to be applied on [float32Array](functions/float32Array.md) |
| [Float64ArrayConstraints](type-aliases/Float64ArrayConstraints.md) | Constraints to be applied on [float64Array](functions/float64Array.md) |
| [GeneratorValue](type-aliases/GeneratorValue.md) | An instance of [GeneratorValue](type-aliases/GeneratorValue.md) can be leveraged within predicates themselves to produce extra random values while preserving part of the shrinking capabilities on the produced values. |
| [GlobalAsyncPropertyHookFunction](type-aliases/GlobalAsyncPropertyHookFunction.md) | Type of legal hook function that can be used in the global parameter `asyncBeforeEach` and/or `asyncAfterEach` Prefer `beforeEach` and/or `afterEach` plugins: `fc.assert(property, { plugins: [fc.beforeEach(fn)] })` |
| [GlobalParameters](type-aliases/GlobalParameters.md) | Type describing the global overrides |
| [GlobalPropertyHookFunction](type-aliases/GlobalPropertyHookFunction.md) | Type of legal hook function that can be used in the global parameter `beforeEach` and/or `afterEach` Prefer `beforeEach` and/or `afterEach` plugins: `fc.assert(property, { plugins: [fc.beforeEach(fn)] })` |
| [IntArrayConstraints](type-aliases/IntArrayConstraints.md) | Constraints to be applied on typed arrays for integer values |
| [InterruptAfterTimeLimitOptions](type-aliases/InterruptAfterTimeLimitOptions.md) | Options for [interruptAfterTimeLimit](functions/interruptAfterTimeLimit.md) |
| [JsonValue](type-aliases/JsonValue.md) | Typings for a Json value |
| [LetrecLooselyTypedBuilder](type-aliases/LetrecLooselyTypedBuilder.md) | Loosely typed type for the `builder` function passed to [letrec](functions/letrec.md). You may want also want to use its strongly typed version [LetrecTypedBuilder](type-aliases/LetrecTypedBuilder.md). |
| [LetrecLooselyTypedTie](type-aliases/LetrecLooselyTypedTie.md) | Loosely typed type for the `tie` function passed by [letrec](functions/letrec.md) to the `builder` function we pass to it. You may want also want to use its strongly typed version [LetrecTypedTie](interfaces/LetrecTypedTie.md). |
| [LetrecTypedBuilder](type-aliases/LetrecTypedBuilder.md) | Strongly typed type for the `builder` function passed to [letrec](functions/letrec.md). You may want also want to use its loosely typed version [LetrecLooselyTypedBuilder](type-aliases/LetrecLooselyTypedBuilder.md). |
| [LetrecValue](type-aliases/LetrecValue.md) | Type of the value produced by [letrec](functions/letrec.md) |
| [MaybeWeightedArbitrary](type-aliases/MaybeWeightedArbitrary.md) | Either an `Arbitrary<T>` or a `WeightedArbitrary<T>` |
| [Memo](type-aliases/Memo.md) | Output type for [memo](functions/memo.md) |
| [ModelRunAsyncSetup](type-aliases/ModelRunAsyncSetup.md) | Asynchronous definition of model and real |
| [ModelRunSetup](type-aliases/ModelRunSetup.md) | Synchronous definition of model and real |
| [OneOfConstraints](type-aliases/OneOfConstraints.md) | Constraints to be applied on [oneof](functions/oneof.md) |
| [OneOfValue](type-aliases/OneOfValue.md) | Infer the type of the Arbitrary produced by [oneof](functions/oneof.md) given the type of the source arbitraries |
| [Plugin](type-aliases/Plugin.md) | Builder instantiating a plugin. Each property will instantiate its own plugin when starting to be assessed via [check](functions/check.md) or [assert](functions/assert.md). |
| [PluginInstance](type-aliases/PluginInstance.md) | Runtime part of a plugin. |
| [PluginStore](type-aliases/PluginStore.md) | Storage shared by all the plugins instantiated for one call to [check](functions/check.md) or [assert](functions/assert.md). Use it to cooperate across plugins. |
| [PropertyFailure](type-aliases/PropertyFailure.md) | Represent failures of the property |
| [~~PropertyHookFunction~~](type-aliases/PropertyHookFunction.md) | Type of legal hook function that can be used to call `beforeEach` or `afterEach` on a [IPropertyWithHooks](interfaces/IPropertyWithHooks.md) |
| [RandomGenerator](type-aliases/RandomGenerator.md) | Merged type supporting both pure-rand v7 and v8 random generators. Keeping compatibility with v7 avoids a breaking API change and a new major version. |
| [RandomType](type-aliases/RandomType.md) | Random generators automatically recognized by the framework without having to pass a builder function |
| [RecordConstraints](type-aliases/RecordConstraints.md) | Constraints to be applied on [record](functions/record.md) |
| [RecordValue](type-aliases/RecordValue.md) | Infer the type of the Arbitrary produced by record given the type of the source arbitrary and constraints to be applied |
| [RunDetails](type-aliases/RunDetails.md) | Post-run details produced by [check](functions/check.md) |
| [SchedulerAct](type-aliases/SchedulerAct.md) | Function responsible to run the passed function and surround it with whatever needed. The name has been inspired from the `act` function coming with React. |
| [SchedulerSequenceItem](type-aliases/SchedulerSequenceItem.md) | Define an item to be passed to `scheduleSequence` |
| [SetConstraints](type-aliases/SetConstraints.md) | Constraints to be applied on [set](functions/set.md) |
| [Size](type-aliases/Size.md) | The size parameter defines how large the generated values could be. |
| [SizeForArbitrary](type-aliases/SizeForArbitrary.md) | Superset of [Size](type-aliases/Size.md) to override the default defined for size |
| [StringConstraints](type-aliases/StringConstraints.md) | Constraints to be applied on arbitrary [string](functions/string.md) |
| [StringMatchingConstraints](type-aliases/StringMatchingConstraints.md) | Constraints to be applied on the arbitrary [stringMatching](functions/stringMatching.md) |
| [UniqueArrayConstraints](type-aliases/UniqueArrayConstraints.md) | Constraints implying known and optimized comparison function to be applied on [uniqueArray](functions/uniqueArray.md) |
| [UniqueArrayConstraintsCustomCompare](type-aliases/UniqueArrayConstraintsCustomCompare.md) | Constraints implying a fully custom comparison function to be applied on [uniqueArray](functions/uniqueArray.md) |
| [UniqueArrayConstraintsCustomCompareSelect](type-aliases/UniqueArrayConstraintsCustomCompareSelect.md) | Constraints implying fully custom comparison function and selector to be applied on [uniqueArray](functions/uniqueArray.md) |
| [UniqueArrayConstraintsRecommended](type-aliases/UniqueArrayConstraintsRecommended.md) | Constraints implying known and optimized comparison function to be applied on [uniqueArray](functions/uniqueArray.md) |
| [UniqueArraySharedConstraints](type-aliases/UniqueArraySharedConstraints.md) | Shared constraints to be applied on [uniqueArray](functions/uniqueArray.md) |
| [WithAsyncToStringMethod](type-aliases/WithAsyncToStringMethod.md) | Interface to implement for [asyncToStringMethod](variables/asyncToStringMethod.md) |
| [WithToStringMethod](type-aliases/WithToStringMethod.md) | Interface to implement for [toStringMethod](variables/toStringMethod.md) |

## Variables

| Variable | Description |
| ------ | ------ |
| [\_\_commitHash](variables/commitHash.md) | Commit hash of the current code (eg.: process.env.__COMMIT_HASH__) |
| [\_\_type](variables/type.md) | Type of module (commonjs or module) |
| [\_\_version](variables/version.md) | Version of fast-check used by your project (eg.: process.env.__PACKAGE_VERSION__) |
| [asyncToStringMethod](variables/asyncToStringMethod.md) | Use this symbol to define a custom serializer for your instances. Serializer must be a function returning a promise of string (see [WithAsyncToStringMethod](type-aliases/WithAsyncToStringMethod.md)). |
| [cloneMethod](variables/cloneMethod.md) | Generated instances having a method [cloneMethod] will be automatically cloned whenever necessary |
| [toStringMethod](variables/toStringMethod.md) | Use this symbol to define a custom serializer for your instances. Serializer must be a function returning a string (see [WithToStringMethod](type-aliases/WithToStringMethod.md)). |

## Functions

| Function | Description |
| ------ | ------ |
| [afterEach](functions/afterEach.md) | Register a callback to be called after each run of your predicate. If the function returns a promise, we wait until the promise resolves before running anything else. |
| [anything](functions/anything.md) | For any type of values |
| [array](functions/array.md) | For arrays of values coming from `arb` |
| [assert](functions/assert.md) | Run the property, throw in case of failure |
| [asyncDefaultReportMessage](functions/asyncDefaultReportMessage.md) | Format output of [check](functions/check.md) using the default error reporting of [assert](functions/assert.md) |
| [asyncModelRun](functions/asyncModelRun.md) | Run asynchronous commands over a `Model` and the `Real` system |
| [asyncProperty](functions/asyncProperty.md) | Instantiate a new fast-check#IAsyncProperty |
| [asyncStringify](functions/asyncStringify.md) | Convert any value to its fast-check string representation |
| [base64String](functions/base64String.md) | For base64 strings |
| [beforeEach](functions/beforeEach.md) | Register a callback to be called before each run of your predicate. If the function returns a promise, we wait until the promise resolves before running anything else. |
| [bigInt](functions/bigInt.md) | For bigint |
| [bigInt64Array](functions/bigInt64Array.md) | For BigInt64Array |
| [bigUint64Array](functions/bigUint64Array.md) | For BigUint64Array |
| [boolean](functions/boolean.md) | For boolean values - `true` or `false` |
| [chainUntil](functions/chainUntil.md) | Build an arbitrary by iteratively chaining arbitraries until the chainer returns undefined. |
| [check](functions/check.md) | Run the property, do not throw contrary to [assert](functions/assert.md) |
| [clone](functions/clone.md) | Clone the values generated by `arb` in order to produce fully equal values (might not be equal in terms of === or ==) |
| [cloneIfNeeded](functions/cloneIfNeeded.md) | Clone an instance if needed |
| [commands](functions/commands.md) | For arrays of [AsyncCommand](interfaces/AsyncCommand.md) to be executed by [asyncModelRun](functions/asyncModelRun.md) |
| [compareBooleanFunc](functions/compareBooleanFunc.md) | For comparison boolean functions |
| [compareFunc](functions/compareFunc.md) | For comparison functions |
| [configureGlobal](functions/configureGlobal.md) | Define global parameters that will be used by all the runners |
| [constant](functions/constant.md) | For `value` |
| [constantFrom](functions/constantFrom.md) | For one `...values` values - all equiprobable |
| [context](functions/context.md) | Produce a [ContextValue](interfaces/ContextValue.md) instance |
| [createDepthIdentifier](functions/createDepthIdentifier.md) | Create a new and unique instance of DepthIdentifier that can be shared across multiple arbitraries if needed |
| [date](functions/date.md) | For date between constraints.min or new Date(-8640000000000000) (included) and constraints.max or new Date(8640000000000000) (included) |
| [defaultReportMessage](functions/defaultReportMessage.md) | Format output of [check](functions/check.md) using the default error reporting of [assert](functions/assert.md) |
| [dictionary](functions/dictionary.md) | For dictionaries with keys produced by `keyArb` and values from `valueArb` |
| [domain](functions/domain.md) | For domains having an extension with at least two lowercase characters |
| [double](functions/double.md) | For 64-bit floating point numbers: - sign: 1 bit - significand: 52 bits - exponent: 11 bits |
| [emailAddress](functions/emailAddress.md) | For email address |
| [entityGraph](functions/entityGraph.md) | Generates interconnected entities with relationships based on a schema definition. |
| [falsy](functions/falsy.md) | For falsy values: - '' - 0 - NaN - false - null - undefined - 0n (whenever withBigInt: true) |
| [float](functions/float.md) | For 32-bit floating point numbers: - sign: 1 bit - significand: 23 bits - exponent: 8 bits |
| [float32Array](functions/float32Array.md) | For Float32Array |
| [float64Array](functions/float64Array.md) | For Float64Array |
| [func](functions/func.md) | For pure functions |
| [gen](functions/gen.md) | Generate values within the test execution itself by leveraging the strength of `gen` |
| [getDepthContextFor](functions/getDepthContextFor.md) | Get back the requested DepthContext |
| [hasAsyncToStringMethod](functions/hasAsyncToStringMethod.md) | Check if an instance implements [WithAsyncToStringMethod](type-aliases/WithAsyncToStringMethod.md) |
| [hasCloneMethod](functions/hasCloneMethod.md) | Check if an instance has to be clone |
| [hash](functions/hash.md) | CRC-32 based hash function |
| [hasToStringMethod](functions/hasToStringMethod.md) | Check if an instance implements [WithToStringMethod](type-aliases/WithToStringMethod.md) |
| [ignoreEqualValues](functions/ignoreEqualValues.md) | Never execute the predicate twice on the same value and replay the outcome of the first execution instead. Discarded runs still count as runs. |
| [infiniteStream](functions/infiniteStream.md) | Produce an infinite stream of values |
| [installGlobalPlugin](functions/installGlobalPlugin.md) | Install a plugin to be used by all the runners Installed plugins come before the ones passed via the `plugins` option of the run. |
| [int16Array](functions/int16Array.md) | For Int16Array |
| [int32Array](functions/int32Array.md) | For Int32Array |
| [int8Array](functions/int8Array.md) | For Int8Array |
| [integer](functions/integer.md) | For integers between min (included) and max (included) |
| [interruptAfterTimeLimit](functions/interruptAfterTimeLimit.md) | Interrupt test execution after a given time limit. |
| [ipV4](functions/ipV4.md) | For valid IP v4 |
| [ipV4Extended](functions/ipV4Extended.md) | For valid IP v4 according to WhatWG |
| [ipV6](functions/ipV6.md) | For valid IP v6 |
| [json](functions/json.md) | For any JSON strings |
| [jsonValue](functions/jsonValue.md) | For any JSON compliant values |
| [letrec](functions/letrec.md) | For mutually recursive types |
| [limitShrink](functions/limitShrink.md) | Create another Arbitrary with a limited (or capped) number of shrink values |
| [lorem](functions/lorem.md) | For lorem ipsum string of words or sentences with maximal number of words or sentences |
| [map](functions/map.md) | For Maps with keys produced by `keyArb` and values from `valueArb` |
| [mapToConstant](functions/mapToConstant.md) | Generate non-contiguous ranges of values by mapping integer values to constant |
| [maxSafeInteger](functions/maxSafeInteger.md) | For integers between Number.MIN_SAFE_INTEGER (included) and Number.MAX_SAFE_INTEGER (included) |
| [maxSafeNat](functions/maxSafeNat.md) | For positive integers between 0 (included) and Number.MAX_SAFE_INTEGER (included) |
| [memo](functions/memo.md) | For mutually recursive types |
| [mixedCase](functions/mixedCase.md) | Randomly switch the case of characters generated by `stringArb` (upper/lower) |
| [modelRun](functions/modelRun.md) | Run synchronous commands over a `Model` and the `Real` system |
| [nat](functions/nat.md) | For positive integers between 0 (included) and 2147483647 (included) |
| [noBias](functions/noBias.md) | Build an arbitrary without any bias. |
| [noShrink](functions/noShrink.md) | Build an arbitrary without shrinking capabilities. |
| [object](functions/object.md) | For any objects |
| [oneof](functions/oneof.md) | For one of the values generated by `...arbs` - with all `...arbs` equiprobable |
| [option](functions/option.md) | For either nil or a value coming from `arb` with custom frequency |
| [pre](functions/pre.md) | Add pre-condition checks inside a property execution |
| [property](functions/property.md) | Instantiate a new fast-check#IProperty |
| [readConfigureGlobal](functions/readConfigureGlobal.md) | Read global parameters that will be used by runners |
| [record](functions/record.md) | For records following the `recordModel` schema |
| [resetConfigureGlobal](functions/resetConfigureGlobal.md) | Reset global parameters |
| [sample](functions/sample.md) | Generate an array containing all the values that would have been generated during [assert](functions/assert.md) or [check](functions/check.md) |
| [scheduledModelRun](functions/scheduledModelRun.md) | Run asynchronous and scheduled commands over a `Model` and the `Real` system |
| [scheduler](functions/scheduler.md) | For scheduler of promises |
| [schedulerFor](functions/schedulerFor.md) | For custom scheduler with predefined resolution order |
| [set](functions/set.md) | For sets of values coming from `arb` |
| [shuffledSubarray](functions/shuffledSubarray.md) | For subarrays of `originalArray` |
| [skipEqualValues](functions/skipEqualValues.md) | Never execute the predicate twice on the same value. |
| [sparseArray](functions/sparseArray.md) | For sparse arrays of values coming from `arb` |
| [statistics](functions/statistics.md) | Gather useful statistics concerning generated values |
| [stream](functions/stream.md) | Create a Stream based on `g` |
| [string](functions/string.md) | For strings of char |
| [stringify](functions/stringify.md) | Convert any value to its fast-check string representation |
| [stringMatching](functions/stringMatching.md) | For strings matching the provided regex |
| [subarray](functions/subarray.md) | For subarrays of `originalArray` (keeps ordering) |
| [timeout](functions/timeout.md) | Mark the execution of a predicate as failed if it exceeds `timeMs` milliseconds to complete. |
| [tuple](functions/tuple.md) | For tuples produced using the provided `arbs` |
| [uint16Array](functions/uint16Array.md) | For Uint16Array |
| [uint32Array](functions/uint32Array.md) | For Uint32Array |
| [uint8Array](functions/uint8Array.md) | For Uint8Array |
| [uint8ClampedArray](functions/uint8ClampedArray.md) | For Uint8ClampedArray |
| [ulid](functions/ulid.md) | For ulid |
| [unbiased](functions/unbiased.md) | Forces values passed to the predicate to be generated without bias. By default, arbitraries tasked to generate biased values. |
| [uniqueArray](functions/uniqueArray.md) | For arrays of unique values coming from `arb` |
| [uuid](functions/uuid.md) | For UUID from v1 to v5 |
| [webAuthority](functions/webAuthority.md) | For web authority |
| [webFragments](functions/webFragments.md) | For fragments of an URI (web included) |
| [webPath](functions/webPath.md) | For web path |
| [webQueryParameters](functions/webQueryParameters.md) | For query parameters of an URI (web included) |
| [webSegment](functions/webSegment.md) | For internal segment of an URI (web included) |
| [webUrl](functions/webUrl.md) | For web url |
