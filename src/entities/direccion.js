import * as React from "react";
import {
  List,
  Edit,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  ReferenceField,
  Create,
} from "react-admin";

export const DireccionList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="idSector" reference="sector">
        <TextField source="nombre" />
      </ReferenceField>
      <TextField source="direccion" />
      <EditButton />
    </Datagrid>
  </List>
);

export const DireccionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceField source="idSector" reference="sector">
        <TextField source="nombre" />
      </ReferenceField>
      <TextField source="direccion" />
    </SimpleForm>
  </Edit>
);

export const DireccionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceField source="idSector" reference="sector">
        <TextField source="nombre" />
      </ReferenceField>
      <TextField source="direccion" />
    </SimpleForm>
  </Create>
);
