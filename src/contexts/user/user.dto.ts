import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsDate,
  IsOptional,
  IsInt,
} from "class-validator";

export class RegisterUserDto {
  @IsNotEmpty()
  @IsEmail()
  Email!: string;

  @IsString()
  @IsNotEmpty()
  Password!: string;

  @IsInt()
  @IsNotEmpty()
  JobPositionId!: number;

  @IsString()
  @IsNotEmpty()
  Fullname!: string;

  @IsString()
  @IsNotEmpty()
  Gender!: string;

  @IsDate()
  @IsNotEmpty()
  BirthOfDate!: Date;

  @IsString()
  @IsNotEmpty()
  BirthPlace!: string;

  @IsString()
  @IsOptional()
  VerificationCode?: string;

  @IsString()
  @IsOptional()
  ForgetPasswordCode?: string;
}
