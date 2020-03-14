import React, { Component } from 'react';
// import React, {useState} from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';

class App extends Component {
  // constructor() {

  //   const [image, setImage] = useState('');
  //   const [loading, setLoading] = useState(false);
  //   const uploadImage = async e => {
  //     const files = e.target.files;
  //     const data = new FormData();
  //     data.append('file', files[0]);
  //     data.append('upload_preset', 'nwrcuav8');
  //     setLoading(true);
  //     const res = await fetch(
  //       'https://api.cloudinary.com/v1_1/dfale2srt/image/upload',
  //       {
  //         method: 'POST',
  //         body: data
  //       }
  //     );
  //     const file = await res.json();
  //     setImage(file.secure_url);
  //     setLoading(false);
  //   };
  // }

  render() {
    return (
      <HashRouter>
        <div>{routes}</div>

        {/* <div className='App'>
          <h1>Upload Image</h1>
          <input
            type='file'
            name='file'
            placeholder='upload an image'
            onChange={uploadImage}
          />
          {loading ? (
            <h3>loading...</h3>
          ) : (
            <img src={image} style={{ width: '300px' }} />
          )}
        </div> */}
      </HashRouter>
    );
  }
}

export default App;
