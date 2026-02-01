import { useEffect, useMemo, useState, type ChangeEvent } from 'react'
import './App.css'
import { createDetector, getAssetBase, loadConfig, type AppConfig, type ItemResult } from './core'

function App() {
  const [config, setConfig] = useState<AppConfig | null>(null)
  const [items, setItems] = useState<ItemResult[] | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

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

  const onFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file || !detector) return

    setError(null)
    setMessage(null)
    setItems(null)
    setIsProcessing(true)

    try {
      const result = await detector.processFile(file)
      setItems(result)
      if (result.length === 0) {
        setMessage('Aucun stockpile détecté dans cette image.')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="app">
      <h1>Stockpile JSON (single image)</h1>

      <div className="controls">
        <input type="file" accept="image/*" onChange={onFileChange} disabled={!config || isProcessing} />
      </div>

      {!config && !error && <p>Chargement de la configuration...</p>}
      {isProcessing && <p>Traitement en cours...</p>}
      {error && <p className="error">{error}</p>}
      {message && !error && !isProcessing && <p>{message}</p>}

      <pre className="output">
        {items ? JSON.stringify(items, null, 2) : ''}
      </pre>
    </div>
  )
}

export default App
