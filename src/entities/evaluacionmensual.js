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
  NumberField,
  ReferenceInput,
  NumberInput,
  Create,
} from "react-admin";

export const EvaluacionMensualList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="cliente" reference="cliente">
        <TextField optionText="nombre" />
      </ReferenceField>
      <ReferenceField source="mes" reference="mes">
        <TextField optionText="nombre" />
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
      <ReferenceInput source="cliente" reference="cliente">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput source="mes" reference="mes">
        <SelectInput optionText="nombre" />
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
      <ReferenceInput source="cliente" reference="cliente">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <ReferenceInput source="mes" reference="mes">
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <TextInput source="calorias" />
      <NumberInput source="altura" />
      <NumberInput source="peso" />
      <NumberInput source="grasa" />
      <TextInput multiline source="comentarios" />
    </SimpleForm>
  </Create>
);
