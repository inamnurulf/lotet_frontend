export function convertImageToBase64(file: File, callback: (base64Image: string) => void) {
  const reader = new FileReader();
  reader.onload = (event: ProgressEvent<FileReader>) => {
    const base64Image = event.target?.result as string;
    callback(base64Image);
  };
  reader.readAsDataURL(file);
}
