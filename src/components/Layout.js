import React, { PropTypes } from 'react';

export default function Layout(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object, // eslint-disable-line
};
