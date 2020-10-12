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

export const SectorList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="idCiudad" reference="ciudad">
        <TextField source="nombre" />
      </ReferenceField>
      <TextField source="nombre" />
      <EditButton />
    </Datagrid>
  </List>
);

export const SectorEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="idCiudad" reference="ciudad">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="nombre" />
    </SimpleForm>
  </Edit>
);

export const SectorCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="idCiudad" reference="ciudad">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="nombre" />
    </SimpleForm>
  </Create>
);
