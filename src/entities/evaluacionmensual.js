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

export const EvaluacionMensualList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="idCliente" reference="cliente">
        <TextField source="nombre" />
      </ReferenceField>
      <ReferenceField source="idMes" reference="mes">
        <TextField source="nombre" />
      </ReferenceField>
      <TextField source="calorias" />
      <NumberField source="altura" />
      <NumberField source="peso" />
      <NumberField source="grasa" />
      <TextField multiline source="comentarios" />
      <EditButton />
    </Datagrid>
  </List>
);

export const EvaluacionMensualEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="idCliente" reference="cliente">
        <TextInput source="nombre" />
      </ReferenceInput>
      <ReferenceInput source="idMes" reference="mes">
        <TextInput source="nombre" />
      </ReferenceInput>
      <TextInput source="calorias" />
      <NumberInput source="altura" />
      <NumberInput source="peso" />
      <NumberInput source="grasa" />
      <TextInput multiline source="comentarios" />
    </SimpleForm>
  </Edit>
);

export const EvaluacionMensualCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="idCliente" reference="cliente">
        <TextInput source="nombre" />
      </ReferenceInput>
      <ReferenceInput source="idMes" reference="mes">
        <TextInput source="nombre" />
      </ReferenceInput>
      <TextInput source="calorias" />
      <NumberInput source="altura" />
      <NumberInput source="peso" />
      <NumberInput source="grasa" />
      <TextInput multiline source="comentarios" />
    </SimpleForm>
  </Create>
);
