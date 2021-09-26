import React, { ReactNode, useContext, useRef, useState } from 'react';
import styles from './index.less';
const toggleModalFullscreen = (element: HTMLElement, exit = false) => {
  const toggleFullScreenEle = element.parentElement;
  if (!toggleFullScreenEle) {
    return;
  }
  if (!document.fullscreenElement && !exit) {
    toggleFullScreenEle
      .requestFullscreen()
      .then(() => {
        toggleFullScreenEle.style.height = '100vh';
      })
      .catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
        );
      });
  } else if (document.exitFullscreen && document.fullscreenElement) {
    toggleFullScreenEle.style.height = 'auto';
    document.exitFullscreen();
  }
};

interface Iprops {
  children?: ReactNode;
}
const index = (props: Iprops) => {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const fullRef = useRef<HTMLDivElement>(null);
  const toggleFullscreen = () => {
    if (fullRef.current) {
      toggleModalFullscreen(fullRef.current);
      setIsFullScreen(!isFullScreen);
    }
  };
  return (
    <span
      className={styles.toggleWrapper}
      onClick={toggleFullscreen}
      ref={fullRef}
    >
      {isFullScreen ? (
        <>
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="14978"
            width="32"
            height="32"
          >
            <path
              d="M273.6 288.384H96a32 32 0 0 0 0 64h225.6a32 32 0 0 0 32-32V96a32 32 0 0 0-64 0v176.384a16 16 0 0 1-16 16zM273.6 736H96a32 32 0 1 1 0-64h225.6a32 32 0 0 1 32 32v224.384a32 32 0 0 1-64 0V752a16 16 0 0 0-16-16zM752 288.384h177.6a32 32 0 0 1 0 64H704a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v176.384a16 16 0 0 0 16 16zM752 736h177.6a32 32 0 1 0 0-64H704a32 32 0 0 0-32 32v224.384a32 32 0 0 0 64 0V752a16 16 0 0 1 16-16z"
              p-id="14979"
            ></path>
          </svg>
          <b className={styles.fullScreen}>小屏</b>
        </>
      ) : (
        <>
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="14640"
            width="32"
            height="32"
          >
            <path
              d="M628.053333 628.053333a32 32 0 0 1 45.226667 0l158.72 158.634667V693.333333l0.298667-4.352A32 32 0 0 1 896 693.333333v181.333334l-0.341333 3.84a21.333333 21.333333 0 0 1-20.992 17.493333h-181.333334l-4.352-0.298667a32 32 0 0 1-27.648-31.701333l0.298667-4.352a32 32 0 0 1 31.701333-27.648h93.44l-158.72-158.72-3.114666-3.584a32 32 0 0 1 3.114666-41.642667z m-232.106666 0a32 32 0 0 1 3.114666 41.642667l-3.114666 3.584-158.72 158.72h93.44a32 32 0 0 1 31.701333 27.648l0.298667 4.352a32 32 0 0 1-27.648 31.701333L330.666667 896H149.333333a21.333333 21.333333 0 0 1-20.992-17.493333L128 874.666667v-181.333334a32 32 0 0 1 63.701333-4.352l0.298667 4.352v93.354667l158.72-158.634667a32 32 0 0 1 45.226667 0zM874.666667 128a21.333333 21.333333 0 0 1 20.992 17.493333L896 149.333333v181.333334a32 32 0 0 1-63.701333 4.352L832 330.666667V237.312L673.28 395.946667a32 32 0 0 1-48.341333-41.642667l3.114666-3.584 158.72-158.72h-93.44a32 32 0 0 1-31.701333-27.648L661.333333 160a32 32 0 0 1 27.648-31.701333L693.333333 128h181.333334zM330.666667 128l4.352 0.298667a32 32 0 0 1 27.648 31.701333l-0.298667 4.352a32 32 0 0 1-31.701333 27.648H237.226667l158.72 158.72 3.114666 3.584a32 32 0 0 1-48.341333 41.642667L192 237.312V330.666667l-0.298667 4.352A32 32 0 0 1 128 330.666667V149.333333l0.341333-3.84A21.333333 21.333333 0 0 1 149.333333 128h181.333334z"
              p-id="14641"
            ></path>
          </svg>
          <b className={styles.fullScreen}>全屏</b>
        </>
      )}
    </span>
  );
};

export default index;
