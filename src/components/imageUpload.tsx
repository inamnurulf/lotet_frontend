// // components/ImageUploadForm.tsx
// import { useState, useRef } from 'react';
// import { BiCamera } from "react-icons/bi";
// import { convertImageToBase64 } from '@/helper/imageToBase64';

// const ImageUploadForm: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState<File | null>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files && e.target.files[0];

//     if (file) {
//       setSelectedImage(file);

//       convertImageToBase64(file, (base64Image) => {
//         setPreviewUrl(base64Image);
//       });

//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add logic to upload the image (e.g., using a backend API) width={200}
//     console.log('Image uploaded:', selectedImage);
//   };

//   const handleImageSelect = () => {
//     if (formRef.current) {
//       formRef.current.submit();
//     }
//   };

//   return (
//     <form 
//         ref={formRef}
//         onSubmit={handleSubmit}
//         className='w-full h-52 overflow-hidden bg-zinc-300 rounded relative mb-2'
//         style={{ backgroundImage: `url(${previewUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//             <input id="uploadButton" type="file" accept="image/*" onChange={handleImageChange} className="sr-only"/>
//                 <label
//                     htmlFor="uploadButton"
//                     className="w-fit cursor-pointer transform transition-transform hover:scale-105 bg-primary text-white py-2 px-4 rounded inline-block float-right absolute bottom-2 right-2"
//                     onClick={handleImageSelect}
//                 >
//                     <BiCamera></BiCamera>
//                 </label>
//     </form>
//   );
// };

// export default ImageUploadForm;

// components/ImageUploadForm.tsx
import { useState, useRef } from 'react';
import { BiCamera } from "react-icons/bi";
import { convertImageToBase64 } from '@/helper/imageToBase64';

interface ImageUploadFormProps {
    onImageChange: (url: string | null) => void;
  }

const ImageUploadForm: React.FC<ImageUploadFormProps> = ({ onImageChange }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setSelectedImage(file);

      convertImageToBase64(file, (base64Image) => {
        setPreviewUrl(base64Image);
        onImageChange(base64Image);
      });
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    //   console.log(previewUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add logic to upload the image (e.g., using a backend API)
    console.log('Image uploaded:', selectedImage);
  };

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit}
      className='w-full h-52 overflow-hidden bg-zinc-300 rounded relative mb-2'
      style={{ backgroundImage: `url(${previewUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <input 
        id="uploadButton" 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        className="sr-only" 
        ref={fileInputRef} 
      />
      <button
        type="button"
        className="w-fit cursor-pointer transform transition-transform hover:scale-105 bg-primary text-white py-2 px-4 rounded inline-block float-right absolute bottom-2 right-2"
        onClick={handleButtonClick}
      >
        <BiCamera />
      </button>
    </form>
  );
};

export default ImageUploadForm;
