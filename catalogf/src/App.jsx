// import { useState } from 'react';
// import storage from './firebase';
//import 'firebase/storage';


// function App() {
//   const [file, setFile] = useState(null);

//   function downloadFile(fileName) {
//     const storageRef = storage.ref();
//     const fileRef = storageRef.child(fileName);
//     return fileRef.getDownloadURL();
//   }

//   function uploadFile(file) {
//     const storageRef = storage.ref();
//     const fileRef = storageRef.child(file.name);
//     return fileRef.put(file);
//   }
  
  
//   function handleFileChange(event) {
//     setFile(event.target.files[0]);
//   }
  
//   async function handleUpload() {
//     if (file) {
//       try {
//         await uploadFile(file);
//         console.log("File uploaded successfully!");
//       } catch (error) {
//         console.error("Error uploading file:", error);
//       }
//     } else {
//       console.error("No file selected.");
//     }
//   }
  
//   async function handleDownload(fileName) {
//     try {
//       const url = await downloadFile(fileName);
//       console.log("Download URL:", url);
//       // Use the URL to display or download the file
//     } catch (error) {
//       console.error("Error downloading file:", error);
//     }
//   }
  
//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <button onClick={() => handleDownload("example.jpg")}>Download</button>
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import {storage} from './firebase';
import { ref, uploadBytes } from "firebase/storage";

function App() {
	const [image, setImage] = useState('');
	const upload = () => {
		if (image == null)
			return;
    const imagesRef  = ref(storage, `/images/${image.name}`)
	// eslint-disable-next-line no-mixed-spaces-and-tabs
	imagesRef.fullPath
	// Reference's name is the last segment of the full path: 'space.jpg'
	// This is analogous to the file name
	imagesRef.name
	// Reference's bucket is the name of the storage bucket where files are stored
	imagesRef.bucket
      
      uploadBytes(imagesRef, image).then((snapshot) => {
        console.log('Uploaded a blob or file!');
		console.log(image)
		console.log(imagesRef)
		console.log(imagesRef.fullPath)
		console.log(imagesRef.name)
		console.log(imagesRef.bucket)
      });

    // console.log("Guardando")
		// storage.ref(`/images/${image.name}`).put(image)
		// .on("state_changed", alert("success"), alert);
    
    // const storageRef = storage.ref(); // Make sure to call firebase.storage()
    // const fileRef = storageRef.child(image.name);
    // fileRef.put(image).then(() => {
    // console.log('File uploaded successfully!');
    // });

    // const storageRef = storage.ref();
    // const fileRef = storageRef.child(file.name);
    // return fileRef.put(image);
	}

	return (
		<div className="App">
			<center>
				<input type="file" onChange={(e) => 
				{ setImage(e.target.files[0]) }} />
				<button onClick={upload}>Upload</button>
			</center>
		</div>
	);
}

export default App;
