import { Module } from "@nestjs/common";
import { AboutPageModuleBase } from "./base/aboutPage.module.base";
import { AboutPageService } from "./aboutPage.service";
import { AboutPageController } from "./aboutPage.controller";
import { AboutPageResolver } from "./aboutPage.resolver";

@Module({
  imports: [AboutPageModuleBase],
  controllers: [AboutPageController],
  providers: [AboutPageService, AboutPageResolver],
  exports: [AboutPageService],
})
export class AboutPageModule {}
