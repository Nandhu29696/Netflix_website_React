/* eslint-disable no-undef */
import { Component } from 'react';
import React from 'react';

import './App.css';

class App extends Component {

  
  render(){
    return (
    <div className="mainbody">
      <header>
        <img className="logoimg" src="https://assets.brand.microsites.netflix.io/assets/df87ee0c-c4ea-11e7-8d40-066b49664af6_cm_800w.png?v=30" alt="missing logo link" ></img>
        <Navigation/>
        <div className="search">
          <input onKeyUp="this" type="search" placeholder="search for a title..."></input>
        </div>
        <UserPro/>
      </header>
     
      <MainContent/> 
      <Advertisment/>
        <TrandingList/>
    </div>
  
    )
  }
}

//Navigation Bar
class Navigation extends Component{
  render(){
    return(
      <div className="navbar">
        <nav>
          <ul>
            <li>Home</li>
            <li>Movie list</li>
            <li>Top Rating</li>
            <li>Recent</li>
          </ul>
        </nav>
      </div>
    )
  }
}

//Proflie 
class UserPro extends Component{
  render(){
    return(
      <div className="profile">
        <div className="user">
          <div className="username">Nandhu Xavier</div>
          <div className="userimage">
            <img src="https://image.flaticon.com/icons/png/128/3135/3135715.png" alt="user image missing"></img>
          </div>
        </div>
      </div>
    )
  }
}


//Movie Advertisment
class Advertisment extends Component{
  render(){
    return(
      <div className="ad-images">
        <img className="movieimage" src="https://www.seeing-stars.com/Locations/Bright/Title.jpg" alt="movie missing"></img>

      </div>
    )
  }
}


//Main content
class MainContent extends Component{

  
  render(){
    return(
      <div className="maincontent" >
        <div className="content">
          <h2>The New movies arivale..</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
          <div className="buttons-act">
          
            <button className="btn-main" data-primary='true'> Watch now</button>
            <button className="btn-main">+ My List</button>
          
          </div>
          
        </div>
        <div className="movieposter">
            <img className="poster" src="https://occ-0-2705-1001.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABU2lUBUm-hplRhE8L06aeGG7rWKH-oZud3Pd5QUngFxWMAk0ASY2DyH6y7Js6wp8pJevvZxXKApZ9QVCY9MN4Mcrj3uKil7eGTFk.png?r=375" alt="img missing"></img>
        </div>
        <div className="overlay">
          
        </div>
      </div>
    )
  }
}

class TrandingList extends Component{
  
  constructor(props){
    super(props)
    this.state={
      title:"Top TV picks for Jac",
      titles:"",
      imgfiles:"",
    }
  }
  
