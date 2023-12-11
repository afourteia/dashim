import { Button } from '@mantine/core'
// import { CustomSwitch } from '~/components/CustomSwitch.tsx'
import MantineStyle from '~/components/MantineStyle.tsx'
import { NavbarSearch } from '~/components/NavbarSearch.tsx'

export default function Mantine() {
  return (
    <div>
      {/* <div>
        <Button fullWidth>Full width button</Button>
        <Button
          variant='gradient'
          gradient={{ from: 'grape', to: 'pink', deg: 90 }}
        >
          Gradient button
        </Button>
        <Button size='lg'>lg button</Button>
        <Button className='bg-black text-white' size='md'>
          md button with tailwind class
        </Button>
        <Button className='bg-red-700 ' size='md'>
          should be styled via classNames
        </Button>
      </div> */}
      {/* <div>
        <CustomSwitch />
      </div> */}
      <NavbarSearch />

      {/* <div>
        <MantineStyle />
      </div> */}
    </div>
  )
}
