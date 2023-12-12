import type { Expect, Equal } from "./utils";

// https://typehero.dev/challenge/day-11

type Arr<
  T extends ReadonlyArray<any>,
  Acc extends ReadonlyArray<unknown> = [],
> = T["length"] extends Acc["length"]
  ? Acc
  : Arr<T, readonly [...Acc, SantaListProtector<T[Acc["length"]]>]>;

type SantaListProtector<T extends Record<string, unknown>> = {
  readonly [K in keyof T]: T[K] extends Record<string, unknown>
    ? SantaListProtector<T[K]>
    : T[K] extends Array<unknown>
      ? Arr<T[K]>
      : T[K];
};

type test_0_actual = SantaListProtector<{
  //   ^?
  hacksore: () => "naughty";
  trash: string;
  elliot: {
    penny: boolean;
    candace: {
      address: {
        street: {
          name: "candy cane way";
          num: number;
        };
        k: "hello";
      };
      children: [
        "harry",
        {
          saying: ["hey"];
        },
      ];
    };
  };
}>;
type test_0_expected = {
  readonly hacksore: () => "naughty";
  readonly trash: string;
  readonly elliot: {
    readonly penny: boolean;
    readonly candace: {
      readonly address: {
        readonly street: {
          readonly name: "candy cane way";
          readonly num: number;
        };
        readonly k: "hello";
      };
      readonly children: readonly [
        "harry",
        {
          readonly saying: readonly ["hey"];
        },
      ];
    };
  };
};
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = SantaListProtector<{
  //   ^?
  theo: () => "naughty";
  prime: string;
  netflix: {
    isChill: boolean;
  };
}>;
type test_1_expected = {
  readonly theo: () => "naughty";
  readonly prime: string;
  readonly netflix: {
    readonly isChill: boolean;
  };
};
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;
