import React, { FC, ReactElement } from 'react';
import { PageSidebar } from '~/components/shared/PageSidebar';
import { Header } from './components/Header';
import { Content } from './components/Content';

export const IndexPageSidebar: FC = (): ReactElement => {
    return <PageSidebar header={<Header />} content={<Content />} />;
};
