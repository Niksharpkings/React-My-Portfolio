import Pdf from "../images/Nikita-Sharpio.pdf";
export default function Resume() {
  return (
    <>
      <div>
        <h1>
          <a
            id="resume"
            href={Pdf}
            without
            rel="noopener noreferrer"
            target="_blank"
          >
            Download Resume
          </a>
        </h1>
      </div>

      <h1>Front-End Proficiencies</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Jquery</li>
        <li>React</li>
      </ul>
      <h1>Back-End Proficiencies</h1>
      <ul>
        <li>NodeJS</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Express</li>
      </ul>
    </>
  );
}
