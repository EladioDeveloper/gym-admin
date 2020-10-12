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
  ReferenceInput,
  SelectInput,
  Create,
} from "react-admin";

export const CiudadList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="idProvincia" reference="provincia">
        <TextField source="nombre" />
      </ReferenceField>
      <TextField source="nombre" />
      <EditButton />
    </Datagrid>
  </List>
);

export const CiudadEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="idProvincia" reference="provincia">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="nombre" />
    </SimpleForm>
  </Edit>
);

export const CiudadCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="idProvincia" reference="provincia">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="nombre" />
    </SimpleForm>
  </Create>
);
