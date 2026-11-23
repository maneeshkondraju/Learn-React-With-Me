import cat from '../images/img3.jpg'

function Card() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/18/Dog_Breeds.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
                  alt="" className="img-fluid"
                />
              </div>
              <div className="card-body">
                <h1>Card-1</h1>
                <p>using absolute url</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src="img1.avif" alt="" className="img-fluid" />
              </div>
              <div className="card-body">
                <h1>Card-2</h1>
                <p>image from public folder</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src={require('../images/img2.jpg')} alt="" className="img-fluid" />
              </div>
              <div className="card-body">
                <h1>Card-3</h1>
                <p>image from images folder using require fn</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <div className="card-header">
                <img src={cat} alt="" className='img-fluid'/>
              </div>
              <div className="card-body">
                <h1>Card-4</h1>
                <p>img from images folder using import</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

