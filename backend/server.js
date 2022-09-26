function doGet(e) {
  return HtmlService.createTemplateFromFile('frontend/index')
  .evaluate()
  .setTitle('Kaira')
  .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
  .setSandboxMode(HtmlService.SandboxMode.NATIVE)
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
  .setFaviconUrl('https://cdn-icons-png.flaticon.com/512/2689/2689469.png')
}

/**
 * Retorna contenido HTML evaluado de manera dinámica.
 * @param {String} path Nombre del elemento HTML solicitado
 */
function include(path){
    return HtmlService.createHtmlOutputFromFile(path).getContent()
}