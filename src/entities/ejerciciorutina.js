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
  Create,
} from "react-admin";

export const EjercicioRutinaList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="idCategoria" reference="categoria">
        <TextField source="nombre" />
      </ReferenceField>
      <TextField source="nombre" />
      <EditButton />
    </Datagrid>
  </List>
);

export const EjercicioRutinaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="idCategoria" reference="categoria">
        <TextInput source="nombre" />
      </ReferenceInput>
      <TextInput source="nombre" />
    </SimpleForm>
  </Edit>
);

export const EjercicioRutinaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="idCategoria" reference="categoria">
        <TextInput source="nombre" />
      </ReferenceInput>
      <TextInput source="nombre" />
    </SimpleForm>
  </Create>
);
