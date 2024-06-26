import { Login } from "../login/Login";

export type Patient = {
  createdAt: Date;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  logins?: Array<Login>;
  phoneNumber: string | null;
  updatedAt: Date;
};
