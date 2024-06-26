import * as graphql from "@nestjs/graphql";
import { AboutPageResolverBase } from "./base/aboutPage.resolver.base";
import { AboutPage } from "./base/AboutPage";
import { AboutPageService } from "./aboutPage.service";

@graphql.Resolver(() => AboutPage)
export class AboutPageResolver extends AboutPageResolverBase {
  constructor(protected readonly service: AboutPageService) {
    super(service);
  }
}
