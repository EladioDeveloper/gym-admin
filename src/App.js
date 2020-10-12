import * as React from "react";
import { Admin, Resource } from "react-admin";
import { ClientList, ClientEdit, ClientCreate } from "./entities/cliente";
import { CiudadList, CiudadEdit, CiudadCreate } from "./entities/ciudad";
import { RutinaList, RutinaEdit, RutinaCreate } from "./entities/rutina";
import { SectorList, SectorEdit, SectorCreate } from "./entities/sector";
import { MesList, MesEdit, MesCreate } from "./entities/mes";
import { DiaList, DiaEdit, DiaCreate } from "./entities/dia";
import {
  CategoriaList,
  CategoriaEdit,
  CategoriaCreate,
} from "./entities/categoria";
import {
  DiasRutinaList,
  DiasRutinaEdit,
  DiasRutinaCreate,
} from "./entities/diasrutina";
import {
  DireccionList,
  DireccionEdit,
  DireccionCreate,
} from "./entities/direccion";
import {
  EjercicioRutinaList,
  EjercicioRutinaEdit,
  EjercicioRutinaCreate,
} from "./entities/ejerciciorutina";
import {
  EvaluacionMensualList,
  EvaluacionMensualEdit,
  EvaluacionMensualCreate,
} from "./entities/evaluacionmensual";
import {
  InscripcionList,
  InscripcionEdit,
  InscripcionCreate,
} from "./entities/inscripcion";
import {
  PlanMembresiaList,
  PlanMembresiaEdit,
  PlanMembresiaCreate,
} from "./entities/planmembresia";
import {
  ProvinciaList,
  ProvinciaEdit,
  ProvinciaCreate,
} from "./entities/provincia";
import UserIcon from "@material-ui/icons/Group";
import simpleRestProvider from "ra-data-simple-rest";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";

const dataProvider = simpleRestProvider("https://localhost:5001/api");

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="cliente"
      list={ClientList}
      edit={ClientEdit}
      create={ClientCreate}
      options={{ label: "Clientes" }}
      icon={UserIcon}
    />
    <Resource
      name="categoria"
      list={CategoriaList}
      edit={CategoriaEdit}
      create={CategoriaCreate}
      options={{ label: "Categorias" }}
    />
    <Resource
      name="ciudad"
      list={CiudadList}
      edit={CiudadEdit}
      create={CiudadCreate}
      options={{ label: "Ciudades" }}
    />
    <Resource name="dia" list={DiaList} edit={DiaEdit} create={DiaCreate} />
    <Resource
      name="diasrutina"
      list={DiasRutinaList}
      edit={DiasRutinaEdit}
      create={DiasRutinaCreate}
      options={{ label: "Dias de Rutina" }}
    />
    <Resource
      name="direccion"
      list={DireccionList}
      edit={DireccionEdit}
      create={DireccionCreate}
      options={{ label: "Dirección" }}
    />
    <Resource
      name="ejerciciorutina"
      list={EjercicioRutinaList}
      edit={EjercicioRutinaEdit}
      create={EjercicioRutinaCreate}
      options={{ label: "Ejercicios de Rutina" }}
    />
    <Resource
      name="evaluacionmensual"
      list={EvaluacionMensualList}
      edit={EvaluacionMensualEdit}
      create={EvaluacionMensualCreate}
      options={{ label: "Evaluaciones Mensuales" }}
    />
    <Resource
      name="inscripcion"
      list={InscripcionList}
      edit={InscripcionEdit}
      create={InscripcionCreate}
      options={{ label: "Inscripción" }}
    />
    <Resource name="mes" list={MesList} edit={MesEdit} create={MesCreate} />
    <Resource
      name="planmembresia"
      list={PlanMembresiaList}
      edit={PlanMembresiaEdit}
      create={PlanMembresiaCreate}
      options={{ label: "Planes de membresía" }}
    />
    <Resource
      name="provincia"
      list={ProvinciaList}
      edit={ProvinciaEdit}
      create={ProvinciaCreate}
      options={{ label: "Provincias" }}
    />
    <Resource
      name="rutina"
      list={RutinaList}
      edit={RutinaEdit}
      create={RutinaCreate}
      options={{ label: "Rutinas" }}
    />
    <Resource
      name="sector"
      list={SectorList}
      edit={SectorEdit}
      create={SectorCreate}
      options={{ label: "Sectores" }}
    />
  </Admin>
);
export default App;
