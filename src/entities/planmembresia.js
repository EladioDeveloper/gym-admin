import * as React from "react";
import {
  List,
  Edit,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Create,
  RadioButtonGroupInput,
} from "react-admin";

export const PlanMembresiaList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nombre" />
      <TextField source="descripcion" />
      <TextField source="tiempoValidez" />
      <TextField source="monto" />
      <TextField source="estado" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PlanMembresiaEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="nombre" />
      <TextInput source="descripcion" />
      <TextInput source="tiempoValidez" />
      <TextInput source="monto" />
      <RadioButtonGroupInput
        source="estado"
        choices={[
          { id: 1, name: "Si" },
          { id: 0, name: "No" },
        ]}
      />
    </SimpleForm>
  </Edit>
);

export const PlanMembresiaCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="Nombre" />
      <TextInput source="Descripcion" />
      <TextInput source="TiempoValidez" />
      <TextInput source="Monto" />
      <RadioButtonGroupInput
        source="Estado"
        choices={[
          { id: 1, name: "Si" },
          { id: 0, name: "No" },
        ]}
      />
    </SimpleForm>
  </Create>
);
