const WhatIs = () => {
  return (
    <div className="what_is">
      <div className="container p-3">
        <div className="row">
          <div className="col-md-6">
            <div className="what_content ">
              <h2 className="title display-5 text-start text-dark">
                What is Shady Hippo?
              </h2>
              <p className="fs-4">
                Shady Hippo ($SHIPO) – The Ultimate Meme Coin with Attitude
              </p>
              <p>
                Shady Hippo ($SHIPO) is the next-generation meme coin that
                blends humor, community, and blockchain utility with a touch of
                mystery. Inspired by the unpredictable and unstoppable nature of
                hippos—cute but deadly—this coin is here to dominate the crypto
                jungle.
              </p>
              <p>
                👉 <strong>Join the herd today and embrace the shade!</strong> 🕶
                🦛 <strong>#SHIPO</strong> 🚀
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://nikolanb1.github.io/shady_hippo/buzz.gif"
                alt="shady hippo"
                style={{ borderRadius: "20%", width: "400px" }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              className="what_content"
              style={{ minWidth: "100%", paddingTop: "30px" }}
            >
              <h2
                className="title display-5 text-start text-dark"
                style={{ marginBottom: "20px" }}
              >
                {" "}
                🔥 Why Shady Hippo?
              </h2>
              <div className="row">
                <div className="col-sm-4 ">
                  <h3>🐾 Unpredictable & Fearless</h3>
                  <p>
                    Just like real hippos, $SHIPO doesn’t play by the rules.
                    Expect wild price swings, viral moments, and unexpected
                    partnerships.
                  </p>
                </div>
                <div className="col-sm-4 ">
                  <h3>🕶 Mysterious & Exclusive</h3>
                  <p>
                    The name says it all—Shady Hippo operates in the shadows,
                    rewarding loyal holders while keeping the crypto world on
                    its toes.
                  </p>
                </div>
                <div className="col-sm-4 ">
                  <h3>💎 Strong Community & Memes</h3>
                  <p>
                    Fueled by hippo enthusiasts and meme lords, the $SHIPO
                    community is all about fun, engagement, and viral marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatIs;
