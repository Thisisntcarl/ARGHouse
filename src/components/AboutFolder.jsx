import UseContext from '../Context'
import { useContext, useState } from "react";
import Draggable from 'react-draggable'
import { motion } from 'framer-motion';
import About from '../assets/ipng.png'
import aboutPC from '../assets/about_pc.png'
import who from '../assets/logo860x877.png'
import what from '../assets/joystick.png'
import '../css/AboutFolder.css'


function AboutFolder() {

  const [generalTap, setGeneralTap] = useState(true)
  const [whoTap, setWhoTap] = useState(false)
  const [whatTap, setWhatTap] = useState(false)

  const { 
    themeDragBar,
    AboutExpand, setAboutExpand,
    StyleHide,
    isTouchDevice,
    handleSetFocusItemTrue,
    inlineStyleExpand,
    inlineStyle,
    deleteTap,
   } = useContext(UseContext);

   const whoText = ( // don't have to use DangerousHTML
    <>
        ARGHouse is a marketing agency that specializes in building Alternate Reality Games (ARGs) with interactive
        worlds that blur the line between the digital and the real. Our team of designers, writers, and engineers craft
        immersive experiences that turns ordinary audiences into active participants.
    </>
  );

  const aboutText = ( // don't have to use DangerousHTML
    <>
        <strong>Objective:</strong>
        <br />
        <span>Creating interactive and </span>
        <span>engaging marketing campaigns</span>
        <br />
        <br />
        <strong>Information:</strong>
        <br />
        <span>ARGHOUSE</span>
        <br />
        <span>Marketing Agency</span>
        <br />
        <span>(855) ARG-HAUS</span>
        <br />
        <br />
        <strong>Location: </strong>
        <br />
        <span>Detroit, MI</span>
    </>
  );

  const whatText = ( // don't have to use DangerousHTML
    <>
        We create everything from mysterious websites and encrypted puzzles to hidden messages in live events,
        social media, and physical spaces, every ARG we create is a living narrative designed to captivate, challenge,
        and connect you with your customers. Brands and organizations partner with us to launch unforgettable campaigns
        that user don’t just watch...they play.
        <br/>
        <br/>
        Whether it’s an online treasure hunt, a brand story told through secret clues, or a digital rabbit hole that
        leads to the heart of your message, ARGHOUSE transforms engagement into adventure.
    </>
  );

      function handleDragStop(event, data) {
        const positionX = data.x 
        const positionY = data.y
        setAboutExpand(prev => ({
          ...prev,
          x: positionX,
          y: positionY
        }))

      }


  function handleAboutTap(name) {
    setGeneralTap(name === 'general');
    setWhoTap(name === 'who');
    setWhatTap(name === 'what');
  }

  const activeBtnStyle = {
    bottom: '2px',
    outline: '1px dotted black',
    outlineOffset: '-5px',
    borderBottomColor: '#c5c4c4',
    zIndex: '3'
  };


  return (
    <>
      <Draggable
        axis="both" 
        handle={'.folder_dragbar'}
        grid={[1, 1]}
        scale={1}
        disabled={AboutExpand.expand}
        bounds={{top: 0}}
        defaultPosition={{ 
          x: window.innerWidth <= 500 ? 35 : 70,
          y: window.innerWidth <= 500 ? 35 : 40,
        }}
        onStop={(event, data) => handleDragStop(event, data)}
        onStart={() => handleSetFocusItemTrue('About')}
      >
        <motion.div className='about_folder'
            onClick={(e) => {
              e.stopPropagation();
              handleSetFocusItemTrue('About');
            }}
            style={ AboutExpand.expand ? inlineStyleExpand('About') : inlineStyle('About')}>
          <div className="folder_dragbar"
             style={{ background: AboutExpand.focusItem? themeDragBar : '#757579'}}
          >
            <div className="about_barname">
              <img src={About} alt="About" />
              <span>About</span>
            </div>
            <div className="about_barbtn">
              <div onClick={ !isTouchDevice ? (e) => {
                e.stopPropagation()
                setAboutExpand(prev => ({...prev, hide: true, focusItem: false}))
                StyleHide('About')
              } : undefined
              }   
                onTouchEnd={(e) => {
                e.stopPropagation()
                setAboutExpand(prev => ({...prev, hide: true, focusItem: false}))
                StyleHide('About')
              }}
              onTouchStart={(e) => e.stopPropagation()}
              >
                <p className='dash'></p>
              </div>

                <div>
                <p className='x'
                  onClick={!isTouchDevice ? () => {
                    deleteTap('About')
                    handleAboutTap('general')
                  }: undefined}
                  onTouchEnd={() => {
                    deleteTap('About')
                    handleAboutTap('general')
                  }}
                >×
                </p>
              </div>
            </div>
          </div>
          <div className="file_tap_container-about">
          <p  onClick={() => handleAboutTap('general')}
              style={generalTap ? activeBtnStyle : {}}
          >General
          </p>
          <p onClick={() => handleAboutTap('who')}
              style={whoTap ? activeBtnStyle : {}}
          >Who?
          </p>
          <p onClick={() => handleAboutTap('what')}
                  style={whatTap ? activeBtnStyle : {}}
          >What?
          </p>
          </div>
          <div className="folder_content">
            <div className="folder_content-about"
              style={{ display: generalTap ? 'grid' : 'block' }}
            >
            <img
              alt="aboutPC"
              className={generalTap ? 'about_img' : 'about_img_other'}
              src={generalTap? aboutPC : (whoTap ? who : what)}
            />
            <div
              className="abouttext_container">

              <p className={generalTap? 'about_text_1' : 'about_text_1_other'}>
                {generalTap? aboutText : whoTap? whoText : whatText}
              </p>   
            </div>
              
            </div>
            <div className="about_btn_container">
              <div className="about_btn_ok"
              onClick={!isTouchDevice ? () => {
                deleteTap('About')
                handleAboutTap('general')
              } : undefined}
              onTouchEnd={() => {
                deleteTap('About')
                handleAboutTap('general')
              }}
              >
                <span>
                  OK
                </span>
              </div>
              <div className="about_btn_cancel"
              onClick={!isTouchDevice ? () => {
                deleteTap('About')
                handleAboutTap('general')
              } : undefined}
              onTouchEnd={() => {
                deleteTap('About')
                handleAboutTap('general')
              }}
              ><span>Cancel</span></div>
            </div>
          </div>
        </motion.div>
      </Draggable>
    </>
  )
}          

export default AboutFolder
