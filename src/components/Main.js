require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Image, Grid, Row, Col, Jumbotron} from 'react-bootstrap';
import TeaCard from './TeaCard.js';

class AppComponent extends React.Component {
  render() {
    let Menu = require('react-burger-menu').push;
    let stockholmBopTitle = 'Stockholm Estate BOP';
    let stockholmBopDescription = 'Straight from an estate that started its history under Mackwoods, a legendary name in Ceylon tea.  As plain tea it cordially \
                                   invites you to blend with a fresh cup of milk.  Once you taste this impeccable blend there is no going back to any other breakfast tea.';

    let sudowelipothaSuperOpaTitle = 'Suduwelipothahena Estate Super OPA';
    let sudowelipothaSuperOpaDescription = 'Produces a liquor so splendid as the tea itself.  This is a leafy tea unilike BOP which is more fine, hence the taste will deliver the best \
                                            of Ceylon orthodox tea, a brisk and fresh sensation.';


    return (
        <div>
          <div id="outer-container" className="page1">
            <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} >
              <a id="home" className="menu-item" href="" onClick={this.changePage}/>
            </Menu>
            <main id="page-wrap">
              <Grid>
                <Row>
                  <Col lgPull={3} lg={3} md={3}>
                    <Image id="logo" src="images/logo1.png" thumbnail />
                  </Col>
                  <Col lgPull={2} lg={9} md={9} >
                    <Jumbotron id="store-title">
                      <h1>THE TEA STORE</h1>
                    </Jumbotron>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} md={6} >
                    <TeaCard description={stockholmBopDescription} title={stockholmBopTitle}/>
                  </Col>
                  <Col lg={3} md={6}>
                    <TeaCard description={sudowelipothaSuperOpaDescription} title={sudowelipothaSuperOpaTitle}/>
                  </Col>
                  <Col lg={3} md={6}>
                    <TeaCard/>
                  </Col>
                  <Col lg={3} md={6}>
                    <TeaCard/>
                  </Col>
                 </Row>
               </Grid>
             </main>
           </div>
           <div className="page2">

           </div>
         </div>


    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
