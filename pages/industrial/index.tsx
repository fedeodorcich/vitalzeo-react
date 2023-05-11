import * as React from 'react';
import CommonContainer from '../common';
import NavbarComponent from '../../layout/navbar.component/navbar.component';
import FooterComponent from '../../layout/footer/footer.component';


const AnimalsContainer = () => {
  return (
    <>
    <NavbarComponent className='bg-gradient-to-r from-rose-600 via-rose-500 to-rose-300'/>
    <CommonContainer subName='Animales' gradientsClasses='bg-gradient-to-r from-rose-500 via-rose-400 to-rose-200' primaryColor='rose'/>
    <FooterComponent className='bg-rose-600'/>
    </>
  );
};

export default AnimalsContainer;
