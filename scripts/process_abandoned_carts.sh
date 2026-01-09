#!/bin/bash
# Process abandoned carts - runs every 5 minutes
# Calls the backend endpoint to check for abandoned carts and trigger n8n webhooks

BACKEND_URL="http://localhost:8001"
LOG_FILE="/var/log/abandoned_carts.log"

# Make the API call
response=$(curl -s -X POST "${BACKEND_URL}/api/cart/process-abandoned" \
  -H "Content-Type: application/json" \
  -w "\n%{http_code}" 2>&1)

# Extract status code (last line) and body (everything else)
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | sed '$d')

# Log the result
timestamp=$(date '+%Y-%m-%d %H:%M:%S')
echo "[$timestamp] HTTP $http_code - $body" >> "$LOG_FILE"

# Keep log file from growing too large (keep last 1000 lines)
if [ -f "$LOG_FILE" ]; then
  tail -1000 "$LOG_FILE" > "${LOG_FILE}.tmp" && mv "${LOG_FILE}.tmp" "$LOG_FILE"
fi
