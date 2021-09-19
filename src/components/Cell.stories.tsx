import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Cell } from './Cell'

export default {
  title: 'Cell',
  component: Cell,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Cell>

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />
