import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Cell } from './Cell'

export default {
  title: 'Cell',
  component: Cell,
  argTypes: {
    aliveColor: { control: 'color' },
    oldColor: { control: 'color' },
    deadColor: { control: 'color' },
  },
} as ComponentMeta<typeof Cell>

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />

export const Alive = Template.bind({})
Alive.args = {
  aliveColor: '#fbb',
}

export const Old = Template.bind({})
Alive.args = {
  oldColor: '#e44',
}

export const Dead = Template.bind({})
Alive.args = {
  deadColor: '#000',
}
