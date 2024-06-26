import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DashboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Edit>
  );
};
