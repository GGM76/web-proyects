import { UploadTaskSnapshot } from "firebase/storage";
import React, { useState } from "react";
import { uploadFile } from "./firebase";
import "./styles.css";

type UploadObjectType = {
  preview: string;
  progress?: number;
};

type StatusObjectType = {
  [key: string]: UploadObjectType;
};

export default function App() {
  const [link, setLink] = useState<string | null>(null);
  const [links, setLinks] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [statusObject, setStatusObject] = useState<StatusObjectType>({});

  const getPreview = (file: File): Promise<string | ArrayBuffer | null> => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    return new Promise((res, rej) => {
      fileReader.onload = () => {
        res(fileReader.result);
      };
    });
  };

  const onUpdateUpload = async (
    snapshot: UploadTaskSnapshot,
    filename: string
  ) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setStatusObject((ob) => ({
      ...ob,
      [filename]: { ...ob[filename], progress }
    }));
  };

  // part 2
  const handleMultiple = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files || !evt.target.files.length) return;
    const files = Array.from(evt.target.files);
    const objects: StatusObjectType = {};
    for (let file of files) {
      const preview = (await getPreview(file)) as string;
      objects[file.name] = { preview };
    }
    setStatusObject(objects);
    const promises = files.map((file) => {
      return uploadFile(file, (snapshot) =>
        onUpdateUpload(snapshot, file.name)
      );
    });
    const ls = await Promise.all(promises);
    setLinks(ls);
  };

  // part 1
  const handleFile = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = evt.target;
    if (!files || !files.length) return;
    setLoading(true);
    const url = await uploadFile(files[0]);
    setLink(url);
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Upload files</h1>
      <h2>Start with one:</h2>
      <input accept="image/*" multiple onChange={handleMultiple} type="file" />
      <h3>Links:</h3>
      <ul>
        {links.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {Object.values(statusObject).map((ob) => {
          return (
            <div>
              <img
                width="180"
                src={ob.preview}
                key={ob.preview}
                alt="preview"
              />
              <p>{ob.progress}%</p>
            </div>
          );
        })}
      </div>
      {loading && (
        <img
          alt="spinner"
          width="200"
          src="https://c.tenor.com/I6kN-6X7nhAAAAAi/loading-buffering.gif"
        />
      )}
    </div>
  );
}

//***************************************************************************************************************************************
// import { useState } from 'react';
// import {storage} from './firebase';
// import { ref, uploadBytes, getStorage, deleteObject  } from "firebase/storage";

// function App() {
// 	const [image, setImage] = useState('');
// 	const upload = () => {
// 		if (image == null)
// 			return;
//     const imagesRef  = ref(storage, `/images/${image.name}`)
// 	// eslint-disable-next-line no-mixed-spaces-and-tabs
// 	imagesRef.fullPath
// 	// Reference's name is the last segment of the full path: 'space.jpg'
// 	// This is analogous to the file name
// 	imagesRef.name
// 	// Reference's bucket is the name of the storage bucket where files are stored
// 	imagesRef.bucket

	
      
//       uploadBytes(imagesRef, image).then((snapshot) => {
//         console.log('Uploaded a blob or file!');
//       })
// 	}
	
// 	const borrar = () =>{
// 		const imagesRef  = ref(storage, `/images/${image.name}`)
// 		const desertRef = ref(storage, imagesRef.fullPath)

// 		deleteObject(desertRef).then(() => {
// 			// File deleted successfully
// 			console.log('blob or file eliminated!');
// 		}).catch(() => {
// 			// Uh-oh, an error occurred!
// 			console.log('Error erasing the image');
// 		})
// 	}

// 	return (
// 		<div className="App">
// 			<center>
// 				<input type="file" onChange={(e) => 
// 				{ setImage(e.target.files[0]) }} />
// 				<button onClick={upload}>Upload</button>
// 				<button onClick={borrar}>Eliminate</button>
// 			</center>
// 		</div>
// 	);
// }

// export default App;
