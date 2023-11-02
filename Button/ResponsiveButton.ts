import React from 'react';
import { Button } from 'react-bootstrap';

const ResponsiveButton = ({ children, ...props }) => {
  return (
    <Button variant="primary" {...props}>
      {children}
    </Button>
  );
};

export default ResponsiveButton;