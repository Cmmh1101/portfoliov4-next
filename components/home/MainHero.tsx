import React from "react";

// interface Props {
//   enTitle?: string;
//   enText: string;
//   spTitle?: string;
//   spText: string;
//   enButton: string;
//   esButton: string;
// }

const MainHero = () => {
  return (
    <div
      className="hero-text"
    >
      {/* <animated.div style={styles}> */}
        <h1>
          {/* {englishMode ? (
            <>
              <span>Desarrolladora</span> de Sofware
            </>
          ) : (
            <> */}
              <span>Software</span> Engineer
            {/* </>
          )} */}
        </h1>
        {/* <p>{englishMode ? spText : enText}</p> */}
        {/* <Button
          onClick={() => scrollTo("#projects")}
          style={
            darkMode
              ? { color: light, backgroundColor: dark }
              : { color: dark, borderColor: dark }
          }
          outline
          type="button"
        >
          {englishMode ? esButton : enButton}
        </Button> */}
      {/* </animated.div> */}
    </div>
    // <div>Title: Carla Montano</div>
  );
};

export default MainHero;
