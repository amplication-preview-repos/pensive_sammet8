import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoginListRelationFilter } from "../login/LoginListRelationFilter";

export type PatientWhereInput = {
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  logins?: LoginListRelationFilter;
  phoneNumber?: StringNullableFilter;
};
