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
      icon={UserIcon}
    />
    <Resource
      name="categoria"
      list={CategoriaList}
      edit={CategoriaEdit}
      create={CategoriaCreate}
    />
    <Resource
      name="ciudad"
      list={CiudadList}
      edit={CiudadEdit}
      create={CiudadCreate}
    />
    <Resource name="dia" list={DiaList} edit={DiaEdit} create={DiaCreate} />
    <Resource
      name="diasrutina"
      list={DiasRutinaList}
      edit={DiasRutinaEdit}
      create={DiasRutinaCreate}
    />
    <Resource
      name="direccion"
      list={DireccionList}
      edit={DireccionEdit}
      create={DireccionCreate}
    />
    <Resource
      name="ejerciciorutina"
      list={EjercicioRutinaList}
      edit={EjercicioRutinaEdit}
      create={EjercicioRutinaCreate}
    />
    <Resource
      name="evaluacionmensual"
      list={EvaluacionMensualList}
      edit={EvaluacionMensualEdit}
      create={EvaluacionMensualCreate}
    />
    <Resource
      name="inscripcion"
      list={InscripcionList}
      edit={InscripcionEdit}
      create={InscripcionCreate}
    />
    <Resource name="mes" list={MesList} edit={MesEdit} create={MesCreate} />
    <Resource
      name="planmembresia"
      list={PlanMembresiaList}
      edit={PlanMembresiaEdit}
      create={PlanMembresiaCreate}
    />
    <Resource
      name="provincia"
      list={ProvinciaList}
      edit={ProvinciaEdit}
      create={ProvinciaCreate}
    />
    <Resource
      name="rutina"
      list={RutinaList}
      edit={RutinaEdit}
      create={RutinaCreate}
    />
    <Resource
      name="sector"
      list={SectorList}
      edit={SectorEdit}
      create={SectorCreate}
    />
  </Admin>
);
export default App;
