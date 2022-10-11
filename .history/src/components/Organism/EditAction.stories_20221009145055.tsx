import EditAction from './EditAction'
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  title: 'Action',
  component: EditAction,
}as c

export const Action = () => <EditAction posText="HJ" moveText="RAISE" />
