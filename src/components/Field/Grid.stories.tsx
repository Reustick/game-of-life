import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Grid } from './Grid'

export default {
  title: 'Grid',
  component: Grid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />

export const Grid50x30 = Template.bind({})
Grid50x30.args = {
  x: 50,
  y: 30,
}

export const Grid70x50 = Template.bind({})
Grid70x50.args = {
  x: 70,
  y: 50,
}

export const Grid100x80 = Template.bind({})
Grid100x80.args = {
  x: 100,
  y: 80,
}
