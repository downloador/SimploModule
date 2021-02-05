function LoadModule(FileName) {
  return require(`./${FileName}`)
}

function ExportModule(ModuleName,Parameter) {
 exports[ModuleName] = Parameter 
}

ExportModule("LoadModule",LoadModule)
ExportModule("ExportModule",ExportModule)
