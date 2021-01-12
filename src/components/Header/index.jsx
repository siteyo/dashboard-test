import React, { useContext } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { GlobalContext } from '../../contexts/Global';
import './style.css';

const Header = () => {
  const { _, setPeriod } = useContext(GlobalContext);

  const handleClicked = event => {
    console.log({ event });
    alert('Test message');
  };

  const handleChanged = event => {
    setPeriod(event.target.value);
  };

  return (
    <div className="header">
      <FormControl>
        <InputLabel>期間</InputLabel>
        <Select onChange={e => handleChanged(e)}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
        </Select>
      </FormControl>
      <div className="header-nav">
        <Button onClick={handleClicked}>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </div>
    </div>
  );
};

export default Header;
