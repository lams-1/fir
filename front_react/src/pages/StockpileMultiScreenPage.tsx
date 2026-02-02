import { useEffect, useMemo, useState } from 'react'
import {
  Alert,
  Badge,
  Button,
  Card,
  Center,
  Group,
  Image,
  Loader,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
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

function FilePreview({ file }: { file: File }) {
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file)
    setUrl(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [file])

  if (!url) return null
  return (
    <Stack gap={4} align="center" w={110}>
      <Image src={url} w={80} h={60} fit="cover" radius="sm" alt={file.name} />
      <Text size="xs" truncate ta="center" w="100%" title={file.name}>
        {file.name}
      </Text>
    </Stack>
  )
}

function aggregateItems(items: ItemResult[]) {
  const map = new Map<string, ItemResult>()

  for (const item of items) {
    if (item.quantity <= 0) continue
    const key = `${item.CodeName}-${item.isCrated}`
    const existing = map.get(key)
    if (existing) {
      existing.quantity += item.quantity
      continue
    }
    map.set(key, { ...item })
  }

  return Array.from(map.values()).sort((a, b) => b.quantity - a.quantity)
}

export default function StockpileMultiScreenPage() {
  const [config, setConfig] = useState<AppConfig | null>(null)
  const [items, setItems] = useState<ItemResult[] | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [processedCount, setProcessedCount] = useState(0)

  const resetAll = () => {
    setSelectedFiles([])
    setItems(null)
    setMessage(null)
    setError(null)
    setProcessedCount(0)
  }

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

  const onFilesChange = (files: File[]) => {
    setSelectedFiles((prev) => [...prev, ...files])
    setError(null)
    setMessage(null)
  }

  const onAnalyze = async () => {
    if (!selectedFiles.length || !detector) return

    setError(null)
    setMessage(null)
    setItems(null)
    setIsProcessing(true)
    setProcessedCount(0)

    try {
      const results: ItemResult[] = []
      for (let i = 0; i < selectedFiles.length; i++) {
        setProcessedCount(i + 1)
        const itemsForFile = await detector.processFile(selectedFiles[i])
        results.push(...itemsForFile)
      }
      const aggregated = aggregateItems(results)
      setItems(aggregated)
      if (aggregated.length === 0) {
        setMessage('Aucun stockpile détecté dans ces images.')
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
      <Title order={2}>Stockpile (multi screen)</Title>

      <Alert variant="light" color="blue" title="Upload multiple">
        Vous pouvez déposer plusieurs images (glisser-déposer). Les quantités seront cumulées.
      </Alert>

      <Stack gap="xs">
        <Text size="sm" c="dimmed">
          Charger des images de stockpile (captures entières depuis la map)
        </Text>
        <Dropzone
          accept={IMAGE_MIME_TYPE}
          multiple
          onDrop={onFilesChange}
          onReject={() => {
            setError('Certains fichiers ont été rejetés. Formats acceptés : images.')
          }}
          disabled={!config || isProcessing}
        >
          <Stack align="center" gap="xs" p="md">
            <Dropzone.Accept>
              <Text fw={500}>Déposez les images ici</Text>
            </Dropzone.Accept>
            <Dropzone.Reject>
              <Text fw={500} c="red">
                Format non accepté
              </Text>
            </Dropzone.Reject>
            <Dropzone.Idle>
              <Text fw={500}>Glissez-déposez vos images ou cliquez pour sélectionner</Text>
            </Dropzone.Idle>
            <Text size="sm" c="dimmed">
              Images uniquement (PNG, JPG, etc.)
            </Text>
          </Stack>
        </Dropzone>
        {selectedFiles.length > 0 && (
          <Group gap="xs" justify="space-between" align="center" wrap="wrap">
            <Group gap="xs">
              <Button
                size="xs"
                onClick={onAnalyze}
                loading={isProcessing}
                disabled={!config}
              >
                Lancer l'analyse
              </Button>
              <Text size="sm" fw={500}>
                {selectedFiles.length} image(s) sélectionnée(s)
              </Text>
            </Group>
            <Button variant="light" size="xs" onClick={resetAll} disabled={isProcessing}>
              Réinitialiser
            </Button>
          </Group>
        )}
        {selectedFiles.length > 0 && (
          <ScrollArea h={110} offsetScrollbars>
            <Group gap="xs" align="flex-start">
              {selectedFiles.map((file, index) => (
                <FilePreview key={`${file.name}-${index}`} file={file} />
              ))}
            </Group>
          </ScrollArea>
        )}
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
          <Text>
            Analyse en cours... ({processedCount} / {selectedFiles.length})
          </Text>
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
