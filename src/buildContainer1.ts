import { Container } from "inversify";
import { DisposalService } from "./service";

export const buildContainer1 = () => {
  const container: Container = new Container();

  container.bind(DisposalService).toConstantValue(new DisposalService());

  return container;
};
