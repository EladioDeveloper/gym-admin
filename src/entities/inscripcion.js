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
  ReferenceInput,
} from "react-admin";

export const InscripcionList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="idPlan" reference="plan">
        <TextField source="nombre" />
      </ReferenceField>
      <TextField source="fPago" />
      <TextField source="autoRenovacion" />
      <EditButton />
    </Datagrid>
  </List>
);

export const InscripcionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="idPlan" reference="plan">
        <TextField source="nombre" />
      </ReferenceInput>
      <TextInput source="direccion" />
      <TextInput source="fPago" />
      <TextInput source="autoRenovacion" />
    </SimpleForm>
  </Edit>
);

export const InscripcionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="idPlan" reference="plan">
        <TextField source="nombre" />
      </ReferenceInput>
      <TextInput source="direccion" />
      <TextInput source="fPago" />
      <TextInput source="autoRenovacion" />
    </SimpleForm>
  </Create>
);
