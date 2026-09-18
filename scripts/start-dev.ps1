$ErrorActionPreference = "Continue"
$port = 3000

function Test-DevServer {
  try {
    $client = [System.Net.Sockets.TcpClient]::new()
    $iar = $client.BeginConnect("127.0.0.1", $port, $null, $null)
    $opened = $iar.AsyncWaitHandle.WaitOne(400, $false)
    $ok = $opened -and $client.Connected
    if ($ok) {
      try { $client.EndConnect($iar) | Out-Null } catch { $ok = $false }
    }
    $client.Close()
    return $ok
  } catch {
    return $false
  }
}

Write-Host "Starting Next.js..."

if (Test-DevServer) {
  Write-Host "- Local:         http://localhost:3000"
  exit 0
}

npm run dev
