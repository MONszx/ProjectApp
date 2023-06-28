import React from 'react'

//Images
import NavImage from '../images/logo1.svg'
import BgLeaves from '../images/bg-leaves.svg'
import Decals from '../images/bg-decals.svg'
import PlayStore from '../images/googleplay-removebg-preview.png'
import AppStore from '../images/apple-store.svg'
import ProductSearch from '../images/product-search.svg'
import GirlIcon from '../images/product-work.svg'
import SecondDecals from '../images/bg-decals2.svg'
import ThirdDecals from '../images/bg-decals3.svg'
import BadgeLaravel from '../images/badge.laravel-mix.svg'
import BadgeHowtoRead from '../images/badge.how-to-read-code.svg'

//Material-UI
import { Container, 
        Typography, 
        Button  
        } from '@mui/material'

import '../App.css'

const Protoapp = () => {
  return (
        <>  
            <Typography >
                    <section>
                            <div>
                                <nav>
                                    <div className='Logo'>
                                        <img src={NavImage} alt='Logo'/>
                                    </div>
                                        <ul>
                                            <li>
                                                ProjectApp
                                            </li>
                                            <li>
                                                Home
                                            </li>
                                        </ul>  
                                </nav>
                                <article className='content'>
                                    <Typography variant="h1">Project App</Typography>
                                    <Typography variant="h5">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever
                                    </Typography>
                                    <Button href="#text-buttons" variant="contained" size="large" 
                                    sx={{marginTop: '15px', textTransform: 'capitalize'}}>
                                    Get Started </Button>
                                </article>
                            </div>
                        <aside className='leaves'>
                            <img src={BgLeaves} alt='Leaves' />
                        </aside>       
                        <div className='decalsImage'>
                            <img src={Decals} alt='decals'/>
                        </div>    
                    </section>
         
                    <div className='storeImages'>
                        <img src={PlayStore} alt='PlayStore' className='playStore'/>
                        <img src={AppStore} alt='AppStore'/>
                    </div>
            </Typography> 
           
            {  /* Mid Body Section*/   }

            <Container>
                <main className='mainBodyContainer' id='mainBody'>
                    <article>
                        <Typography variant='h1' sx={{ fontWeight: '600' }}> Project App</Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'regular', fontSize: 'h6.fontSize',  letterSpacing: 3 }}>
                            The app lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation
                        </Typography>
                    </article>
                   
                    <article className='bodySection'>
                        <div>
                            <Typography variant='h2'sx={{textAlign: 'end'}}> Discover</Typography>
                            <Typography variant='subtitle2' sx={{ fontWeight: 'regular', fontSize: 'h6.fontSize', letterSpacing: 3, textAlign: 'end' }}>
                                Get information on using these guidelines whenever you are using therefore they have the same style and quality
                            </Typography>
                        </div>
                        <aside className='imageSection'>
                            <img src={ProductSearch} alt="Search"/>
                        </aside>
                    </article>

                    <article className='bodySection'>
                        <aside className='imageSection'>
                            <img src={ProductSearch} alt="Search"/>
                        </aside>
                        <div>
                            <Typography variant='h2' sx={{textAlign: 'start'}}> Augmented</Typography>
                            <Typography variant='subtitle2' sx={{ fontWeight: 'regular', fontSize: 'h6.fontSize', letterSpacing: 3, textAlign: 'start' }}>
                                Word salad often arouses curiosity due to its seemingly intelligent and tasteful play on words.
                            </Typography>
                        </div>
                    </article>

                    <article className='bodySection'>
                        <div>
                            <Typography variant='h2'sx={{textAlign: 'end'}}> Endless Posibilities</Typography>
                            <Typography variant='subtitle2' sx={{ fontWeight: 'regular', fontSize: 'h6.fontSize', letterSpacing: 3, textAlign: 'end' }}>
                                Management Systems shouldn't be a bore. Run out of words? heres some lorem ipsum: Lorem ipsum dolor sit amet.
                            </Typography>
                        </div>
                        <aside className='imageSection'>
                            <img src={GirlIcon} alt="Girl"/>
                        </aside>
                    </article>
                 
                </main>
                
            </Container>
                    <section className="diveSection">
                    <div className='secondDecals'>
                        <img src={SecondDecals} alt="Decals 2"/>
                    </div>
                    <Container>
                        <div className="diveContent">
                            <div>
                            <Typography variant='h2'sx={{fontWeight: "600"}}> Deep dive. Ready?</Typography>
                            <Typography variant='subtitle2' sx={{ fontWeight: 'regular', fontSize: 'h6.fontSize', letterSpacing: 3}}>
                            So are we. Unless. You're. Not. Word filler.
                             </Typography>
                             </div>
                            <div className='divestoreImages'>
                                <img src={PlayStore} alt='PlayStore' className='playStore'/>
                                <img src={AppStore} alt='AppStore'/>
                            </div>
                        </div>
                    </Container>    
                </section>
            <Container>
                <div className="actionSection">
                    <Typography variant='h2'sx={{fontWeight: "600"}}> Last Call to Action</Typography>
                        <Typography variant='subtitle2' sx={{ fontWeight: 'regular', fontSize: 'h6.fontSize', letterSpacing: 3}}>
                        Another section content goes here
                    </Typography>
                </div>
            </Container>

            <Container>
                <div className="main_Wrapper">
                    <div className="yellow_Container">
                        <div className="yellow_Section">
                            <img src={BadgeLaravel} alt="Badge"/>
                            <Typography sx={{ fontWeight: 'regular', fontSize: 'h6.fontSize', margin: "30px 30px", padding: "7px" , borderRadius: "20px" ,backgroundColor: "gray", color: "white"}}>
                                AUTOMATION
                            </Typography>
                        </div>
                        <div>
                            <Typography sx={{color: "white", textAlign: "start"}}> ROLL OUT</Typography>
                            <Typography variant='h4'sx={{fontWeight: "600", marginBottom: "20px", textAlign: "start", color: "white"}}> Automatic Prototyping</Typography>
                            <Typography sx={{ fontWeight: 'regular', fontSize: 'h6.fontSize', textAlign: "start", color: "white"}}>
                                Webpack is the most powerful and flexible asset compilation tool available today. With that power, however, comes a certain level of complexity
                            </Typography>
                        </div>
                    </div>

                    <div className="green_Container">
                    <div className="green_Section">
                            <img src={BadgeHowtoRead} alt="Glass Badge"/>
                            <Typography sx={{ fontWeight: 'regular', fontSize: 'h6.fontSize', margin: "30px 30px", padding: "7px" , borderRadius: "20px" ,backgroundColor: "gray", color: "white"}}>
                                SIMPLICITY
                            </Typography>
                        </div>
                        <div>
                            <Typography sx={{color: "white", textAlign: "start"}}> SIP COFFEE</Typography>
                            <Typography variant='h4'sx={{fontWeight: "600", marginBottom: "20px", textAlign: "start", color: "white"}}> Complexity Simplified</Typography>
                            <Typography sx={{ fontWeight: 'regular', fontSize: 'h6.fontSize', textAlign: "start", color: "white"}}>
                               I know to many backend developers who are stifled by one glaring phobia: CSS. How do you construct a layout when nothing lines up?
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="third_Decals">
                <img src={ThirdDecals} alt="Third Decals"/>
            </div>

            {/* FOOTER SECTION */}

            <footer>
                <div className="footer_Section">
                    <img src={NavImage} alt="Bird" />
                </div>

                <div className="content_Footer">
                        <Typography variant='h6' sx={{ fontWeight: "600", color: "white", textAlign: "start"}}> Project App</Typography>
                        <Typography variant='h5' sx={{ marginBottom: "20px", textAlign: "start", color: "white"}}> Camp One Inc, LLC</Typography>
                        <Typography sx={{ fontWeight: 'regular', textAlign: "start", color: "white"}}>
                            Que ad Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui reprehenderit rerum ullam necessitatibus, at ab quae expedita illo, nobis ipsum maxime assumenda dolorum quo ut deleniti possimus. Eveiet, voluptatem, provident.
                        </Typography>
                </div>
                <Typography sx={{ fontWeight: 'regular', textAlign: "start", color: "white"}}>
                    &copy; 2019 Project App. All rights reserved.
                </Typography>
            </footer>

        </>
 
  )
}

export default Protoapp