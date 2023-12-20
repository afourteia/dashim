import { ActionIcon, Tooltip, useDirection } from '@mantine/core'
import { IconLanguageHiragana } from '@tabler/icons-react'
import { clsx } from 'clsx'

type props = {
  className?: string
}

export default function UIDirection({ className }: props) {
  const { toggleDirection, dir } = useDirection()
  return (
    <div className={clsx(className)}>
      <Tooltip label={dir === 'rtl' ? 'English' : 'عـربـي'}>
        <ActionIcon
          onClick={() => toggleDirection()}
          variant='default'
          radius='md'
          size='lg'
        >
          {dir === 'rtl' ? (
            <IconLanguageHiragana stroke={1.5} />
          ) : (
            <IconLanguageHiragana stroke={1.5} />
          )}
        </ActionIcon>
      </Tooltip>
    </div>
  )
}
