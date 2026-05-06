import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  public username: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  @Length(8, 64)
  public password: string;
}
