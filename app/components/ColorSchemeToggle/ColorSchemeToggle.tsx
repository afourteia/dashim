'use client'

import { Button, Group, useMantineColorScheme } from '@mantine/core'
import { clsx } from 'clsx'

type props = {
  className?: string
}

export function ColorSchemeToggle({ className }: props) {
  const { setColorScheme } = useMantineColorScheme()

  return (
    <div className={clsx(className)}>
      <Group justify='center'>
        <Button onClick={() => setColorScheme('light')}>Light</Button>
        <Button onClick={() => setColorScheme('dark')}>Dark</Button>
        <Button onClick={() => setColorScheme('auto')}>Auto</Button>
      </Group>
    </div>
  )
}
