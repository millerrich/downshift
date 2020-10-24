import axios from 'axios';

export default {
    
    signUp: function(user) {
        console.log("utils API")
        return axios.post("/api/user/signup", user)
    }
}
