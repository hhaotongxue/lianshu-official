# Quick Start

## Installation

### Using Bun (Recommended)

```bash
bun install -g lianshu-editor
```

### Using npm

```bash
npm install -g lianshu-editor
```

## Launch Editor

```bash
lianshu-editor
```

The editor will open in your browser.

## Open Files

```bash
# Open a single file
lianshu-editor path/to/file.md

# Open a directory
lianshu-editor path/to/directory
```

## Basic Usage

### Create New File

1. Click the "New" button in the top left
2. Enter the file name
3. Start editing

### Editing Markdown

The editor supports standard Markdown syntax:

```markdown
# Heading 1
## Heading 2

**Bold** *Italic* ~~Strikethrough~~

- List item 1
- List item 2

1. Ordered list 1
2. Ordered list 2

[Link](https://example.com)

![Image](image.png)
```

### Keyboard Shortcuts

- `Ctrl/Cmd + S`: Save
- `Ctrl/Cmd + N`: New file
- `Ctrl/Cmd + O`: Open file
- `Ctrl/Cmd + P`: Command palette
- `Ctrl/Cmd + /`: Toggle preview

## Configuration

The editor config file is located at `~/.lianshu-editor/config.json`:

```json
{
  "theme": "dark",
  "fontSize": 14,
  "autoSave": true,
  "preview": "side"
}
```

## Next Steps

- Learn about [Features](/en/lianshu-editor/features)
- Read the [User Guide](/en/lianshu-editor/guide)
- Check the [API Docs](/en/lianshu-editor/api)
