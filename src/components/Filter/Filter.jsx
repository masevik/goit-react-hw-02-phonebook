import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Input, Label } from './Filter.styled';

export class Filter extends Component {
  filterInputId = nanoid();

  render() {
    const { value, onChange } = this.props;

    return (
      <Box display="flex" flexDirection="column">
        <Label htmlFor="this.filterInputId">Find contact by name</Label>
        <Input
          type="text"
          name="filter"
          id="this.filterInputId"
          value={value}
          onChange={onChange}
        />
      </Box>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
