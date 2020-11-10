import React from 'react';

const PhotoSection = () => {
  return (
    <section className="photo-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-sm-12">
                <div className="image-one text-center pt-4">
                  <div className="overlay">
                    <h2>Cookware </h2>
                    {/* <h4>Pot</h4> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="image-two text-center pt-4">
                  <div className="overlay">
                    

                    <h2>Homeware</h2>
                {/* <h4>Flower vase</h4> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-three text-center my-auto pt-lg-4">
              <div className="overlay">
              <h2>Kitchenware</h2>
                    {/* <h4>Water Cup</h4> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
