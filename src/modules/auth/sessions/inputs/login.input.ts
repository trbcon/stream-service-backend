import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class loginInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  public login: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @Length(8, 64)
  public password: string;
}
