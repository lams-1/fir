import http.server
import socketserver
import mimetypes

PORT = 8000

# Ensure .mjs files are served as text/javascript (Critical for the app to work)
mimetypes.add_type('text/javascript', '.mjs')

Handler = http.server.SimpleHTTPRequestHandler

print(f'Serving at http://localhost:{PORT}')
with socketserver.TCPServer(('', PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
