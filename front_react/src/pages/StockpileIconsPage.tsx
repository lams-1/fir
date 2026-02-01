import { useEffect, useMemo, useState } from 'react'
import {
  Anchor,
  Badge,
  Card,
  Center,
  FileInput,
  Group,
  Image,
  Loader,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  createDetector,
  getAssetBase,
  loadConfig,
  type AppConfig,
  type ItemResult,
} from '../stockpile'

const ICON_SIZE = 48

function buildVersionedIconUrl(
  codeName: string,
  isCrated: boolean,
  version: string,
  assetBase: string,
) {
  if (!codeName || !version) return null
  const suffix = isCrated ? '-crated' : ''
  const withSlash = `/foxhole/${version}/icons/${codeName}${suffix}.png`
  return assetBase ? `${assetBase}${withSlash}` : withSlash
}

type IconTileProps = {
  item: ItemResult
  iconUrl: string | null
}

function IconTile({ item, iconUrl }: IconTileProps) {
  const [broken, setBroken] = useState(false)

  return (
    <Card withBorder padding="xs" radius="md">
      <Group gap="xs" justify="space-between" align="center" wrap="nowrap">
        {!broken && iconUrl ? (
          <Image
            src={iconUrl}
            alt={item.DisplayName}
            w={ICON_SIZE}
            h={ICON_SIZE}
            fit="contain"
            loading="lazy"
            decoding="async"
            onError={() => setBroken(true)}
          />
        ) : (
          <Text size="xs" c="dimmed" lineClamp={2}>
            {item.DisplayName}
          </Text>
        )}
        <Badge size="sm" variant="light" color="gray">
          {item.quantity}
        </Badge>
      </Group>
    </Card>
  )
}

export default function StockpileIconsPage() {
  const [config, setConfig] = useState<AppConfig | null>(null)
  const [items, setItems] = useState<ItemResult[] | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  useEffect(() => {
    loadConfig()
      .then(setConfig)
      .catch((err) => setError(err instanceof Error ? err.message : String(err)))
  }, [])

  const detector = useMemo(() => {
    if (!config) return null
    return createDetector({
      version: config.version,
      assetBase: getAssetBase(),
    })
  }, [config])

  const onFileChange = async (file: File | null) => {
    setSelectedFile(file)

    if (!file || !detector) {
      setItems(null)
      setMessage(null)
      setError(null)
      return
    }

    setError(null)
    setMessage(null)
    setItems(null)
    setIsProcessing(true)

    try {
      const result = await detector.processFile(file)
      const filtered = result.filter((item) => item.quantity > 0)
      setItems(filtered)
      if (filtered.length === 0) {
        setMessage('Aucun stockpile détecté dans cette image.')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setIsProcessing(false)
    }
  }

  const assetBase = getAssetBase()
  const version = config?.version ?? ''

  return (
    <Stack gap="md" p="md">
      <Title order={2}>Stockpile (icônes)</Title>

      <Stack gap="xs">
        <FileInput
          label="Charger une image d'un stockpile (capture entière de l'écran depuis la map)"
          accept="image/*"
          clearable
          value={selectedFile}
          onChange={onFileChange}
          disabled={!config || isProcessing}
        />
        <Anchor href="/ui-assets/images/stock_exemple.jpg" download size="sm">
          Télécharger une image d'exemple
        </Anchor>
      </Stack>

      {!config && !error && (
        <Group gap="xs">
          <Loader size="sm" />
          <Text>Chargement de la configuration...</Text>
        </Group>
      )}
      {isProcessing && (
        <Group gap="xs">
          <Loader size="sm" />
          <Text>Traitement en cours...</Text>
        </Group>
      )}
      {error && <Text c="red">{error}</Text>}
      {message && !error && !isProcessing && <Text>{message}</Text>}

      {items && items.length > 0 && (
        <SimpleGrid
          cols={{ base: 2, sm: 3, md: 4, lg: 6, xl: 8 }}
          spacing={{ base: 'sm', sm: 'md' }}
        >
          {items.map((item) => (
            <IconTile
              key={`${item.CodeName}-${item.quantity}-${item.isCrated}`}
              item={item}
              iconUrl={buildVersionedIconUrl(item.CodeName, item.isCrated, version, assetBase)}
            />
          ))}
        </SimpleGrid>
      )}

      {items && items.length === 0 && !isProcessing && !error && !message && (
        <Center>
          <Text c="dimmed">Aucun item à afficher.</Text>
        </Center>
      )}
    </Stack>
  )
}
