import React, { useEffect } from 'react';
import { Paper, Grid, Box, InputBase, IconButton, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';

import Header from '../components/Header';

import ladyInYellow from '../assets/images/home/ladyInYellow.png';
import guyOnYellowBackground from '../assets/images/home/guyOnYellowBackground.png';
import twoGuysOnWhiteBackground from '../assets/images/home/twoGuysOnWhiteBackground.png';

const usePaperStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    background: '#0177B6',
    boxShadow: '0 0 0 0',
    width: '100%',
    height: 'calc(100vh - 90px)',
    borderRadius: 0,
    overflow: 'hidden',
    position: 'relative'
  },
}));
const useInputStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justify: 'content',
    alignItems: 'content',
    backgroundColor: '#FFF',
    marginLeft: 0,
    width: '35%',
    height: 50,
    padding: 20,
    paddingLeft: 5,
    fontSize: 15
  },
}));

const Home = () => {
  const paperClasses = usePaperStyles();
  const inputClasses = useInputStyles();
  
  useEffect(() => {
    document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight
  });

  return (
    <>
      <Header />
      <Paper elevation={0} classes={paperClasses}>
        <img src={ladyInYellow} alt="Lady in Yellow" className="ladyInYellow" />
        <Box display="flex" justifyContent="center"  alignItems="center" style={{ width: '100%', height: '50%' }}>
          <Box display="flex" justifyContent="center" alignItems="center" style={{backgroundColor: "#FFF", color: '#2DC7FF', width: 10, height: 50, borderRadius: '7px 0 0 7px', paddingLeft: 30, fontSize: 20}}>
            <span style={{marginTop: -3}}>#</span>
          </Box>
          <InputBase classes={inputClasses} placeholder="What do you want to buy?" />
          <IconButton style={{color: '#FFF', backgroundColor: '#2DC7FF', width: 55, height: 50, borderRadius: '0 7px 7px 0', padding: 20}}>
            <Search/>
          </IconButton>
        </Box>
      </Paper>

      <Container maxWidth="lg" style={{backgroundColor: 'grey'}}>
        <Grid container spacing={0}>
          <Grid item xs={4} style={{width: '100%', height: 300, width: 'auto', backgroundColor: '#FEB300', backgroundPosition: '60% -60%', overflow: 'hidden', backgroundImage: "url('" + guyOnYellowBackground + "')"}}>
            <div style={{width: 90, float: 'right', fontSize: 30, fontFamily: 'BebasNeue', marginRight: '15%', lineHeight: '25px', color: '#F8F8F8', marginTop: 30}}>
              BECOME A SELLER
              <br/>
              <div style={{width: 155, fontSize: 13, fontFamily: 'Quicksand', lineHeight: '15px', color: '#F8F8F8'}}>Sell anything, anytime, anyday</div>
            </div>
          </Grid>
          <Grid item xs={8} style={{height: 300, width: 'auto', backgroundColor: '#F1EAE0', overflow: 'hidden', backgroundImage: "url('" + twoGuysOnWhiteBackground + "')", backgroundPosition: '30% 5px'}}>
            <div style={{fontSize: 50, fontFamily: 'BebasNeue', color: '#AFA294', width: 200, lineHeight: '45px', marginTop: 60, marginLeft: 50}}>SHOPPING MADE EASY</div>
            <div style={{fontSize: 20, fontFamily: 'Quicksand', color: '#AFA294', width: 250, marginTop: 0, marginLeft: 50}}>Make orders from your convenience</div>
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Grid item xs={12} style={{backgroundColor: '#0177B6', height: 70, padding: 20, color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>
              All Categories
            </Grid>
            <Grid item xs={12} style={{backgroundColor: '#FFF', border: '1px solid #0177B6'}}>
              {
                [
                  {title: 'Meat & Poultry'},
                  {title: 'Drinks'},
                  {title: 'Frozen Foods'},
                  {title: 'Naija Ingredients'},
                  {title: 'Beauty & Skincare'},
                  {title: 'Household items'},
                  {title: 'Fashion'},
                  {title: 'Vegetables'},
                  {title: 'Fresh Fruits'},
                  {title: 'Snacks'},
                  {title: 'Baby Products'},
                  {title: 'Health & wellness'}
                ]
                .map((prop, i) => (
                  <Paper key={i} style={{fontSize: 13, borderRadius: 0, padding: 12.5, marginLeft: 10, marginRight: 10, borderBottom: '1px solid #eee', boxShadow: '0 0 0 0', cursor: 'pointer'}}>
                    {prop.title}
                  </Paper>
                ))
              }
              <Paper style={{fontSize: 13, borderRadius: 0, padding: 12.5, marginLeft: 10, marginRight: 10, borderBottom: '1px solid #eee', boxShadow: '0 0 0 0', cursor: 'pointer', textAlign: 'center'}}>
                See more
              </Paper>
            </Grid>
          </Grid>
          
          <Grid item xs={12}>
            <Grid item xs={12} style={{backgroundColor: '#0177B6', height: 70, padding: 20, color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>
              Product Categories
            </Grid>
          </Grid>

          {/* <Grid item xs={8} style={{marginTop: 20}}>
            <div style={{fontSize: 50, fontFamily: 'BebasNeue', color: '#AFA294', width: 200, lineHeight: '45px', marginTop: 60, marginLeft: 50}}>SHOPPING MADE EASY</div>
            <div style={{fontSize: 20, fontFamily: 'Quicksand', color: '#AFA294', width: 200, marginTop: 0, marginLeft: 50}}>Make orders from your convenience</div>
          </Grid> */}
        </Grid>
      </Container>

      <Paper style={{width: '90%', marginLeft: '5%', backgroundColor: 'blue', height: 100 }}>

      </Paper>
    </>
  );
};

export default Home;