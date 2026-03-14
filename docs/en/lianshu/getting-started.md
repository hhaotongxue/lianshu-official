# Quick Start

## Installation

### Using Bun (Recommended)

```bash
bun install -g lianshu
```

### Using npm

```bash
npm install -g lianshu
```

## Initialize

After installation, run the following command to initialize Lianshu:

```bash
lianshu init
```

This will create the necessary configuration files and directory structure.

## Start

```bash
lianshu start
```

Lianshu will start locally and you can access it at `http://localhost:3000`

## Configure AI Model

Lianshu supports multiple AI models, configure in the config file:

```json
{
  "ai": {
    "provider": "local",
    "model": "llama3",
    "apiKey": ""
  }
}
```

## Next Steps

- Learn about [Features](/en/lianshu/features)
- Read the [User Guide](/en/lianshu/guide)
- Check the [API Docs](/en/lianshu/api)
