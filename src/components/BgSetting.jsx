import UseContext from '../Context'
import { useContext, useEffect, useState } from 'react';
import Draggable from 'react-draggable'
import { motion } from 'framer-motion';
import { SketchPicker } from 'react-color';
import settingIcon from '../assets/setting.png'
import bgPic from '../assets/bgpc.png'
import bg0 from '../assets/ARGHousebg.gif'
import bg2 from '../assets/bg2.png'
import bg3 from '../assets/bg3.png'
import eff1 from '../assets/noise.png'
import eff2 from '../assets/glitch2.jpg'
import eff3 from '../assets/brokenTV.jpg'
import eff4 from '../assets/bigger_noise.jpg'
import eff5 from '../assets/glitch.gif'
import eff6 from '../assets/glitch2.gif'
import '../css/BgSetting.css'

function BgSetting() {

    const [pickerPanel, setPickerPanel] = useState(false)
    const [userPickedColor, setUserPickedColor] = useState('')
    const [bgTap, setBgTap] = useState(true)
    const [effectTap, setEffectTap] = useState(false)
    const [barcolor, setBarcolor] = useState(null)
    const [ImgBgPreview, setImgBgPreview] = useState(null)
    const [ImgBgPreviewEffect, setImgBgPreviewEffect] = useState(null)

    const [localBg, setLocalBg] = useState(() => {
        const prevBg = localStorage.getItem('background')
        return prevBg ? prevBg : null
    })
    const [localEffect, setLocalEffect] = useState(() => {
        const prevEffect = localStorage.getItem('effect')
        return prevEffect ? prevEffect : null
    })

    const [themeColor, setThemeColor] = useState(null)
    const [localtheme, setLocalTheme] = useState(() => {
        const prevTheme = localStorage.getItem('theme')
        return prevTheme ? prevTheme : null
    })
    const [selectedBg2, setSelectedBg2] = useState(null)
    const [selectedBg2Effect, setSelectedBg2Effect] = useState(null)

    const {
        themeDragBar, setThemeDragBar,
        BgSettingExpand, setBgSettingExpand,
        StyleHide,
        isTouchDevice,
        handleSetFocusItemTrue,
        inlineStyleExpand,
        inlineStyle,
        deleteTap,
    } = useContext(UseContext);

    function handleDragStop(event, data) {
        const positionX = data.x
        const positionY = data.y
        setBgSettingExpand(prev => ({
            ...prev,
            x: positionX,
            y: positionY
        }))
    }

    function handleSettingsTap(name) {
        setBgTap(name === 'bg');
        setEffectTap(name === 'effect');
    }

    const activeBtnStyle = {
        bottom: '2px',
        outline: '1px dotted black',
        outlineOffset: '-5px',
        borderBottomColor: '#c5c4c4',
        zIndex: '3'
    };

    const colorOptions = [
        {value: 1, label: 'Digital Dusk', color: '#3F4565', image: bg0, barColor: '#3F4565'},
        {value: 2, label: 'Endless Horizon', color: '#4B6894', image: bg2, barColor: '#4B6894'},
        {value: 3, label: 'Teal Explorer', color: '#098684', image: bg3, barColor: '#14045c'},

        {
            value: 13,
            label: 'Choose your favorite color',
            color: userPickedColor,
            image: userPickedColor,
            barColor: userPickedColor
        }
    ];


    const effectOptions = [
        {value: 1, label: '(None)', image: 'none'},
        {value: 2, label: 'Noise', image: eff1},
        {value: 3, label: 'Glitch noise', image: eff2},
        {value: 4, label: 'Broken TV', image: eff3},
        {value: 5, label: 'Noise 2', image: eff4},
        {value: 6, label: 'Glitch', image: eff5},
        {value: 7, label: 'Glitch Two', image: eff6},
    ];

    useEffect(() => { // force set background and effect when app opened for color picker
        if (userPickedColor) {
            setThemeColor(userPickedColor);
            setBarcolor(userPickedColor);
            setImgBgPreview(userPickedColor);
        }
    }, [userPickedColor]);


    function setbgColorFunction2(index) {
        const selectedOption = colorOptions.find(option => option.value === index);

        if (selectedOption) {
            setSelectedBg2(index);
            setImgBgPreview(selectedOption.image);
            setThemeColor(selectedOption.color);
            setBarcolor(selectedOption.barColor)
        }
    }

    function setbgColorFunction2Effect(index) {
        const selectedOption = effectOptions.find(option => option.value === index);

        if (selectedOption) {
            setSelectedBg2Effect(index);
            setImgBgPreviewEffect(selectedOption.image);
        }
    }

    useEffect(() => { // when exited app, make set everything to null to prevent bug when reopen

        if (!BgSettingExpand.show) {
            setImgBgPreview(null) // set default preview to teal green
            setImgBgPreviewEffect(null)
            setSelectedBg2(null)
            setSelectedBg2Effect(null)
            setEffectTap(false)
            setBgTap(true)
        }

    }, [BgSettingExpand])


    useEffect(() => {
        const bodyBG = document.getElementsByTagName('body')[0];
        const rootEffect = document.getElementById('root');

        if (localEffect) { // for effect
            rootEffect.style.setProperty('--before-bg-image', `url(${localEffect})`);
        }

        if (localBg) { // for background
            bodyBG.style.backgroundColor = localtheme
            bodyBG.style.backgroundImage = `url(${localBg})`;
        }
    }, [])

    function appleBG() {
        const bodyBG = document.getElementsByTagName('body')[0];
        const rootEffect = document.getElementById('root');

        if (ImgBgPreviewEffect) { // for Effect
            rootEffect.style.setProperty('--before-bg-image', `url(${ImgBgPreviewEffect})`);
        }

        if (ImgBgPreview) { // for background
            bodyBG.style.backgroundColor = themeColor
            bodyBG.style.backgroundImage = `url(${ImgBgPreview})`;
            setThemeDragBar(barcolor)
        } else {
            return;
        }
    }

    function cancelBg() {
        const bodyBG = document.getElementsByTagName('body')[0];
        const rootEffect = document.getElementById('root');
        const localBarColor = localStorage.getItem('barcolor')

        if (localEffect) { // for Effect
            rootEffect.style.setProperty('--before-bg-image', `url(${localEffect})`);
        }

        if (localBg) { // for background
            bodyBG.style.backgroundColor = localtheme
            bodyBG.style.backgroundImage = `url(${localBg})`;
            setThemeDragBar(localBarColor)
        } else {
            return;
        }
    }


    function okBg() {

        const bodyBG = document.getElementsByTagName('body')[0]
        const rootEffect = document.getElementById('root');


        if (ImgBgPreviewEffect) { // for effect
            rootEffect.style.setProperty('--before-bg-image', `url(${ImgBgPreviewEffect})`);
        }

        if (ImgBgPreviewEffect) { // for effect
            localStorage.setItem('effect', ImgBgPreviewEffect); // set background in localstroage
            setLocalEffect(ImgBgPreviewEffect)
            setLocalEffect(localEffect)
        }

        if (ImgBgPreview) { // for background
            bodyBG.style.backgroundColor = themeColor
            bodyBG.style.backgroundImage = `url(${ImgBgPreview})`;
            setThemeDragBar(barcolor)
        }

        if (ImgBgPreview) { // for background
            localStorage.setItem('theme', themeColor); // set theme in localstroage
            localStorage.setItem('background', ImgBgPreview); // set background in localstroage
            localStorage.setItem('barcolor', barcolor); // set barcolor in localstroage
            setLocalBg(ImgBgPreview)
            setLocalTheme(themeColor)
        }
        return;
    }

  return (
    <>
      <Draggable
        axis="both"
        handle={'.folder_dragbar_bgsetting'}
        grid={[1, 1]}
        scale={1}
        disabled={BgSettingExpand.expand}
        bounds={{top: 0}}
        defaultPosition={{
          x: window.innerWidth <= 500 ? 35 : 70,
          y: window.innerWidth <= 500 ? 35 : 40,
        }}
        onStop={(event, data) => handleDragStop(event, data)}
        onStart={() => handleSetFocusItemTrue('Settings')}
      >
        <motion.div className='bgsetting_folder'
            onClick={(e) => {
              e.stopPropagation();
              handleSetFocusItemTrue('Settings');
              setPickerPanel(false)
            }}
            style={ BgSettingExpand.expand ? inlineStyleExpand('Settings') : inlineStyle('Settings')}>
          <div className="folder_dragbar_bgsetting"
             style={{ background: BgSettingExpand.focusItem? themeDragBar : '#757579'}}
          >
            <div className="bgsetting_barname">
              <img src={settingIcon} alt="Settings" />
              <span>Settings</span>
            </div>
            <div className="bgsetting_barbtn">
              <div onClick={ !isTouchDevice ? (e) => {
                e.stopPropagation()
                setBgSettingExpand(prev => ({...prev, hide: true, focusItem: false}))
                StyleHide('Settings')
              } : undefined
              }
                onTouchEnd={(e) => {
                e.stopPropagation()
                setBgSettingExpand(prev => ({...prev, hide: true, focusItem: false}))
                StyleHide('Settings')
              }}
                onTouchStart={(e) => e.stopPropagation()}
              >
                <p className='dash'></p>
              </div>

                <div>
                <p className='x'
                  onClick={!isTouchDevice ? () => {
                    cancelBg()
                    deleteTap('Settings')
                    handleAboutTap('bg')
                    setPickerPanel(false);
                  }
                  : undefined}
                  onTouchEnd={() => {
                    cancelBg()
                    deleteTap('Settings')
                    handleAboutTap('bg')
                  }}
                >×
                </p>
              </div>
            </div>
          </div>
          <div className="file_tap_container-bgsetting">
          <p onClick={() => handleSettingsTap("bg")}
              style={bgTap ? activeBtnStyle : {}}
          >Background
          </p>
          <p onClick={() => handleSettingsTap("effect")}
              style={effectTap ? activeBtnStyle : {}}
          >Effect
          </p>

          </div>
          <div className="folder_content">
          {/* Background Section */}
          {bgTap && (
            <div className="folder_content-bgsetting">
              <img
                alt="bgsettingPC"
                className='bgsetting_img'
                src={bgPic}
              />
              <div className="preview_bg"
                style={{ backgroundColor: userPickedColor ? userPickedColor : '' }}
              >
                {ImgBgPreview && (
                  <img src={ImgBgPreview} alt='' />
                )}
              </div>
              {pickerPanel && (
                <div className='color_picker_container'
                  onClick={(e) => e.stopPropagation()}
                >
                  <SketchPicker
                    color={userPickedColor}
                    onChange={color => {
                      const newColor = color.hex
                      setUserPickedColor(newColor)
                    }}
                  />
                </div>
)}
              <div className="bgsettingtext_container">
                <div className="wallpaper">
                  <p>Wallpaper</p>
                  <p>Select an HTML Element or Picture</p>
                  <div className="wallpaper_container">
                    {colorOptions.map((option) => (
                      <ul
                        key={option.value}
                        onClick={(e) => {
                          e.stopPropagation()
                          setbgColorFunction2(option.value)
                          option.value === 13 ? setPickerPanel(true)
                        : setPickerPanel(false)
                        }}
                        style={
                          selectedBg2 === option.value
                            ? { background: '#040482', color: 'white' }
                            : {}
                        }
                      >
                        {option.label}
                        {option.value === 13 && (
                          <span
                            style={{ position: 'relative', left: '8px'}}>
                            {userPickedColor}
                          </span>
                        )}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Effect Section */}
          {effectTap && (
            <div className="folder_content-bgsetting">
            <img
              alt="bgsettingPC"
              className='bgsetting_img'
              src={bgPic}
            />
            <div className="preview_bg">
              {ImgBgPreviewEffect && (
                <img src={ImgBgPreviewEffect} alt='' />
              )}
            </div>
            <div className="bgsettingtext_container">
              <div className="wallpaper">
                <p>
                  Effect
                </p>
                <p>Select desired Effect</p>
                <div className="wallpaper_container">
                  {effectOptions.map((option) => (
                    <ul
                      key={option.value}
                      onClick={() => setbgColorFunction2Effect(option.value)}
                      style={
                        selectedBg2Effect === option.value
                          ? { background: '#040482', color: 'white' }
                          : {}
                      }
                    >
                      {option.label}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
          )}
{/* ------------------------ EFFECT END ----------------------------- */}
          <div className="bgsetting_btn_container">
            <div className="bgsetting_btn_ok"
              onClick={!isTouchDevice ? () => {
                deleteTap('Settings')
                okBg()
              } : undefined
              }
              onTouchEnd={() => {
                deleteTap('Settings')
                okBg()
              }}
            >
              <span>OK</span>
            </div>

            <div className="bgsetting_btn_cancel"
              onClick={!isTouchDevice ? () => {
                deleteTap('Settings')
                cancelBg()
              } : undefined
              }
              onTouchEnd={() => {
                deleteTap('Settings')
                cancelBg()
              }}
            >
              <span>Cancel</span>
            </div>

            <div className="bgsetting_btn_cancel"
              onClick={appleBG}
            >
              <span>Apply</span>
            </div>
          </div>
        </div>

        </motion.div>
      </Draggable>
    </>
  )
}

export default BgSetting
