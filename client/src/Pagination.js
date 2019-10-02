import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

export default ({ page, perPage, total, setPage }) => {
  return (
    <Toolbar>
      <ToolbarGroup>
        {total > 10 && (
          <FlatButton
            primary
            key="prev"
            label="ANTERIOR"
            icon={<ChevronLeft />}
            onClick={() => setPage(page - 1)}
          />
        )}
		{total > 10 && (
        <FlatButton
          primary
          key="next"
          label="PROXIMO"
          icon={<ChevronRight />}
          onClick={() => setPage(page + 1)}
          labelPosition="before"
        />
		)}
      </ToolbarGroup>
    </Toolbar>
  );
};
