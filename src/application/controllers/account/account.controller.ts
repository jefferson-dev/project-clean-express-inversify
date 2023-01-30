import { Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  requestParam,
  httpDelete,
  httpGet,
  httpPost,
  httpPut,
  requestBody,
  response,
} from 'inversify-express-utils';
import { INJECT } from '../../../main/types/container';
import { AccountService } from '../../../features/account/account.service';
import { FindAccountsOutput } from './dtos/find.dto';
import { FindAccountByIdOutput } from './dtos/find-by-id.dto';
import { CreateAccountInput, CreateAccountOutput } from './dtos/create.dto';
import { UpdateAccountInput, UpdateAccountOutput } from './dtos/update.dto';
import { DeleteAccountOutput } from './dtos/delete.dto';

@controller('/account')
export class AccountController {
  constructor(
    @inject(INJECT.AccountService)
    private readonly service: AccountService,
  ) {}

  @httpGet('/')
  public async find(@response() response: Response): Promise<Response<FindAccountsOutput>> {
    const find = await this.service.find();

    return response.json(find);
  }

  @httpGet('/:id')
  public async findOne(
    @requestParam('id') id: string,
    @response() response: Response,
  ): Promise<Response<FindAccountByIdOutput>> {
    const findOne = await this.service.findById({ id });

    return response.json(findOne);
  }

  @httpPost('/')
  public async create(
    @requestBody() body: CreateAccountInput,
    @response() response: Response,
  ): Promise<Response<CreateAccountOutput>> {
    const create = await this.service.create(body);

    return response.json(create);
  }

  @httpPut('/:id')
  public async update(
    @requestParam('id') id: string,
    @requestBody() body: UpdateAccountInput,
    @response() response: Response,
  ): Promise<Response<UpdateAccountOutput>> {
    const update = await this.service.update({ id, ...body });

    return response.json(update);
  }

  @httpDelete('/:id')
  public async delete(
    @requestParam('id') id: string,
    @response() response: Response,
  ): Promise<Response<DeleteAccountOutput>> {
    const destroy = await this.service.delete({ id });

    return response.status(204).json(destroy);
  }
}
