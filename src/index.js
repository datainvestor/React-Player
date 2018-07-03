import _ from 'lodash'
import ReactDOM from 'react-dom'  //to render react to dom we need reactdom
import React, { Component } from 'react' //it works with react jsx, create and manage components
import VideoList from "./components/video_list"
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'


class App extends Component {
constructor(props) {
    super(props)
    this.state = {
        videos2:[],
        selectedVideo:null
    }
    this.DMSearch()
}

    DMSearch(term){
        fetch(`https://api.dailymotion.com/videos?fields=description,id,thumbnail_60_url,title,url,&limit=5&search=${term}`)
        .then(result => result.json())
        .then(videos2 => {
            //console.log(videos2.list[0]);
            this.setState({
               videos2: videos2.list, 
               selectedVideo: videos2.list[0]
            });
            //console.log(this.state.selectedVideo);
         });  
        }  
    render () {
        const DMSearch = _.debounce((term) => { this.DMSearch(term)}, 400);
        return (
            <div>
                <SearchBar onSearchTermChange= {DMSearch}/>
                <VideoDetail video={this.state.selectedVideo}/> 
                <VideoList 
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                videos2={this.state.videos2}/>
            </div>
        )
    }
}  

ReactDOM.render(<App />, document.querySelector('.container'))