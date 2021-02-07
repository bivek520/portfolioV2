import React, { Component } from 'react';
import { Document, pdfjs, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

class Resume extends Component {
	download() {}
	render() {
		console.log(process.env.PUBLIC_URL + '/images/Resume_Bivek.pdf');
		return (
			<div className='container-fluid my-3'>
				<a
					href='/portfolioV2/images/Resume_Bivek.pdf'
					download
					target='_blank'
					className='btn btn-primary mx-2 '
				>
					Download Resume
				</a>

				<div className='d-flex justify-content-center '>
					<span className='border border-5  border-dark'>
						<Document
							file={process.env.PUBLIC_URL + `/images/Resume_Bivek.pdf`}
							loading={<div className='spinner-border text-success' role='status'></div>}
						>
							<Page pageNumber={1} height={600} />
						</Document>
					</span>
				</div>
			</div>
		);
	}
}

export default Resume;
