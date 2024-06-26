import { SortOrder } from "../../util/SortOrder";

export type LoginOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
