import { Mapping, Body, Post, Adapter } from "@tsclean/core";
import { UserModel, AddUserParams } from "@/domain/models/user";
import {
  ADD_USER_SERVICE,
  IAddUserService,
} from "@/domain/use-cases/add-user-service";

@Mapping("api/v1/user")
export class AddUserController {
  constructor(
    @Adapter(ADD_USER_SERVICE) private readonly addUserService: IAddUserService
  ) {}

  @Post()
  async addUserController(@Body() data: AddUserParams): Promise<UserModel> {
    return await this.addUserService.addUserService(data);
  }
}
