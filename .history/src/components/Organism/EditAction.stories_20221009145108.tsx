import EditAction from './EditAction'
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default {
  title: 'Action',
  component: EditAction,
}as ComponentMeta<typeof Button>

export const Action = () => <EditAction posText="HJ" moveText="RAISE" />