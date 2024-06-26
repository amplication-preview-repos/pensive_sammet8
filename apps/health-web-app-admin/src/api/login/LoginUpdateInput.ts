import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type LoginUpdateInput = {
  password?: string | null;
  patient?: PatientWhereUniqueInput | null;
  username?: string | null;
};
