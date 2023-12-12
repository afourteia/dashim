import { ActionIcon, Tooltip, useDirection } from '@mantine/core'
import { IconLanguageHiragana } from '@tabler/icons-react'

export default function UIDirection() {
  const { toggleDirection, dir } = useDirection()
  console.log(dir)

  return (
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
  )
}
