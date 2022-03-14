// const homeurl = "http://localhost:3000/";
const homeurl = 'http://localhost:3000/login';


const logOut = (e) => {
    // e.preventDefault();
    if (confirm("Log out?")) {
        localStorage.removeItem("token")
        localStorage.removeItem("address")
        localStorage.removeItem("personInfo")
      localStorage.clear()
      window.location.replace(homeurl)
    }
}

export default logOut;