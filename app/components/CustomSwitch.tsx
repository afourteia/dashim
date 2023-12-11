import { Switch, Group } from '@mantine/core'
import classes from './CustomSwitch.module.css'

export function CustomSwitch() {
  console.log('classes', classes)
  return (
    <div>
      <div className='bg-white text-opacity-95 text-right align-middle'>
        This line is styled with tailwind
      </div>
      <Group justify='center' align='center' p='xl'>
        <Switch
          label='Custom Switch'
          className='bg-slate-600 align-text-top'
          styles={{
            body: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            root: { borderBlockColor: 'yellow', color: 'red' },
            label: { color: 'green' },
            track: {
              height: 10,
              overflow: 'visible',
              verticalAlign: 'middle',
            },
            thumb: { width: 16, height: 16 },
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
