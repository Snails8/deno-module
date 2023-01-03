import { Result } from "../../common.ts";
import { Initializer, Usecase } from "./_usecase.ts";


export class UserUsecase implements Usecase {
  private getUsers(): Result<unknown> {
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

    const result: Result<any[]> = {
      status: true,
      code: 200,
      message: "aaaaaa",
      entity: users,
    };
  
    return result;
  }

  private getUserById() {
    const operator = "operator";
    const user = {
        companyName: "株式会社テスト",
        id: "111",
        name: "テスト太郎",
        email: "test@sample.com",
        role: operator,
      }

    const result: Result<any> = {
      status: true,
      code: 200,
      message: "aaaaaa",
      entity: user,
    };
  
    return result;
  }

  async run(usecaseKey?: string | undefined): Promise<Result<unknown>> {
    const result: Result<any> = {
      status: true,
      code: 200,
      message: "aaaaaa",
    };

    console.log('usecase');
    
    switch(usecaseKey) {
      case 'getUsers':
        return await this.getUsers();
      case 'getUserById':
        return this.getUserById();
      default:
        return  result;
    }
  }
}

export const initialize: Initializer = (): Usecase => {
  return new UserUsecase();
};
