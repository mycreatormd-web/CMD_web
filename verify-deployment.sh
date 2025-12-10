#!/bin/bash

echo "🔍 CreatorMD Deployment Verification"
echo "====================================="
echo ""

# Check Node.js version
echo "✓ Checking Node.js version..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo "  Node.js: $NODE_VERSION"
    
    MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
    if [ "$MAJOR_VERSION" -ge 18 ]; then
        echo "  ✅ Node.js version is compatible (18+)"
    else
        echo "  ⚠️  Node.js version should be 18 or higher"
    fi
else
    echo "  ❌ Node.js is not installed"
    exit 1
fi

echo ""

# Check if node_modules exists
echo "✓ Checking dependencies..."
if [ -d "node_modules" ]; then
    echo "  ✅ Dependencies are installed"
else
    echo "  ⚠️  Dependencies not installed. Run: npm install"
fi

echo ""

# Check critical files
echo "✓ Checking deployment files..."
files=(
    "netlify.toml"
    ".eslintrc.json"
    ".npmrc"
    "next.config.js"
    "app/layout.tsx"
    "app/page.tsx"
    "app/components/HeroSection.tsx"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ Missing: $file"
    fi
done

echo ""

# Try to build
echo "✓ Testing production build..."
echo "  Running: npm run build"
echo ""

npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 SUCCESS! Your project is ready for deployment!"
    echo ""
    echo "Next steps:"
    echo "  1. Push to GitHub: git push origin main"
    echo "  2. Deploy on Netlify: https://app.netlify.com/start"
    echo "  3. Or test locally: npm start"
else
    echo ""
    echo "❌ Build failed. Check the errors above."
    echo "Common fixes:"
    echo "  - Run: npm install"
    echo "  - Check for syntax errors in components"
    echo "  - Review error messages carefully"
fi

echo ""
echo "====================================="
