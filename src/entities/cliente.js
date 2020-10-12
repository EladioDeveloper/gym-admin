import * as React from "react";
import {
  List,
  Edit,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  SimpleForm,
  TextInput,
  ReferenceField,
  ReferenceInput,
} from "react-admin";

export const ClientList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="idRutina" reference="rutina">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField source="idDireccion" reference="direccion">
        <TextField source="direccion" />
      </ReferenceField>
      <ReferenceField source="idInscripcion" reference="inscripcion">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="nombre" />
      <TextField source="apellido" />
      <TextField source="telefono" />
      <EmailField source="email" />
      <TextField source="fNacimiento" />
      <TextField source="fRegistro" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ClientEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="idRutina" reference="rutina">
        <TextInput source="nombre" />
      </ReferenceInput>
      <ReferenceInput source="idDireccion" reference="direccion">
        <TextInput source="direccion" />
      </ReferenceInput>
      <ReferenceInput source="idInscripcion" reference="inscripcion">
        <TextInput source="id" />
      </ReferenceInput>
      <TextInput source="nombre" />
      <TextInput source="apellido" />
      <TextInput source="telefono" />
      <TextInput source="email" />
      <TextInput source="fNacimiento" />
      <TextInput source="fRegistro" />
    </SimpleForm>
  </Edit>
);

export const ClientCreate = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <ReferenceInput source="idRutina" reference="rutina">
        <TextInput source="nombre" />
      </ReferenceInput>
      <ReferenceInput source="idDireccion" reference="direccion">
        <TextInput source="direccion" />
      </ReferenceInput>
      <ReferenceInput source="idInscripcion" reference="inscripcion">
        <TextInput source="id" />
      </ReferenceInput>
      <TextInput source="nombre" />
      <TextInput source="apellido" />
      <TextInput source="telefono" />
      <TextInput source="email" />
      <TextInput source="fNacimiento" />
      <TextInput source="fRegistro" />
    </SimpleForm>
  </Edit>
);
