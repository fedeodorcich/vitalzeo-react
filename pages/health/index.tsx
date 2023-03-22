import * as React from 'react';
import CommonContainer from '../common';
import NavbarComponent from '../../layout/navbar.component/navbar.component';
import FooterComponent from '../../layout/footer/footer.component';


const HealthContainer = () => {
  return (
    <>
    <NavbarComponent className='bg-gradient-to-r from-teal-600 via-teal-500 to-teal-300'/>
    <CommonContainer/>
    <FooterComponent className='bg-teal-600'/>
    </>
  );
};

export default HealthContainer;
