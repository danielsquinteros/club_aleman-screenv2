import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import ImageCarousel from './ImageCarousel';

const IDLE_TIMEOUT = 60000; // 60 seconds
const BUTTON_HIDE_TIMEOUT = 5000; // 5 seconds

interface Image {
  src: string;
  alt: string;
}

const Layout: React.FC = () => {
  const [isIdle, setIsIdle] = useState<boolean>(false);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [lastActiveTime, setLastActiveTime] = useState<number>(Date.now());
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const images: Image[] = [
    { src: "/images/screen-saver/image-1.jpg", alt: "Screen saver image 1" },
    { src: "/images/screen-saver/image-2.jpg", alt: "Screen saver image 2" },
    { src: "/images/screen-saver/image-3.jpg", alt: "Screen saver image 3" },
    { src: "/images/screen-saver/image-4.png", alt: "Screen saver image 4" },
    { src: "/images/screen-saver/image-5.png", alt: "Screen saver image 5" },
    { src: "/images/screen-saver/image-6.png", alt: "Screen saver image 6" },
    { src: "/images/screen-saver/image-7.png", alt: "Screen saver image 7" }
  ];

  const resetTimer = useCallback((): void => {
    setLastActiveTime(Date.now());
    setIsIdle(false);
    setIsButtonVisible(false);
  }, []);

  const showButton = useCallback((): void => {
    if (isIdle) {
      setIsButtonVisible(true);
    }
  }, [isIdle]);

  const hideButton = useCallback((): void => {
    setIsButtonVisible(false);
  }, []);

  const handleUserActivity = useCallback((): void => {
    if (!isIdle) {
      resetTimer();
    }
  }, [isIdle, resetTimer]);

  useEffect(() => {
    const checkIdleTime = setInterval(() => {
      if (Date.now() - lastActiveTime > IDLE_TIMEOUT) {
        setIsIdle(true);
      }
    }, 1000);

    document.addEventListener('mousemove', handleUserActivity);

    return () => {
      clearInterval(checkIdleTime);
      document.removeEventListener('mousemove', handleUserActivity);
    };
  }, [lastActiveTime, handleUserActivity]);

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;

    if (isButtonVisible) {
      hideTimeout = setTimeout(hideButton, BUTTON_HIDE_TIMEOUT);
    }

    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [isButtonVisible, hideButton]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent): void => {
      if (isIdle) {
        if (isButtonVisible) {
          // If button is visible and click is outside the button, hide the button
          if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
            hideButton();
          }
        } else {
          // If button is not visible, show the button
          showButton();
        }
      } else {
        // If not idle, reset the timer
        handleUserActivity();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isIdle, isButtonVisible, showButton, hideButton, handleUserActivity]);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    resetTimer();
  };

  return (
    <>
      <div className='flex flex-row min-h-screen text-black'>
        <div className='w-1/3 bg-gray p-14'>
          <Header />
        </div>
        <main className='w-2/3 bg-white'>
          <Outlet />
        </main>
      </div>
      {isIdle && (
        <>
          <div className="fixed inset-0 bg-white flex justify-center items-center z-10">
            <ImageCarousel images={images} interval={10000} />
          </div>
          <div className="fixed inset-x-0 bottom-10 flex justify-center items-center z-20 pointer-events-none">
            {isButtonVisible && (
              <button 
                ref={buttonRef}
                className='bg-white py-4 px-9 flex items-center rounded-xl border-solid border-black border pointer-events-auto'
                onClick={handleButtonClick}
              >
                <img
                  src='/images/logo.png'
                  alt='Logo'
                  className='w-40 h-auto mr-4'
                />
                <div className='border-solid border-black border rounded-xl py-6 px-3 my-3 ml-3'>
                  <img
                    src='/images/icons/circle_arrow_black.svg'
                    alt='Flecha'
                    className='w-10 h-auto mr-4'
                  />
                </div>
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
