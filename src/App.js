import React from 'react';
import './App.css';

class App extends Component {
 constructor(props){
   super(props);
     this.state={
       //insert locations here eventually
     };
componentDidMount() {
  this.renderMap()
}

renderMap = () => {
  loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAIg4yw5-ijN1dzoYsJQSkSpgcFrgwPJVo&callback=initMap&output=svembed&layer=c")
  window.initMap = this.initMap
}

initMap  = () => {
  // The location of Times Squaure
  var timessquare = {lat: 40.756816, lng: -73.986031};
  // The map, centered
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 18, center: timessquare});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: timessquare, map: map});

}
