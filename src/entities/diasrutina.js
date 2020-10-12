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
      <ReferenceField source="idRutina" reference="rutina" label="Rutina">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField source="idDia" reference="dia" label="Día">
        <NumberField source="nombre" />
      </ReferenceField>
      <ReferenceField
        source="idEjercicio"
        reference="ejerciciorutina"
        label="Ejercicio"
      >
        <NumberField source="nombre" />
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
        <NumberInput source="id" />
      </ReferenceInput>
      <ReferenceInput source="idDia" reference="dia">
        <NumberInput source="id" />
      </ReferenceInput>
      <ReferenceInput source="idEjercicio" reference="ejerciciorutina">
        <NumberInput source="id" />
      </ReferenceInput>
      <NumberInput source="repeticiones" />
      <NumberInput source="series" />
    </SimpleForm>
  </Edit>
);

export const DiasRutinaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="IDRutina" reference="rutina">
        <NumberInput source="id" />
      </ReferenceInput>
      <ReferenceInput source="IDDia" reference="dia">
        <NumberInput source="id" />
      </ReferenceInput>
      <ReferenceInput source="IDEjercicio" reference="ejerciciorutina">
        <NumberInput source="id" />
      </ReferenceInput>
      <NumberInput source="Repeticiones" />
      <NumberInput source="Series" />
    </SimpleForm>
  </Create>
);
