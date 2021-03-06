import React, { Component } from 'react';
import './App.css';

 class App extends Component {
  constructor(props){
    super(props);
      this.state={

      };

    }
    componentDidMount() {

      this.renderMap();
    }
    renderMap = () => {
      loadMap("https://maps.googleapis.com/maps/api/js?key=AIzaSyAIg4yw5-ijN1dzoYsJQSkSpgcFrgwPJVo&callback=initMap&output=svembed&layer=c");
      window.initMap = this.initMap;
    }
    initMap = ()  => {
      //Create the map
      let timessquare = {lat: 40.756816, lng: -73.986031};
      const map= new window.google.maps.Map(document.getElementById('map'),{
        center: {timessquare},
        zoom: 18,
      })
      //Creating InfoWindow

    /*  let infowindow = new window.google.maps.InfoWindow();


      this.state.venues.map(myVenue=>{
     let contentString = `${myVenue.venue.name}${myVenue.venue.location.formattedAddress}`
        //Creating a Marker
         let marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name,
        animation: window.google.maps.Animation.DROP,
        icon:'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
      });
      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
      }
      //Open and Infowindow
        marker.addListener('click', function(){
          toggleBounce();
          infowindow.setContent(contentString);
          infowindow.open(map, marker);
        })
      })

    }
    //Request to FourSquare API
    getVenues=()=>{
      const endPoint ='https://api.foursquare.com/v2/venues/explore?';
      const parameters={
        client_id:'SW2YS2FRZRWQZ1ANIK5JVOZQZMFIYZDSNL3CQACSAFD4DG1U',
        client_secret:'NXGC4A3RLMK5MC50NCZTNM5EUM0GLENKYKK51OFLTDYTKE31',
        near:'Sugar Hill, GA',
        v:'20181510',
        radius: 19312.1,
      }
      axios.get(endPoint + new URLSearchParams(parameters))
      .then(response =>{
        this.setState({
          venues:response.data.response.groups[0].items
        }, this.renderMap())
      })
      .catch(error=>{
        console.log('ERROR' + error);
      })
    }*/
}
    render() {

        return (
          <div>
          </div>
        );

      }
    }
  function loadMap(url){
    const index = window.document.getElementsByTagName('script')[0]
    const script = window.document.createElement('script')
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }

export default App;
