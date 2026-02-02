import { AppShell, Burger, Group, NavLink, ScrollArea, Title } from '@mantine/core'
import { useDisclosure, useDocumentTitle } from '@mantine/hooks'
import { NavLink as RouterNavLink, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import StockpileIconsPage from './pages/StockpileIconsPage'
import StockpileMultiScreenPage from './pages/StockpileMultiScreenPage'

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Stockpile (icônes)', to: '/stockpile-icons' },
  { label: 'Stockpile (multi screen)', to: '/stockpile-multi' },
]

//  { label: 'Stockpile JSON', to: '/stockpile' },

function App() {
  const [mobileOpened, { toggle: toggleMobile, close: closeMobile }] = useDisclosure()
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true)
  const location = useLocation()
  const titles: Record<string, string> = {
    '/dashboard': 'Dashboard - 300 Tools',
    '/stockpile': 'Stockpile - 300 Tools',
    '/stockpile-icons': 'Stockpile (icônes) - 300 Tools',
    '/stockpile-multi': 'Stockpile (multi screen) - 300 Tools',
  }
  useDocumentTitle(titles[location.pathname] ?? '300 Tools')

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
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
              onClick={() => {
                if (mobileOpened) {
                  closeMobile()
                }
              }}
            />
          ))}
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/stockpile-icons" element={<StockpileIconsPage />} />
          <Route path="/stockpile-multi" element={<StockpileMultiScreenPage />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  )
}

          
// <Route path="/stockpile" element={<Navigate to="/stockpile-icons" replace />} />


export default App
