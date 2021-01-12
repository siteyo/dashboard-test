import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './style.css';

const Header = () => {
  const handleChange = event => {
    console.log({ event });
    alert('Test message');
  };

  return (
    <div className="header">
      <FormControl>
        <InputLabel>期間</InputLabel>
        <Select onChange={e => handleChange(e)} />
      </FormControl>
      <div className="header-nav">
        <Button onClick={handleChange}>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </div>
    </div>
  );
};

export default Header;
