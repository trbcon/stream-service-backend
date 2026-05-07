import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { SessionsService } from './sessions.service';
import { UserModel } from '../account/models/user.model';
import type { GqlContext } from 'src/shared/types/gql-context.types';
import { loginInput } from './inputs/login.input';

@Resolver('Session')
export class SessionsResolver {
  public constructor(private readonly sessionsService: SessionsService) {}

  @Mutation(() => UserModel, { name: 'login' })
  public async login(
    @Context() { req }: GqlContext,
    @Args('data') input: loginInput,
  ) {
    return this.sessionsService.login(req, input);
  }

  @Mutation(() => Boolean, { name: 'logout' })
  public async logout(@Context() { req }: GqlContext) {
    return this.sessionsService.logout(req);
  }
}
