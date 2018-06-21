import React,{Component} from "react"
import Titles from "./component/title"
import Form from "./component/form"
import Weather from "./component/weather"
const API_KEY="4e9d682e2b43cdb1c4c3e9b3d612bc8f"
class App extends Component{
    getWeather=async (e) =>{
        
        // const city=e.target.elements.city.value;
        // const country=e.target.elements.country.value;
        e.preventDefault(); 
        const api_call=await fetch(`http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
        const data=await api_call.json()
        
        console.log(data)
    }
    render(){
        return (
            <div>
                <Titles/>
                <Form getWeather={this.getWeather.bind(this)}/>
                <Weather/>
            </div>
        )
    }
}
export default App