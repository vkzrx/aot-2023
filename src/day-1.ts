import type { Expect, Equal } from "./utils";

// https://typehero.dev/challenge/day-1

type SantasFavoriteCookies = "ginger-bread" | "chocolate-chip";

type test_0_actual = SantasFavoriteCookies;
type test_0_expected = "ginger-bread" | "chocolate-chip";
type test_0 = Expect<Equal<test_0_actual, test_0_expected>>;
