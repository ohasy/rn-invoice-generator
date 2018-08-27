import genHtmlString from "./genHtmlString";

async function createPDF() {
    let options = {
      html: genHtmlString(),
      fileName: 'blue4',
      directory: 'docs',
    };

    let file = await RNHTMLtoPDF.convert(options)
    console.log(file.filePath);
    console.log("file::?",file)
    console.log(Linking.canOpenURL(file.filePath))
    if(Linking.canOpenURL(file.filePath)){
      return Linking.openURL("file://"+file.filePath)
    }
  }

  export default createPDF;