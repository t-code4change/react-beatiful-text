#!/bin/bash

# Sync source code to example for standalone deployment

echo "Syncing source code to example..."

# Copy components
cp -r src/components example/lib/beautiful-text/
echo "✓ Components copied"

# Copy styles
cp -r src/styles example/lib/beautiful-text/
echo "✓ Styles copied"

# Copy utils
cp -r src/utils example/lib/beautiful-text/
echo "✓ Utils copied"

# Copy images
cp -r src/img example/lib/beautiful-text/
echo "✓ Images copied"

echo "✅ Sync complete! Example now has latest code."
