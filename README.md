# SimploModule

SimploModule is a simple file extension that makes your code easier to read with exporting and loading modules.

## Installation

Download the lastest release and add it to your folder, to use it add a line to your main code with:

```JavaScript
const { LoadModule ExportModule } = require("./SimploModule")
```

## Documentation

```JavaScript
LoadModule(FileName)
```

Returns: Variables assigned from filename, wrap as { variables } = LoadModule()

Usage: Requires file name and returns variables.

```JavaScript
ExportModule(Name,Variable)
```

Returns: none

Usage: Export modules with variable value as name.
