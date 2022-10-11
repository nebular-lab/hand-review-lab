import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from './Card'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Action>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />

export const EditAction = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EditAction.args = {
  canEdit: true,
  posText: 'HJ',
  moveText: 'raise',
}

export const noEditAction = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
noEditAction.args = {
  canEdit: false,
  posText: 'HJ',
  moveText: 'raise',
}
