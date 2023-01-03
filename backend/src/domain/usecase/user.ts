import { Result } from "../../common.ts";
import { Initializer, Usecase } from "./_usecase.ts";


export class UserUsecase implements Usecase {
  private getUsers() {
    const operator = "operator";
    const users = [
      {
        companyName: "株式会社テスト",
        id: "111",
        name: "テスト太郎",
        email: "test@sample.com",
        role: operator,
      },
      {
        companyName: "株式会社サンプル",
        id: "122",
        name: "テスト次郎",
        email: "sample@sample.com",
        role: operator,
      },
    ];

    return users;
  }

  async run(usecaseKey?: string | undefined): Promise<Result<unknown>> {
    const users = this.getUsers();

    const result: Result<any[]> = {
      status: true,
      code: 200,
      message: "aaaaaa",
      entity: users,
    };
    return await result;
  }
}

export const initialize: Initializer = (): Usecase => {
  return new UserUsecase();
};
