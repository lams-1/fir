import { Box, Center, Image, Text, Title } from '@mantine/core'

export default function DashboardPage() {
  return (
    <div style={{ padding: '1rem' }}>
      <Title order={2}>Dashboard</Title>
      <Text c="dimmed">Placeholder pour un futur écran.</Text>

      <Center mt="md">
        <Box style={{ width: '100%', maxWidth: 900 }}>
          <Image
            src="/ui-assets/images/Zonure.jpg"
            alt="Zonure"
            w="100%"
            h={480}
            fit="contain"
            loading="lazy"
            decoding="async"
          />
        </Box>
      </Center>
    </div>
  )
}
