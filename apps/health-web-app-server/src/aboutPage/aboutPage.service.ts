import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AboutPageServiceBase } from "./base/aboutPage.service.base";

@Injectable()
export class AboutPageService extends AboutPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
