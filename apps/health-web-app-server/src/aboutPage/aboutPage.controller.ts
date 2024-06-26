import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AboutPageService } from "./aboutPage.service";
import { AboutPageControllerBase } from "./base/aboutPage.controller.base";

@swagger.ApiTags("aboutPages")
@common.Controller("aboutPages")
export class AboutPageController extends AboutPageControllerBase {
  constructor(protected readonly service: AboutPageService) {
    super(service);
  }
}
