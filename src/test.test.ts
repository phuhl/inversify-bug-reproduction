import { SomeService } from "src/service";
import { SomeService as RelativeSomeService } from "./service";

it("should resolve same class from same paths", () => {
  expect(SomeService).toBe(SomeService);
  expect(RelativeSomeService).toBe(RelativeSomeService);
});

it("should resolve same class from different paths", () => {
  expect(SomeService).toBe(RelativeSomeService);
});
