import { Tabs, rem } from '@mantine/core'
import { Outlet, useNavigate, useParams } from '@remix-run/react'
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react'

export default function InstitutionLayout() {
  const navigate = useNavigate()
  const { tabValue } = useParams()
  const iconStyle = { width: rem(12), height: rem(12) }

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={(value) => navigate(`/dashboard/institutions/${value}`)}
      >
        <Tabs.List>
          <Tabs.Tab value='first'>First tab</Tabs.Tab>
          <Tabs.Tab value='second'>Second tab</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Outlet />
    </div>
  )
}
