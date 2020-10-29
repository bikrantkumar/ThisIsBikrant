import React, {Component} from 'react'
import {Document, Page, pdfjs} from 'react-pdf'
class Resume extends Component{
    state = {
        numPages: null,
        pageNumber: 1,
      }
      constructor(props){
        super(props);
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs}/pdf.worker.js`;
    }
      onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
      }
    
      render() {
        const { pageNumber, numPages } = this.state;
    
        return (
          <div>
            <Document
              file="../Bikrant_101703145_Resume.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        );
      }
}
export default Resume;