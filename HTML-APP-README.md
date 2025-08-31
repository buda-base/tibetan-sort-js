# Tibetan Sorting App

This repository includes a basic HTML page (`index.html`) that provides a simple web interface for the Tibetan sorting functionality.

## Features

- **Title**: "Tibetan Sorting app"
- **Large text input area**: For entering Tibetan text or EWTS (Wylie) transliteration, one item per line
- **Two sorting buttons**:
  - **Sort**: Sorts Unicode Tibetan text using the `compare` function
  - **Sort Wylie**: Sorts EWTS (Extended Wylie) transliteration using the `compareEwts` function
- **iframe-friendly**: The page is designed to work well when embedded in an iframe
- **Clean interface**: Simple, responsive design suitable for embedding

## Usage

1. Open `index.html` in a web browser
2. Enter Tibetan text or EWTS transliteration in the text area (one item per line)
3. Click "Sort" for Unicode Tibetan sorting or "Sort Wylie" for EWTS sorting
4. The sorted result will replace the original content in the text area

## For iframe embedding

The page is designed to be easily embedded as an iframe:

```html
<iframe src="path/to/index.html" title="Tibetan Sorting App" width="800" height="600"></iframe>
```

## Examples

### Unicode Tibetan text:
```
ཤེས་རབ་
སྙིང་པོ་
ཐེག་པ་
ཆོས་ཀྱི་
```

### EWTS/Wylie text:
```
shes rab
snying po
theg pa
chos kyi
```

Both examples will be sorted according to traditional Tibetan alphabetical order.