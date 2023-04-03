/* eslint-disable react/jsx-props-no-spreading */
/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import ColorButton from './ColorButton';
import * as CommonTypes from '../helpers/commonTypes';
import useTranslate from '../helpers/useTranslate';

const PREFIX = 'ColorPalette';

const classes = {
  root: `${PREFIX}-root`,
  paletteButton: `${PREFIX}-paletteButton`
};

const Root = styled('div')({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '8px 0 0 8px',
  },
  [`& .${classes.paletteButton}`]: {
    margin: '0 8px 8px 0',
    padding: 0,
  },
});

const ColorPalette = ({ size, borderWidth, palette, onSelect, disableAlpha }) => {

  const { t } = useTranslate();
  const handleSelectColor = name => {
    const translatedName = t(name);
    if (onSelect) onSelect(translatedName, palette[name]);
  };

  return (
    <Root className={classes.root}>
      {Object.keys(palette).map(name => (
        <ColorButton
          size={size}
          key={`${name}`}
          color={palette[name]}
          className={`muicc-palette-button ${classes.paletteButton}`}
          borderWidth={borderWidth}
          tooltip={name}
          disableAlpha={disableAlpha}
          onClick={() => handleSelectColor(name)}
        />
      ))}
    </Root>
  );
};

ColorPalette.propTypes = {
  borderWidth: PropTypes.number,
  size: PropTypes.number,
  palette: CommonTypes.palette.isRequired,
  forwardRef: PropTypes.shape({ current: PropTypes.elementType }),
  onSelect: PropTypes.func,
  /**
    Don't use alpha
   */
  disableAlpha: PropTypes.bool,
};

ColorPalette.defaultProps = {
  borderWidth: 0,
  size: 24,
  forwardRef: undefined,
  onSelect: undefined,
  disableAlpha: false,
};

export default ColorPalette;
