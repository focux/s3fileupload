import React, { Component } from 'react';
import FineUploaderS3 from 'fine-uploader-wrappers/s3';
import Gallery from 'react-fine-uploader';
import Dropzone from 'react-fine-uploader/dropzone';
import FileInput from 'react-fine-uploader/file-input';
import Thumbnail from 'react-fine-uploader/thumbnail';
import RetryButton from 'react-fine-uploader/retry-button';
import Status from 'react-fine-uploader/status';
import Filename from 'react-fine-uploader/filename';
import ProgressBar from 'react-fine-uploader/progress-bar';
import '../../node_modules/react-fine-uploader/gallery/gallery.css'

export default class FileUploader extends Component {

  state = {
    submittedFiles: []
  };

  constructor(props) {
    super(props);
    this.uploader = new FineUploaderS3({
      options: {
        request: {
          endpoint: 'https://nutrigene-dna-storage.s3-us-west-1.amazonaws.com',
          accessKey: 'AKIAJ44OPXIC47AA6MBA'
        },
        signature: {
          endpoint: '/s3handler',
          version: 4
        },
        chunking: {
          enabled: true
        },
        objectProperties: {
          region: 'us-west-1'
        }
      }
    });
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    this.uploader.on('statusChange', (id, oldStatus, newStatus) => {
        if (newStatus === 'submitted') {
            const submittedFiles = this.state.submittedFiles

            submittedFiles.push(id)
            this.setState({ submittedFiles })
        }
    })
}


  render() {
    console.log(this.state);
    return (
      <div>
      <ProgressBar uploader={this.uploader} className='react-fine-uploader-gallery-progress-bar' style={{ display: 'block', position: 'relative' }}/>
      <FileInput multiple accept='image/*' uploader={ this.uploader }>
      <Dropzone style={ { border: '1px dotted', height: 200, width: 200, display: 'block', marginTop: '80px' } }
              uploader={this.uploader}
    >
      Drop or click to upload a File
    </Dropzone>
    </FileInput>
   
    {
      this.state.submittedFiles.map(id => (
           <div key={id}>
           <Status id={id} uploader={this.uploader} />
              <Thumbnail id={id} uploader={this.uploader}/>
              <Filename id={ id } uploader={ this.uploader } />
              <RetryButton id={id} uploader={this.uploader}/>
             
           </div>
       ))
   }
      </div>
    );
  }
}

// <Gallery className="gallery" uploader={this.uploader} />
