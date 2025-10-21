import { buildContainer1 } from "./buildContainer1";
import { buildContainer2 } from "./buildContainer2";
import { DisposalService } from "src/service";

it("fails", () => {
  const container = buildContainer1();
  container.get(DisposalService);
});

it("works", () => {
  const container = buildContainer2();
  container.get(DisposalService);
});
