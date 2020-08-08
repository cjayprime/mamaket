import React, { useEffect } from 'react';
import { Paper, Grid, Box, InputBase, IconButton, Container, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Cake, ChevronRight, Search, Room } from '@material-ui/icons';

import Header from '../components/Header';

import ladyInYellow from '../assets/images/home/ladyInYellow.png';
import guyOnYellowBackground from '../assets/images/home/guyOnYellowBackground.png';
import twoGuysOnWhiteBackground from '../assets/images/home/twoGuysOnWhiteBackground.png';
import appStore from '../assets/images/home/appStore.png';
import footer from '../assets/images/logo/footer.png';
import meatAndPoultry from '../assets/images/category/meatAndPoultry.png';
import drink from '../assets/images/category/drink.png';
import frozenChicken from '../assets/images/category/frozenChicken.png';
import naijaIngredients from '../assets/images/category/naijaIngredients.png';
import freshFruits from '../assets/images/category/freshFruits.png';

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
const useGridListTileBarStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#FFFFFF'
  },
  titleWrap: {
    color: '#BBBCC1'
  },
  title: {
    color: '#BBBCC1',
    fontSize: 12,
    marginBottom: 5
  },
  subtitle: {
    color: '#BBBCC1',
    fontSize: 15
  }
}));
const categories = [
  {title: 'Meat & Poultry', image: meatAndPoultry},
  {title: 'Drinks', image: drink},
  {title: 'Frozen Foods', image: frozenChicken},
  {title: 'Naija Ingredients', image: naijaIngredients},
  {title: 'Beauty & Skincare', image: naijaIngredients},
  {title: 'Household items', image: naijaIngredients},
  {title: 'Fashion', image: naijaIngredients},
  {title: 'Vegetables', image: naijaIngredients},
  {title: 'Fresh Fruits', image: freshFruits},
  {title: 'Snacks', image: naijaIngredients},
  {title: 'Baby Products', image: naijaIngredients},
  {title: 'Health & wellness', image: naijaIngredients}
];
const products = [
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
  {title: 'Fresh apples ready for delivery', price: '18,000', location: 'Ajah, Lekki', image: meatAndPoultry},
];

