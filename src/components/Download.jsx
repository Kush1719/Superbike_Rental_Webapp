import Img1 from "../images/download/appstore.svg";
import Img2 from "../images/download/googleapp.svg";

function Download() {
  return (
    <>
      <section className="download-section">
        <div className="container">
          <div className="download-text">
            <h2>Download our app to get most out of it</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sapiente. Est incidunt a neque quaerat? Recusandae temporibus non, nisi, ipsam aut dolor, a quasi deleniti vel quisquam deserunt fuga suscipit consequatur sunt ducimus quae dolore.
            </p>
            <div className="download-text__btns">
              <img alt="download_img" src={Img2} />
              <img alt="download_img" src={Img1} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;