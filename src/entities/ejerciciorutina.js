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

export const EjercicioRutinaList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField
        source="id"
        reference="categoria"
        label="Categoría de ejercicio"
      >
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
      <ReferenceInput
        source="idCategoria"
        reference="categoria"
        label="Categoría"
      >
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <TextInput source="nombre" />
    </SimpleForm>
  </Edit>
);

export const EjercicioRutinaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        source="IDCategoria"
        reference="categoria"
        label="Categoría"
      >
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <TextInput source="Nombre" />
    </SimpleForm>
  </Create>
);
