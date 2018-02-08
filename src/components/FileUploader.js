import React, { Component } from 'react';
import FineUploaderS3 from 'fine-uploader-wrappers/s3';
import Gallery from 'react-fine-uploader';

export default class FileUploader extends Component {

  componentWillMount() {
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

  render() {
    return (
      <div>
        <Gallery className="gallery" uploader={this.uploader} />
      </div>
    );
  }
}
