import { Result } from "../../common.ts";

export interface UsecaseParameter {
  moduleKey: string;
  usecaseKey: string;
}

export interface Usecase {
  run(usecaseKey?: string): Promise<Result>;
}

export type Initializer = (usecaseKey?: string) => Usecase;

export async function loadUsecase(
  moduleKey: string,
  usecaseKey?: string,
): Promise<Usecase> {
  const module = await import("./" + moduleKey + ".ts");
  const initialize: Initializer = module.initialize;
  return initialize(usecaseKey);
}
