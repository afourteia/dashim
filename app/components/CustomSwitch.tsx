import { Switch, Group } from '@mantine/core'
import classes from './CustomSwitch.module.css'

export function CustomSwitch() {
  console.log('classes', classes)
  return (
    <div>
      <div className='bg-slate-500 text-opacity-95 text-left align-middle'>
        This line is styled with tailwind
      </div>
      <Group
        className='bg-slate-100 text-red-900 '
        justify='center'
        align='center'
        p='xl'
      >
        <Switch
          label='default Switch'
          // className='bg-slate-600 align-text-top'

          styles={{
            body: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            root: { borderBlockColor: 'yellow', color: 'red' },
            label: { color: 'green' },
            track: {
              height: 5,
              overflow: 'visible',
              verticalAlign: 'middle',
            },
            thumb: { width: 30, height: 30, position: 'relative' },
          }}
          // color='green'
        />
        <Switch
          defaultChecked
          color='red'
          labelPosition='left'
          label='I agree to sell my privacy'
        />
      </Group>
    </div>
  )
}