  trandings(e)
  {
    if(this.props.imgfiles == 'trandingmovie'){

      imgfiles.style.display="flex";
    }
  }
  render(){
 
    return(
      <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
        <div className="title">
          <h1>Top TV picks Jactpack</h1>
          <div className="titles-wrapper">
          <div class="imgContainer">
              <img src="https://cdn.shopify.com/s/files/1/0969/9128/products/Joker_-_Joaquin_Phoenix_-_Hollywood_Action_Movie_Poster_08339151-d79a-4b7b-8bc7-dcad04881c2c.jpg?v=1573629460" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Joker_2019</h2>
                      <h3>9.4/10</h3>
                    </div>
            </div>
              <div className="imgContainer"> 
                  <img className="trandmovies" src="https://cdn.shopify.com/s/files/1/0969/9128/products/Midway_2019_-_Ed_Skrein_-_Hollywood_War_WW2_Movie_Poster_e0326fd4-ec9a-48b8-a6f3-c702a01f75bc.jpg?v=1582782838" alt="img missing"/>
                 <div className="text">
                      <h2>Midway_2019</h2>
                      <h3>8.4/10</h3>
                    </div>
                  
                </div>
                <div class="imgContainer">
              <img src="https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>IO_2020</h2>
                      <h3>8.9/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/adventure-movie-poster-template-design-7b13ea2ab6f64c1ec9e1bb473f345547_screen.jpg?ts=1576732289" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Archer_2020</h2>
                      <h3>7.8/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://www.joblo.com/assets/images/joblo/posters/2020/01/bloodshot-poster.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>BlootShoot_2020</h2>
                      <h3>9.2/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Replicas_2020</h2>
                      <h3>6.7/10</h3>
                    </div>
            </div>
            
          </div>
        </div>
        <div className="title">
          <h1>Movie Tranding on Top</h1>
          <div className="titles-wrapper">
          <div class="imgContainer">
              <img src="https://www.joblo.com/assets/images/joblo/posters/2019/10/jungle-cruise-poster.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Jungle_Cruise_2021</h2>
                      <h3>7.4/10</h3>
                    </div>
            </div>
              <div className="imgContainer"> 
                  <img className="trandmovies" src="https://www.joblo.com/assets/images/joblo/posters/2020/06/URiXYTtX.jpeg" alt="img missing"/>
                 <div className="text">
                      <h2>GreenLand_2021</h2>
                      <h3>8.5/10</h3>
                    </div>
                  
                </div>
                <div class="imgContainer">
              <img src="https://i.ebayimg.com/images/g/kgkAAOSw3BReaE-G/s-l300.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Wanda_Vision_2021</h2>
                      <h3>8.9/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="http://static1.squarespace.com/static/581bd18003596e16cc905cad/5f3ad1d9d6234e7a2156269f/5f3be2d9fb307b0ee1232e05/1603905454636/f9+poster.jpg?format=1500w" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>The_Fast_Saga_2021</h2>
                      <h3>9.3/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://lh3.googleusercontent.com/proxy/C_7Oc58_Oml88NuGWnLUgSM5jOfAOSY8eE3IZNnQ3HGvUqZibPsQNFA_g1Ol8ZHp-oxNoZX2IxAudZPt--ZQlBVI8RXb3ucH" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>The_Owners_2021</h2>
                      <h3>6.2/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://www.joblo.com/assets/images/joblo/posters/2020/08/Let-Him-Go-poster-1.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Let_Him_Go</h2>
                      <h3>9.4/10</h3>
                    </div>
            </div>
            
          </div>
        </div>
        <div className="title">
          <h1>Most watched in Horror</h1>
          <div className="titles-wrapper">
          <div class="imgContainer">
              <img src="https://kiranjitchanamediahome.files.wordpress.com/2019/02/canva-monochrome-horror-movie-poster-macgp3s1byu.jpg?w=1100" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Lights_Out_2019</h2>
                      <h3>8.7/10</h3>
                    </div>
            </div>
              <div className="imgContainer"> 
                  <img className="trandmovies" src="https://qph.fs.quoracdn.net/main-qimg-7ced6e2b77484f67b9434f04da2cc07d.webp" alt="img missing"/>
                 <div className="text">
                      <h2>The_Conjuring</h2>
                      <h3>9.6/10</h3>
                    </div>
                  
                </div>
                <div class="imgContainer">
              <img src="https://www.filmsourcing.com/wp-content/uploads/2013/02/Filmsourcing-horror-poster-ONE-SHEET_face.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Filmsourcing_2019</h2>
                      <h3>7.0/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/horror-movie-poster-template-design-54cb43786dd61be7b116ae06e5815b17_screen.jpg?ts=1582777270" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Sinister_2019</h2>
                      <h3>7.1/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/horror-movie-poster-template-design-b9fbe371ffc3a68c7ccb1e4849f3fd85_screen.jpg?ts=1593589460" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Dead_Inside_2019</h2>
                      <h3>9.1/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://images-na.ssl-images-amazon.com/images/I/41iPVGMIrwL._AC_SY445_.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Conjuring2_2019</h2>
                      <h3>9.4/10</h3>
                    </div>
            </div>
            
          </div>
        </div>
        <div className="title">
          <h1>Sci-Fi Movies </h1>
          <div className="titles-wrapper">
          <div class="imgContainer">
              <img src="https://i.pinimg.com/originals/8a/a8/41/8aa8415aa876a571272cb59eaeae61b4.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Alien</h2>
                      <h3>6.4/10</h3>
                    </div>
            </div>
              <div className="imgContainer"> 
                  <img className="trandmovies" src="https://www.indiewire.com/wp-content/uploads/2017/09/prometheus-2012.jpg?w=463" alt="img missing"/>
                 <div className="text">
                      <h2>Prometheus_2012</h2>
                      <h3>6.4/10</h3>
                    </div>
                  
                </div>
                <div class="imgContainer">
              <img src="http://1.bp.blogspot.com/-CooGYaF75pM/VgUtqyLKEAI/AAAAAAAAAPc/jyDud_OSRPI/s1600/gravity-movie-poster-2013-1020768510.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Gravity_2013</h2>
                      <h3>7.6/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://www.indiewire.com/wp-content/uploads/2017/09/arrival-2016.jpg?w=640" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Arrival_2016</h2>
                      <h3>6.4/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3d23ff71873341.5bd3deed088d5.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Short_2019</h2>
                      <h3>5.4/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://payload.cargocollective.com/1/10/338298/13243386/exabyte_movieposter_2_1000.png" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Exabyte_2012</h2>
                      <h3>6.4/10</h3>
                    </div>
            </div>
            
          </div>
        </div>
        <div className="title">
          <h1>Comedy magic Movies on Top</h1>
          <div className="titles-wrapper">
          <div class="imgContainer">
              <img src="https://maxcdn.icons8.com/app/uploads/2019/05/film-poster-graphic-design.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Beauty_and_the_Beast</h2>
                      <h3>7.4/10</h3>
                    </div>
            </div>
              <div className="imgContainer"> 
                  <img className="trandmovies" src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/09/1488452253-pirates-of-the-caribbean-poster.jpg?resize=480:*" alt="img missing"/>
                 <div className="text">
                      <h2>Pirates-of-the-caribbean</h2>
                      <h3>9.7/10</h3>
                    </div>
                  
                </div>
                <div class="imgContainer">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Magic_Card_poster.jpeg/220px-Magic_Card_poster.jpeg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Magic_card</h2>
                      <h3>7.4/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://maxcdn.icons8.com/app/uploads/2019/05/design-of-movie-poster.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Hang_Over</h2>
                      <h3>9.4/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="https://i0.wp.com/www.creativevivid.com/wp-content/uploads/2017/03/Prodigal-Movie-Poster.jpg?resize=600%2C782&ssl=1" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Prodigal_2017</h2>
                      <h3>7.7/10</h3>
                    </div>
            </div>
            <div class="imgContainer">
              <img src="http://scriptshadow.net/wp-content/uploads/2015/08/transcendence.29748-691x1024.jpg" alt="Avatar" class="trandmovies"/>
                <div className="text">
                      <h2>Transcendence_2015</h2>
                      <h3>6.4/10</h3>
                    </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}



export default App;
