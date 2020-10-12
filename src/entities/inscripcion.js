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
  SelectInput,
  ReferenceInput,
  DateInput,
  DateField,
  RadioButtonGroupInput,
} from "react-admin";

export const InscripcionList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="idPlan" reference="planmembresia" label="Plan">
        <TextField source="nombre" />
      </ReferenceField>
      <DateField source="fExpiracion" label="Fecha Expiración" />
      <DateField source="fPago" label="FechaPago" />
      <TextField source="autoRenovacion" label="Auto Renovación" />
      <EditButton />
    </Datagrid>
  </List>
);

export const InscripcionEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="idPlan" reference="planmembresia">
        <TextField source="id" />
      </ReferenceInput>
      <DateInput source="fExpiracion" label="Fecha Expiración" />
      <DateInput source="fPago" label="Fecha de Pago" />
      <RadioButtonGroupInput
        source="autoRenovacion"
        choices={[
          { id: 1, name: "Si" },
          { id: 0, name: "No" },
        ]}
      />
    </SimpleForm>
  </Edit>
);

export const InscripcionCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        source="IDPlan"
        reference="planmembresia"
        label="Tipo Membresía"
      >
        <SelectInput optionText="nombre" />
      </ReferenceInput>
      <DateInput source="FPago" label="Fecha de Pago" />
      <DateInput source="FExpiracion" />
      <RadioButtonGroupInput
        source="AutoRenovacion"
        choices={[
          { id: 1, name: "Si" },
          { id: 0, name: "No" },
        ]}
      />
    </SimpleForm>
  </Create>
);
