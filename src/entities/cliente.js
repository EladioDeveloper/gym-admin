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
  SelectInput,
  Create,
  DateField,
  DateInput,
} from "react-admin";

export const ClientList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="idRutina" reference="rutina" label="Rutina">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField
        source="idDireccion"
        reference="direccion"
        label="Direccion"
      >
        <TextField source="dir" />
      </ReferenceField>
      <ReferenceField
        source="idInscripcion"
        reference="inscripcion"
        label="ID de Inscripción"
      >
        <TextField source="id" />
      </ReferenceField>
      <TextField source="nombre" />
      <TextField source="apellido" />
      <TextField source="telefono" />
      <EmailField source="email" />
      <DateField source="fNacimiento" label="Fecha de Nacimiento" />
      <DateField source="fRegistro" label="Fecha de Registro" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ClientEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="idRutina" reference="rutina" label="Rutina">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput
        source="idDireccion"
        reference="direccion"
        label="Direccion"
      >
        <SelectInput optionText="dir" />
      </ReferenceInput>
      <ReferenceInput
        source="idInscripcion"
        reference="inscripcion"
        label="ID Inscripción"
      >
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="nombre" />
      <TextInput source="apellido" />
      <TextInput source="telefono" />
      <TextInput source="email" />
      <DateInput source="fNacimiento" label="Fecha de Nacimiento" />
      <DateInput source="fRegistro" label="Fecha de Registro" />
    </SimpleForm>
  </Edit>
);

export const ClientCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="IDRutina" reference="rutina" label="Rutina">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput
        source="IDDireccion"
        reference="direccion"
        label="Direccion"
      >
        <SelectInput optionText="dir" />
      </ReferenceInput>
      <ReferenceInput
        source="IDInscripcion"
        reference="inscripcion"
        label="ID Inscripción"
      >
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="Nombre" />
      <TextInput source="Apellido" />
      <TextInput source="Telefono" />
      <TextInput source="Email" />
      <DateInput source="FNacimiento" label="Fecha de Nacimiento" />
      <DateInput source="FRegistro" label="Fecha de Registro" />
    </SimpleForm>
  </Create>
);
