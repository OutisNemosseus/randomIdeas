#!/usr/bin/env python3
"""
Simple Python HTTP server with Cross-Origin Isolation headers for CCompiler.html
Run with: python serve-ccompiler.py
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import sys
import json
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Set Cross-Origin Isolation headers (required for Wasmer SDK)
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        super().end_headers()

    def do_GET(self):
        # Default to index.html if accessing root
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

    def do_POST(self):
        # Handle save file requests
        if self.path == '/save':
            try:
                # Read request body
                content_length = int(self.headers['Content-Length'])
                body = self.rfile.read(content_length)
                data = json.loads(body.decode('utf-8'))

                filename = data.get('filename', 'untitled.c')
                content = data.get('content', '')

                # Security: sanitize filename to prevent directory traversal
                filename = os.path.basename(filename)

                # Save to current directory
                filepath = os.path.join(os.getcwd(), filename)

                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)

                # Send success response
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()

                response = {
                    'success': True,
                    'path': filepath,
                    'message': f'Saved successfully to {filename}'
                }
                self.wfile.write(json.dumps(response).encode('utf-8'))

                print(f'Saved file: {filename}')

            except Exception as e:
                # Send error response
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()

                response = {
                    'success': False,
                    'error': str(e)
                }
                self.wfile.write(json.dumps(response).encode('utf-8'))

                print(f'Error saving file: {e}')
        else:
            # Unknown POST path
            self.send_response(404)
            self.end_headers()

if __name__ == '__main__':
    PORT = 8080

    print(f'\nServer running at http://localhost:{PORT}/')
    print(f'Serving CCompiler.html with Cross-Origin Isolation headers\n')
    print(f'   Cross-Origin-Opener-Policy: same-origin')
    print(f'   Cross-Origin-Embedder-Policy: require-corp\n')
    print(f'Features:')
    print(f'   - Multiple tabs for code snippets')
    print(f'   - Save files directly to current folder\n')
    print(f'Press Ctrl+C to stop\n')

    server = HTTPServer(('localhost', PORT), CORSRequestHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n\nServer stopped')
        sys.exit(0)
