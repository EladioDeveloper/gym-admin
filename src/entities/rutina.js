import * as React from "react";
import {
  List,
  Edit,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  NumberField,
  Create,
} from "react-admin";

export const RutinaList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <NumberField source="id" />
      <TextField source="nombre" />
      <EditButton />
    </Datagrid>
  </List>
);

export const RutinaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <NumberField disabled source="id" />
      <TextInput source="nombre" />
    </SimpleForm>
  </Edit>
);

export const RutinaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
    </SimpleForm>
  </Create>
);
