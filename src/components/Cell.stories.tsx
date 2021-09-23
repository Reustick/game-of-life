import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Cell } from './Cell'

export default {
  title: 'Cell',
  component: Cell,
  argTypes: {
    aliveColor: { control: 'color' },
    deadColor: { control: 'color' },
  },
} as ComponentMeta<typeof Cell>

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />

export const Alive = Template.bind({})
Alive.args = {
  alive: true,
  aliveColor: 'black',
  deadColor: 'white',
}
