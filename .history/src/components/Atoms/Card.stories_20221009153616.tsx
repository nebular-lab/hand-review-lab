import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from './Card'


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const D8 = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
D8.args = {
  mark:"d",
  
}

export const noEditAction = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
noEditAction.args = {
  canEdit: false,
  posText: 'HJ',
  moveText: 'raise',
}
