import * as React from "react";
import {
  List,
  Edit,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Create,
} from "react-admin";

export const DiaList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nombre" />
      <EditButton />
    </Datagrid>
  </List>
);

export const DiaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="nombre" />
    </SimpleForm>
  </Edit>
);

export const DiaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nombre" />
    </SimpleForm>
  </Create>
);
