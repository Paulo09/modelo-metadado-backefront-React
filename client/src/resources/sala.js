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
  ReferenceInput,
  SelectInput,
} from 'admin-on-rest';

import ErrorBoundary from '../ErrorBoundary';
import Pagination from '../Pagination';
import SalaIcon from 'material-ui/svg-icons/social/person';
export { SalaIcon };

export const SalaList = props => (

  
  <ErrorBoundary>
    <List {...props} pagination={<Pagination />}>
      <Datagrid>
        <TextField source="id" />
        <TextField label="Nome" source="nome" />
        <EditButton label="Editar" basePath="/sala" />
      </Datagrid>
    </List>
  </ErrorBoundary>
);

const SalaTitle = ({ record }) => {
  return <span>Sala {record ? `"${record.nome}"` : ''}</span>;
};

export const SalaEdit = props => (
  <ErrorBoundary>
    <Edit title={<SalaTitle />} {...props}>
      <SimpleForm>
        <DisabledInput source="id" />
        <TextInput label="Nome" source="nome" />
		
		  <ReferenceInput label="Aluno" source="aluno.id" reference="aluno">
	          <SelectInput optionText="nome" />
	        </ReferenceInput>
		
      </SimpleForm>
    </Edit>
  </ErrorBoundary>
);

export const SalaCreate = props => (
  <ErrorBoundary>
    <Create title="Cadastrar" {...props}>
      <SimpleForm>
        <TextInput label="Nome" source="nome" />
		
		<ReferenceInput
		  label="Aluno"
		  source="aluno.id"
		  reference="aluno"
		  allowEmpty>
		  <SelectInput optionText="nome" />
		</ReferenceInput>
				
      </SimpleForm>
    </Create>
  </ErrorBoundary>
);
