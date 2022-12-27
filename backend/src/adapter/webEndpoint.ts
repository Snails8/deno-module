import { HTTPStatusEnum, Result } from "../common.ts";
import { Context } from "../../deps.ts";
import * as ucIF from "../domain/usecase/_usecase.ts";

/**
 * 抽象的な形で実装。目的はendpointの集約を作ること
 * どう振る舞うかは、usecaseKeyを使用してusecase以降で考える
 */
export class WebEndpoint {
  private endpointKey: string;
  constructor (key: string) {
    this.endpointKey = key;
  }

  async delegate(ctx: Context): Promise<Result<unknown>> {
    const usecaseParameter = this.parse(this.endpointKey);
    if (usecaseParameter == null) {
      const result: Result<unknown> = {
        status: false,
        code: HTTPStatusEnum.InternalServerError,
        message: `parse error: xxxx`,
        entity: null,
      };
      return result;
    }

    const usecase: ucIF.Usecase = await ucIF.loadUsecase(
      usecaseParameter.moduleKey,
    );
    const result: Result<unknown> = await usecase.run(
      usecaseParameter.usecaseKey,
    );

    return result;
  }

  private parse(key: string): ucIF.UsecaseParameter | null {
    switch (key) {
      case 'getUsers':
        return {moduleKey: "user", usecaseKey: "get"}
      case 'createUser':
        return {moduleKey: "user", usecaseKey: "get"}
      default:
        return null
    }
  }
}