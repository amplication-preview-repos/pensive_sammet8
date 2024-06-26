import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type LoginWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
  username?: StringNullableFilter;
};
