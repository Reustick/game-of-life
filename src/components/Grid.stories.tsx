import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Grid } from './Grid'

export default {
  title: 'Grid',
  component: Grid,
} as ComponentMeta<typeof Grid>

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />
