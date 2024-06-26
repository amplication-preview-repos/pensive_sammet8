import { Patient } from "../patient/Patient";

export type Login = {
  createdAt: Date;
  id: string;
  password: string | null;
  patient?: Patient | null;
  updatedAt: Date;
  username: string | null;
};
