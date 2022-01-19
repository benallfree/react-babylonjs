import React, { FC } from 'react'
import { BasicScene } from './BasicScene'

export const BabylonApp: FC = ({ children }) => (
  <div style={{ flex: 1, display: 'flex' }}>
    <BasicScene>{children}</BasicScene>
  </div>
)
