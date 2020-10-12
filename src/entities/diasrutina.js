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
  NumberField,
  ReferenceInput,
  NumberInput,
  Create,
} from "react-admin";

export const DiasRutinaList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="idRutina" reference="rutina">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField source="idDia" reference="dia">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField source="idEjercicio" reference="ejercicio">
        <TextField source="nombre" />
      </ReferenceField>
      <NumberField source="repeticiones" />
      <NumberField source="series" />
      <EditButton />
    </Datagrid>
  </List>
);

export const DiasRutinaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="idRutina" reference="rutina">
        <TextInput source="nombre" />
      </ReferenceInput>
      <ReferenceInput source="idDia" reference="dia">
        <TextInput source="nombre" />
      </ReferenceInput>
      <ReferenceInput source="idEjercicio" reference="ejercicio">
        <TextField source="nombre" />
      </ReferenceInput>
      <NumberInput source="repeticiones" />
      <NumberInput source="series" />
    </SimpleForm>
  </Edit>
);

export const DiasRutinaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="idRutina" reference="rutina">
        <TextInput source="nombre" />
      </ReferenceInput>
      <ReferenceInput source="idDia" reference="dia">
        <TextInput source="nombre" />
      </ReferenceInput>
      <ReferenceInput source="idEjercicio" reference="ejercicio">
        <TextField source="nombre" />
      </ReferenceInput>
      <NumberInput source="repeticiones" />
      <NumberInput source="series" />
    </SimpleForm>
  </Create>
);
