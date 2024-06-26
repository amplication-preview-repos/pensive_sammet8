import { LoginCreateNestedManyWithoutPatientsInput } from "./LoginCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  logins?: LoginCreateNestedManyWithoutPatientsInput;
  phoneNumber?: string | null;
};
