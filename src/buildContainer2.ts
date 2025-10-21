import { Container } from "inversify";
import { DisposalService } from "src/service";

export const buildContainer2 = () => {
  const container: Container = new Container();

  container.bind(DisposalService).toConstantValue(new DisposalService());

  return container;
};
