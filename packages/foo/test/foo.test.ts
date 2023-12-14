import { hello } from "foo";
import { expect, test } from "vitest";

test("foo", () => {
  expect(hello).toBe("Hello World!");
})
