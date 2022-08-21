import coverImage from "../images/67552318.png";

export default function About() {
  return (<section className="about">
    <img src={coverImage} style={{ width: "20%" }} alt="cover" />
    <div style={{ width: "60%" }}>
    <h2>Hello,</h2>
      <p>
        I am a full stack web developer with a passion for creating beautiful
        and user-friendly web applications. I have a background in computer
        science and a passion for creating web applications that are intuitive
        and easy to use. Im currently looking for a position in the web
        development industry. If you would like to get in touch, please email
        me at <a href="mailto: niksharpkings@gmail.com">niksharpkings@gmail</a>
      </p>
    </div>
  </section>
  );
}
