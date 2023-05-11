import * as React from 'react';
import CommonContainer from '../common';
import NavbarComponent from '../../layout/navbar.component/navbar.component';
import FooterComponent from '../../layout/footer/footer.component';
import ProductsService from '../../services/products';

const HealthContainer = () => {

  React.useEffect(() => {
    ProductsService.getProducts('health')
    .then((res) => {console.log(res)})
    .catch((err)=>{console.log(err)})
  },[]);


  return (
    <>
    <NavbarComponent className='bg-gradient-to-r from-teal-600 via-teal-500 to-teal-300'/>
    <CommonContainer subName='Salud y Belleza' gradientsClasses='bg-gradient-to-r from-teal-500 via-teal-400 to-teal-200' primaryColor='teal'/>
    <FooterComponent className='bg-teal-600'/>
    </>
  );
};

export default HealthContainer;
