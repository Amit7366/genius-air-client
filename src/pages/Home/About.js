import React from 'react';
import { FaAdn,FaArrowCircleRight,FaBuffer } from 'react-icons/fa';

const About = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-6 text-center py-5">
                    <img src="https://images.pexels.com/photos/12907123/pexels-photo-12907123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-50 rounded'/>
                </div>
                <div className="col-md-6 py-5">
                    <h5 className='primary-color'>About Us</h5>
                    <h3>Creating A Community Of Life Long Learners</h3>
                    <p>
                        <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc null liobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra.
                        </small>
                    </p>
                    <div className='d-flex'>
                        <div>
                        <FaAdn className='custom-icons'/>
                        </div>
                        <div>
                            <h4>Flexible Classes</h4>
                            <p>
                            It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.
                            </p>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div>
                        <FaBuffer className='custom-icons'/>
                        </div>
                        <div>
                            <h4>Flexible Classes</h4>
                            <p>
                            It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.
                            </p>
                        </div>
                    </div>
                    <a href="" className='btn btn-primary'>Know More <FaArrowCircleRight/> </a>
                </div>
            </div>
            
        </div>
    );
};

export default About;