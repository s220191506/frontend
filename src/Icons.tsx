/**@jsxImportSource @emotion/react */
import React from 'react';
import user from './user.svg';
import { css } from '@emotion/react';
export const UserIcon = () => (
  <img
    src={user}
    alt="User"
    width="12px"
    css={css`
      width: 12px;
      opacity: 0.6;
    `}
  />
);
