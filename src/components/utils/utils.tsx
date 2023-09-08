export function formatString(text: string) {
    var outputText = text.replace(" ", "-");
    var outputText = outputText.replace("_", "-");
    var outputText = outputText.toLowerCase();
  
    return outputText;
  }