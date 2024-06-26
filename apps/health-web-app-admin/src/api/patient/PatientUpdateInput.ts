import { LoginUpdateManyWithoutPatientsInput } from "./LoginUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  logins?: LoginUpdateManyWithoutPatientsInput;
  phoneNumber?: string | null;
};
