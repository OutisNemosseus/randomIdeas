@echo off
echo Starting local HTTP server on port 8000...
echo.
echo Access your files at: http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
