import http.server
import mimetypes
import os

mimetypes.add_type('text/javascript', '.mjs')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('text/javascript', '.js')

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map['.mjs'] = 'text/javascript'
Handler.extensions_map['.css'] = 'text/css'
Handler.extensions_map['.js'] = 'text/javascript'

# Check what mimetype is guessed by mimetypes module
print(f"mimetypes check for .css: {mimetypes.guess_type('test.css')}")
print(f"mimetypes check for .mjs: {mimetypes.guess_type('test.mjs')}")

# Check what Handler.extensions_map has
print(f"Handler.extensions_map['.css']: {Handler.extensions_map.get('.css')}")
