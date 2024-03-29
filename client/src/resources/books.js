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
  NumberInput,
  ReferenceInput,
  ReferenceField,
  SelectInput,
} from 'admin-on-rest';

import ErrorBoundary from '../ErrorBoundary';
import Pagination from '../Pagination';
import BookIcon from 'material-ui/svg-icons/action/book';
export { BookIcon };

export const BookList = props => (
  
 <ErrorBoundary>
    <List {...props} pagination={<Pagination />} label="teste">
      <Datagrid label="teste">
        <TextField source="id" />
        <TextField label="Título" source="title" />
        <TextField label="Preço" source="price" />
	        <ReferenceField label="Autor" source="author.id" reference="author">
	          <TextField source="name" />
	        </ReferenceField>
		<EditButton label="Editar" basePath="/book" />
      </Datagrid>
    </List>
  </ErrorBoundary>
);

const BookTitle = ({ record }) => {
  return <span>Livro: {record ? `"${record.title}"` : ''}</span>;
};

export const BookEdit = props => (
  <ErrorBoundary>
    <Edit title={<BookTitle />} {...props}>
	      <SimpleForm>
	        <DisabledInput source="id" />
	         <TextInput label="Título" source="title" />
	        <NumberInput label="Preço" source="price" />
	        <ReferenceInput label="Autor" source="author.id" reference="author">
	          <SelectInput optionText="name" />
	        </ReferenceInput>
	      </SimpleForm>
    </Edit>
  </ErrorBoundary>
);

export const BookCreate = props => (
  <ErrorBoundary>
    <Create title="Cadastrar Livro" {...props}>
      <SimpleForm>
        <TextInput label="Título" source="title" />
        <NumberInput label="Preço" source="price" />
		        <ReferenceInput
		          label="Autor"
		          source="author.id"
		          reference="author"
		          allowEmpty>
		          <SelectInput optionText="name" />
		        </ReferenceInput>
      </SimpleForm>
    </Create>
  </ErrorBoundary>
);
