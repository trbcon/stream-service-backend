import { Resolver } from '@nestjs/graphql';
import { SessionsService } from './sessions.service';

@Resolver('Session')
export class SessionsResolver {
  constructor(private readonly sessionsService: SessionsService) {}
}
