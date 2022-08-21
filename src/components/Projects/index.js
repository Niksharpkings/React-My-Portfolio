import proj1 from '../../images/184286794-dfe5489c-9e3c-4b15-b536-a0066464bc6f.png'
import proj2 from '../../images/Screenshot 2022-08-20 220822.png'
import proj3 from '../../images/181427032-eae96456-d6c7-4b8a-9d2b-b105535d5970.png'
import proj4 from '../../images/180572719-a97145bc-e921-4c2b-a72d-3919614b314e.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Project(){
    return (
    <div className='card-container'>
        <div className="card" style={
          {
            width: "40%",
            height: "40%"
          }
        } >
            <img src={proj1} className="card-img-top"  alt="..."/>
            <div className="card-body">
              <h5 className="card-title">
                <a href="https://niksharpkings.github.io/Team-Profile-Generator/">
                  Team Profile_Generator
                </a>
              </h5>
              <h1 className="card-text">
                <a href="https://github.com/Niksharpkings/Team-Profile-Generator/">
                  <i className="bi bi-github"/>
                </a>
              </h1>
            </div>
        </div>
        <div className="card" style={
          {
            width: "40%",
            height: "40%"
          }
        } >
            <img src={proj4} className="card-img-top"  alt="..."/>
            <div className="card-body">
            <h5 className="card-title">
              <a href="https://niksharpkings.github.io/challenge-4-quiz-it-up/">
                Quiz it Up
              </a>
            </h5>
            <h1 className="card-text">
              <a href="https://github.com/Niksharpkings/challenge-4-quiz-it-up">
                <i className="bi bi-github" />
              </a>
            </h1>
            </div>
        </div>
        <div className="card" style={{ width: "40%", height: "40%" }} >
            <img src={proj2} style={{ width: "100%", height: "40%" }} className="card-img-top"  alt="..."/>
            <div className="card-body">
            <h5 className="card-title">
              <a href="https://sleepy-meadow-10807.herokuapp.com/">
                WanderLust App
              </a>
            </h5>
            <h1 className="card-text">
              <a href="https://github.com/Niksharpkings/wanderlust">
                <i className="bi bi-github" />
              </a>
            </h1>
            </div>
        </div>
        <div className="card" style={{ width: "40%", height: "40%" }} >
            <img src={proj3} style={{ width: "100%", height: "40%" }}  className="card-img-top"  alt="..."/>
            <div className="card-body">
            <h5 className="card-title">
              <a href="https://niksharpkings.github.io/Weather-Week-App/">
                Weather Week App
              </a>
            </h5>
            <h1 className="card-text">
              <a href="https://github.com/Niksharpkings/Weather-Week-App">
                <i className="bi bi-github" />
              </a>
            </h1>
            </div>
        </div>
    </div>
    )
}
