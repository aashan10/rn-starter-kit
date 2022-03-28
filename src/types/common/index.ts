import {ReactElement} from 'react';

export type MayAcceptChildren = {
  children?: ReactElement | Array<ReactElement> | null;
};

export type AcceptsChildren = {
  children: ReactElement | Array<ReactElement>;
};
