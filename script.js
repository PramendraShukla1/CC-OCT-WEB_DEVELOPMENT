const { PDFNet } = require('@pdftron/pdfnet-node');

async function main() {
  await PDFNet.addResourceSearchPath('./');

  // check if the module is available
  if (!(await PDFNet.StructuredOutputModule.isModuleAvailable())) {
    return;
  }

  await PDFNet.Convert.fileToWord('./Get_Started_With_Smallpdf.pdf', 'output.docx');
}

PDFNet.runWithCleanup(main, 'demo:1665871595792:7ac104560300000000ee94ce473b0064d886acd8b19697ead469637578');