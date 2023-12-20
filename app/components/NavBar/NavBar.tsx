import { useState } from 'react'
import { Center, Tooltip, UnstyledButton, Stack, rem } from '@mantine/core'
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react'
import logo from '@assets/logo.png'
import classes from './NavBar.module.css'

interface NavbarLinkProps {
  icon: typeof IconHome2
  label: string
  active?: boolean
  onClick?(): void
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position='right' transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  )
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
]

export function NavBar() {
  const [active, setActive] = useState(2)

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ))

  return (
    <nav
      className={(classes.navbar, 'flex flex-col justify-start h-full pt-2')}
    >
      <Center className='grow-0'>
        <img
          className='object-contain max-h-[30px] max-w-[30px]'
          src={logo}
          alt='Logo'
        />
      </Center>
      <div className='flex flex-col justify-between grow'>
        <div className={classes.navbarMain}>
          <Stack justify='center' gap={0}>
            {links}
          </Stack>
        </div>
        <Stack justify='center' className='self-end' gap={0}>
          <NavbarLink icon={IconSwitchHorizontal} label='Change account' />
          <NavbarLink icon={IconLogout} label='Logout' />
        </Stack>
      </div>
    </nav>
  )
}
