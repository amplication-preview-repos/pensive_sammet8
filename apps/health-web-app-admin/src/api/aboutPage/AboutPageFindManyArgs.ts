import { AboutPageWhereInput } from "./AboutPageWhereInput";
import { AboutPageOrderByInput } from "./AboutPageOrderByInput";

export type AboutPageFindManyArgs = {
  where?: AboutPageWhereInput;
  orderBy?: Array<AboutPageOrderByInput>;
  skip?: number;
  take?: number;
};
