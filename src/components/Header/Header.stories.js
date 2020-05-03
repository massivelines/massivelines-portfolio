import React from 'react';
import Header from '.';

export default {
  title: 'Components/Header',
  component: Header,
};

export const homePage = () => <Header homePage siteTitle="site title" />;

export const otherPages = () => <Header siteTitle="site title" />;
