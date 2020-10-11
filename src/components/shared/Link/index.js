import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
    noUnderline: {
        display: 'block',
        textDecoration: 'none',
    }
}

const StyledLink = ({ noUnderline, ...otherProps }) => {
    return <Link style={ noUnderline ? styles.noUnderline : {} } { ...otherProps } />;
};

StyledLink.props = {
    noUnderline: PropTypes.bool
};

export default StyledLink;
