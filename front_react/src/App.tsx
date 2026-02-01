import { AppShell, Burger, Group, NavLink, ScrollArea, Title } from '@mantine/core'
import { useDisclosure, useDocumentTitle } from '@mantine/hooks'
import { NavLink as RouterNavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import StockpilePage from './pages/StockpilePage'

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Stockpile', to: '/stockpile' },
]

function App() {
  const [opened, { toggle }] = useDisclosure()
  const location = useLocation()
  const titles: Record<string, string> = {
    '/dashboard': 'Dashboard - 300 Tools',
    '/stockpile': 'Stockpile - 300 Tools',
  }
  useDocumentTitle(titles[location.pathname] ?? '300 Tools')

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 260, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={4}>300</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <AppShell.Section component={ScrollArea} grow>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              label={item.label}
              component={RouterNavLink}
              to={item.to}
              active={location.pathname === item.to}
            />
          ))}
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/stockpile" element={<StockpilePage />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
