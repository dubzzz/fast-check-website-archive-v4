# Type Alias: RunDetails\<Ts\>

> > **RunDetails**\<`Ts`\> = [`RunDetailsFailureProperty`](../interfaces/RunDetailsFailureProperty.md)\<`Ts`\> \| [`RunDetailsFailureTooManySkips`](../interfaces/RunDetailsFailureTooManySkips.md)\<`Ts`\> \| [`RunDetailsFailureInterrupted`](../interfaces/RunDetailsFailureInterrupted.md)\<`Ts`\> \| [`RunDetailsSuccess`](../interfaces/RunDetailsSuccess.md)\<`Ts`\>

Defined in: [packages/fast-check/src/check/runner/reporter/RunDetails.ts:13](https://github.com/dubzzz/fast-check/blob/c3cd4eb5c42e40bc26a1b74d277eefb0b2c0a74c/packages/fast-check/src/check/runner/reporter/RunDetails.ts#L13)

Post-run details produced by [check](../functions/check.md)

A failing property can easily detected by checking the `failed` flag of this structure

## Type Parameters

| Type Parameter |
| ------ |
| `Ts` |

## Remarks

Since 0.0.7
