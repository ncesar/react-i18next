import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class News extends Component {

   render(){
     const { t } = this.props;

     return (
       <h1>{t('news.title')}</h1>
     )
   };
};

export default withTranslation()(News);