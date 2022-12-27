export enum HTTPStatusEnum {
  OK = 200,
  Created = 201,
  NoContent = 204,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,
}

export type HTTPStatus = (
  HTTPStatusEnum.OK |
  HTTPStatusEnum.Created |
  HTTPStatusEnum.NoContent |
  HTTPStatusEnum.Forbidden |
  HTTPStatusEnum.NotFound |
  HTTPStatusEnum.InternalServerError
)

export interface Result<T = unknown> {
  status: boolean;
  code?: string | HTTPStatus; // TODO:: 見直し
  message?: string;
  entity?: T;
}

export function unpack<T>(target: Result<T>): T | null {
  if (!target.status || target.entity == null) {
    return null;
  }
  return target.entity as T;
}
