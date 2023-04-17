import * as React from 'react';
import CommonContainer from '../common';
import NavbarComponent from '../../layout/navbar.component/navbar.component';
import FooterComponent from '../../layout/footer/footer.component';


const AgroContainer = () => {
  return (
    <>
    <NavbarComponent className='bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300'/>
    <CommonContainer subName='Agricultura' gradientsClasses='bg-gradient-to-r from-blue-500 via-blue-400 to-blue-200' primaryColor='blue'/>
    <FooterComponent className='bg-blue-600'/>
    </>
  );
};

export default AgroContainer;
