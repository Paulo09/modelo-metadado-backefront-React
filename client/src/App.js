import React from 'react';
import { Admin, Resource } from 'admin-on-rest';

import { BookList, BookEdit, BookCreate, BookIcon } from './resources/books';
import { AuthorList,AuthorEdit,AuthorCreate,AuthorIcon} from './resources/authors';
import { AlunoList,AlunoEdit,AlunoCreate,AlunoIcon} from './resources/aluno';
import { SalaList,SalaEdit,SalaCreate,SalaIcon} from './resources/sala';
import restClient from './grailsRestClient';
import portuguesMessages from 'aor-language-portugues';

import * as Config from './config';

const messages = {
    pt: portuguesMessages
}

export default props => (
  <Admin restClient={restClient(Config.SERVER_URL)} locale="pt" messages={messages}>
    <Resource
      name="book"
      list={BookList}
      edit={BookEdit}
      create={BookCreate}
      icon={BookIcon}
    />
    <Resource
      name="author"
      list={AuthorList}
      edit={AuthorEdit}
      create={AuthorCreate}
      icon={AuthorIcon}
    />
	 <Resource
      name="aluno"
      list={AlunoList}
      edit={AlunoEdit}
      create={AlunoCreate}
      icon={AlunoIcon}
    />
	<Resource
      name="sala"
      list={SalaList}
      edit={SalaEdit}
      create={SalaCreate}
      icon={SalaIcon}
    />
  </Admin>
);
