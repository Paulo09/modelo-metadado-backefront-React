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
import AuthorIcon from 'material-ui/svg-icons/social/person';
export { AuthorIcon };

export const AuthorList = props => (

  
  <ErrorBoundary>
    <List {...props} pagination={<Pagination />}>
      <Datagrid>
        <TextField source="id" />
        <TextField label="Nome" source="name" />
        <EditButton label="Editar" basePath="/author" />
      </Datagrid>
    </List>
  </ErrorBoundary>
);

const AuthorTitle = ({ record }) => {
  return <span>Autor {record ? `"${record.name}"` : ''}</span>;
};

export const AuthorEdit = props => (
  <ErrorBoundary>
    <Edit title={<AuthorTitle />} {...props}>
      <SimpleForm>
        <DisabledInput source="id" />
        <TextInput label="Nome" source="name" />
      </SimpleForm>
    </Edit>
  </ErrorBoundary>
);

export const AuthorCreate = props => (
  <ErrorBoundary>
    <Create title="Cadastrar Autor" {...props}>
      <SimpleForm>
        <TextInput label="Nome" source="name" />
      </SimpleForm>
    </Create>
  </ErrorBoundary>
);
