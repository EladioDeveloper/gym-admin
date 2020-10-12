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
  SelectInput,
  ReferenceInput,
  Create,
} from "react-admin";

export const DireccionList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="idSector" reference="sector" label="Sector">
        <TextField source="nombre" />
      </ReferenceField>
      <TextField source="dir" label="Direccion" />
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
      <TextField source="dir" label="Direccion" />
    </SimpleForm>
  </Edit>
);

export const DireccionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="IDSector" reference="sector">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <SelectInput source="Dir" label="Direccion" />
    </SimpleForm>
  </Create>
);
