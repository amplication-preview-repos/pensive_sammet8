import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type LoginCreateInput = {
  password?: string | null;
  patient?: PatientWhereUniqueInput | null;
  username?: string | null;
};
