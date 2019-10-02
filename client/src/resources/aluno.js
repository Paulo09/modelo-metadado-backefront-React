import React from 'react';
import {
  List,
  Datagrid,
  Edit,
  Create,
  SimpleForm,
  TextField,
  EditButton,
  DisabledInput,
  TextInput,
} from 'admin-on-rest';


import ErrorBoundary from '../ErrorBoundary';
import Pagination from '../Pagination';
import AlunoIcon from 'material-ui/svg-icons/social/person';
export { AlunoIcon };



export const AlunoList = props => (  
  <ErrorBoundary>
    <List {...props} pagination={<Pagination />}>
      <Datagrid>
        <TextField source="id" />
        <TextField label="Nome" source="nome" />
        <EditButton label="Editar" basePath="/aluno" />
      </Datagrid>
    </List>
  </ErrorBoundary>
);

const AlunoTitle = ({ record }) => {
  return <span>Aluno {record ? `"${record.nome}"` : ''}</span>;
};

export const AlunoEdit = props => (
  <ErrorBoundary>
    <Edit title={<AlunoTitle />} {...props}>
      <SimpleForm>
        <DisabledInput source="id" />
        <TextInput label="Nome" source="nome" />
      </SimpleForm>
    </Edit>
  </ErrorBoundary>
);

export const AlunoCreate = props => (
  <ErrorBoundary>
    <Create title="Cadastrar" {...props}>
      <SimpleForm>
        <TextInput label="Nome" source="nome" />
      </SimpleForm>
    </Create>
  </ErrorBoundary>
);
