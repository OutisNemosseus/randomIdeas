#!/usr/bin/env python3
"""
Simple Python HTTP server with Cross-Origin Isolation headers for CCompiler.html
Run with: python serve-ccompiler.py
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Set Cross-Origin Isolation headers (required for Wasmer SDK)
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        super().end_headers()

    def do_GET(self):
        # Serve CCompiler.html as index
        if self.path == '/':
            self.path = '/CCompiler.html'
        return super().do_GET()

if __name__ == '__main__':
    PORT = 8080

    print(f'\n🚀 Server running at http://localhost:{PORT}/')
    print(f'📝 Serving CCompiler.html with Cross-Origin Isolation headers\n')
    print(f'   Cross-Origin-Opener-Policy: same-origin')
    print(f'   Cross-Origin-Embedder-Policy: require-corp\n')
    print(f'Press Ctrl+C to stop\n')

    server = HTTPServer(('localhost', PORT), CORSRequestHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n\n👋 Server stopped')
        sys.exit(0)