const Home = () => {
  const paperClasses = usePaperStyles();
  const inputClasses = useInputStyles();
  const gridListTileBarClasses = useGridListTileBarStyles();
  
  useEffect(() => {
    document.scrollingElement.scrollTop = 0.45 * document.scrollingElement.scrollHeight
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

      <Container maxWidth="lg">
        <Grid container spacing={0}>
          <Grid item xs={3} style={{height: 300, width: 'auto', backgroundColor: '#FEB300', backgroundPosition: '60% -60%', overflow: 'hidden', backgroundImage: "url('" + guyOnYellowBackground + "')"}}>
            <div style={{width: 90, float: 'right', fontSize: 30, fontFamily: 'BebasNeue', marginRight: '15%', lineHeight: '25px', color: '#F8F8F8', marginTop: 30}}>
              BECOME A SELLER
              <br/>
              <div style={{width: 155, fontSize: 13, fontFamily: 'Quicksand', lineHeight: '15px', color: '#F8F8F8'}}>Sell anything, anytime, anyday</div>
            </div>
          </Grid>
          <Grid item xs={9} style={{height: 300, width: 'auto', backgroundColor: '#F1EAE0', overflow: 'hidden', backgroundImage: "url('" + twoGuysOnWhiteBackground + "')", backgroundPosition: '30% 5px'}}>
            <div style={{fontSize: 50, fontFamily: 'BebasNeue', color: '#AFA294', width: 200, lineHeight: '45px', marginTop: 60, marginLeft: 50}}>SHOPPING MADE EASY</div>
            <div style={{fontSize: 20, fontFamily: 'Quicksand', color: '#AFA294', width: 250, marginTop: 0, marginLeft: 50}}>Make orders from your convenience</div>
          </Grid>
        </Grid>


        <Grid container spacing={0}>
          <Grid item xs={3}>
            <Grid item xs={12} style={{backgroundColor: '#0177B6', height: 70, padding: 20, color: '#FFFFFF', textAlign: 'center', fontSize: 20}}>
              All Categories
            </Grid>
            <Grid item xs={12} style={{backgroundColor: '#FFF', border: '1px solid #0177B6'}}>
              {
                categories.map((prop, i) => (
                  <Paper key={i} style={{fontSize: 13, borderRadius: 0, padding: 12.5, marginLeft: 10, marginRight: 10, borderBottom: '1px solid #eee', boxShadow: '0 0 0 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Cake />
                      <span style={{marginLeft: 5}}>{prop.title}</span>
                    </div>
                    <ChevronRight />
                  </Paper>
                ))
              }
              <Paper style={{fontSize: 13, borderRadius: 0, padding: 12.5, marginLeft: 10, marginRight: 10, borderBottom: '1px solid #eee', boxShadow: '0 0 0 0', cursor: 'pointer', textAlign: 'center'}}>
                See more
              </Paper>
            </Grid>
            <Paper style={{boxShadow: '0 0 0 0', marginTop: 10, padding: 5, borderRadius: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Quicksand', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
              <div style={{width: '60%', color: '#0177B6'}}>
                Download the Mamaket mobile
              </div>
              <div style={{color: '#FFAF00', marginBottom: 15}}>Application</div>
              <img src={appStore} alt="App Store" />
            </Paper>
          </Grid>

          <Grid item xs={9}>
            <Grid item xs={12} style={{height: 50, padding: 10, fontSize: 20, color: '#BBBCC1'}}>
              Product Categories
            </Grid>
            <GridList cols={4} spacing={10}>
              {
                categories.map((props, i) => (
                  <GridListTile key={i} cols={1} style={{height: 300}}>
                    <img src={props.image} alt={props.title} />
                    <GridListTileBar title={props.title} style={{position: 'absolute', top: 'calc(50% - 24px)', backgroundColor: '#FFFFFF17', border: '1px solid #0177B6', right: 'auto', left: '50%', transform: 'translate(-50%, 0)'}}/>
                  </GridListTile>
                ))
              }
            </GridList>
          </Grid>
        </Grid>


        <Grid container style={{margin: 10, marginTop: 30, marginLeft: 0, fontSize: 20, color: '#BBBCC1'}}>
          Trending Products
        </Grid>
        <Grid container style={{padding: 10, backgroundColor: '#DDDEE0'}}>
            <GridList cols={5} spacing={10} cellHeight={220}>
              {
                products.map((props, i) => (
                  <GridListTile key={i} cols={1}>
                    <div style={{display: 'flex', alignItems: 'center', zIndex: 1000000, position: 'absolute', left: 10, color: '#FFF', fontSize: 12, fontWeight: 'bold'}}>
                      <Room htmlColor='#FFF' />
                      {props.location}
                    </div>
                    <img src={props.image} alt={props.title} />
                    <GridListTileBar title={props.title} subtitle={'N '+props.price} classes={gridListTileBarClasses} />
                  </GridListTile>
                ))
              }
            </GridList>
        </Grid>
      </Container>


      <Grid container alignItems="center" style={{backgroundColor: '#0177B6', fontSize: 17, fontFamily: 'Quicksand', color: '#FFFFFF', height: 500, marginTop: 50,}}>
          <Grid item xs={3}>
            <img src={footer} alt="App Store" />
          </Grid>
          <Grid container item xs={2} direction="column" justify="space-between" style={{height: 200}}>
            <div>About us</div>
            <div>About Mamaket</div>
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
            <div>Become a seller</div>
          </Grid>
          <Grid container item xs={2} direction="column" justify="space-between" style={{height: 200}}>
            <div>Support</div>
            <div>Email</div>
            <div>Safety Tips</div>
            <div>Contact Us</div>
            <div>FAQ</div>
          </Grid>
          <Grid container item xs={2} direction="column" justify="space-between" style={{height: 200}}>
            <div>Our Socials</div>
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Instagram</div>
            <div>Youtube</div>
          </Grid>
          <Grid container item xs={3} direction="column" justify="space-between" alignItems="flex-start" style={{height: 200}}>
            <div>Our Apps</div>
            <div>Download now</div>
            <img src={appStore} alt="App Store" />
          </Grid>
      </Grid>

      {/* <Paper style={{width: '90%', marginLeft: '5%', backgroundColor: 'blue', height: 100 }}>

      </Paper> */}
    </>
  );
};

export default Home;