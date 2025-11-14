import MyComputer from '../../assets/pc.png'
import About from '../../assets/ipng.png'
import Resume from '../../assets/folder.png'
import Mail from '../../assets/mail.png'
import Project from '../../assets/regFolder.png'
import Winamp from '../../assets/winampIcon.png'
import resumefile from '../../assets/resume.png'
import MineSweeper from '../../assets/minesweepericon.png'
import MSN from '../../assets/msn.png'
import ie from '../../assets/ie.png'
import settings from '../../assets/setting.png'
import file from '../../assets/file4download.png'
import disk from '../../assets/c.png'
import rom from '../../assets/rom.png'
import jpeg from '../../assets/jpeg.png'
import firstPic from '../../assets/001.jpg'
import secondPic from '../../assets/002.jpg'
import thirdPic from '../../assets/003.jpg'
import fourthPic from '../../assets/004.jpg'
import fifthPic from '../../assets/005.jpg'
import sixthPic from '../../assets/006.jpg'
import seventhPic from '../../assets/007.jpg'
import eighthPic from '../../assets/008.jpg'
import ninthPic from '../../assets/009.jpg'
import tenthPic from '../../assets/010.jpg'
import eleventhPic from '../../assets/011.jpg'
import binEmp from '../../assets/bin2.png'
import reset from '../../assets/reset.png'
import github from '../../assets/github.png'
import paint from '../../assets/paint.png'
import patch from '../../assets/patch.png'
import ThreedObject from '../../assets/3dObject.png'
import Fortune from '../../assets/fortune.png'
import run from '../../assets/run.png'
import backarrow from '../../assets/backarrow.png'
import taskmanager from '../../assets/taskmanager.png'
import notepad from '../../assets/notepad.png'
import cicadalogot from '../../assets/cicadalogot.png'

// style function for bg tap
export function StyleHide(index, tap, ObjectState) {
    const boxshadowstyleTrue = 'inset 1px 1px #000, 1px 1px #ffffffdd';
    const bgStyleTrue = '#dddcdc';

    const boxshadowstyleFalse = 'inset 1px 1px #ffffffdd, 1.5px 1.5px #000';
    const bgStyleFalse = '#b3b2b2';

    const setState = ObjectState();

    const namePassed = tap[index].split(' ').join('').toLowerCase();

    const foundItem = setState.find(item => {
        const itemName = item.name.split(' ').join('').toLowerCase();

        return itemName === namePassed
    })

    if (foundItem) {
        return foundItem.usestate.focusItem
            ? {boxShadow: boxshadowstyleTrue, background: bgStyleTrue}
            : {boxShadow: boxshadowstyleFalse, background: bgStyleFalse};
    }

    return {};
}


// Mapping image function
export function imageMapping(name, type) {

    switch (name.toLowerCase()) {

        case 'about':
            return About;

        case 'mycomputer':
        case 'my computer':
            return MyComputer;

        case 'resume':
            return Resume;

        case 'mail':
            return Mail;

        case 'project':
        case 'picture':
        case 'utility':
            return Project;

        case 'note':
            return file;

        case 'winamp':
            return Winamp;

        case 'resumefile':
            return resumefile;

        case 'minesweeper':
        case 'mine sweeper':
            return MineSweeper;

        case 'msn':
            return MSN;

        case 'internet':
        case 'webresume':
            return ie;

        case 'settings':
            return settings;

        case 'hard disk (c:)':
        case 'hard disk (d:)':
            return disk;

        case 'cd-rom':
            return rom;

        case name[0] === '0':
        case 'photo':
        case 'jpeg':
            return jpeg;

        case 'bin':
        case 'recycleBin':
            return binEmp;

        case 'resetstorage':
            return reset;

        case 'github':
            return github;

        case "paint":
            return paint;

        case "patch":
            return patch;

        case "3dobject":
            return ThreedObject;

        case "fortune":
            return Fortune;

        case "run":
            return run;

        case "exit":
            return backarrow;

        case "taskmanager":
            return taskmanager;

        case "newfolder":
            return Project;

        case "notepad":
            return notepad

        case "cicadadetroit":
            return cicadalogot

        default:
            if (type === 'folder') {
                return Project;
            }
            if (type === 'notepad') {
                return notepad;
            }
            return null;
    }
}

// set photo to the current photo
export function handleDoubleClickPhotoOpen(name, setCurrentPhoto) {

    switch(name) {
      case '001': 
        setCurrentPhoto({name: name, pic: firstPic}); 
        break;
  
      case '002': 
        setCurrentPhoto({name: name, pic: secondPic}); 
        break;
      
      case '003':
        setCurrentPhoto({name: name, pic: thirdPic});
        break;
      
      case '004':
        setCurrentPhoto({name: name, pic: fourthPic});
        break;

      case '005':
        setCurrentPhoto({name: name, pic: fifthPic});
        break;

      case '006':
        setCurrentPhoto({name: name, pic: sixthPic});
        break;

      case '007':
        setCurrentPhoto({name: name, pic: seventhPic});
        break;

      case '008':
        setCurrentPhoto({name: name, pic: eighthPic});
        break; 
      
      case '009':
        setCurrentPhoto({name: name, pic: ninthPic});
        break;

      case '010':
        setCurrentPhoto({name: name, pic: tenthPic});
        break;

      case '011':
        setCurrentPhoto({name: name, pic: eleventhPic});
        break;

    default: break; 
  }
}

export function handleDoubleClickPhotoOpenMobile(name, setCurrentPhoto, lastTapTime, setLastTapTime) {
  const now = Date.now();
  if (now - lastTapTime < 300) {
    
    switch(name) {
      case '001': 
        setCurrentPhoto({name: name, pic: firstPic}); 
        break;
  
      case '002': 
        setCurrentPhoto({name: name, pic: secondPic}); 
        break;

      case '003':
         setCurrentPhoto({name: name, pic: thirdPic});
        break;
        
      case '004':
        setCurrentPhoto({name: name, pic: fourthPic});
        break;
  
      case '005':
        setCurrentPhoto({name: name, pic: fifthPic});
        break;
  
      case '006':
        setCurrentPhoto({name: name, pic: sixthPic});
        break;

      case '007':
        setCurrentPhoto({name: name, pic: seventhPic});
       break;
  
      case '008':
       setCurrentPhoto({name: name, pic: eighthPic});
      break; 
        
      case '009':
       setCurrentPhoto({name: name, pic: ninthPic});
      break;
  
      case '010':
       setCurrentPhoto({name: name, pic: tenthPic});
      break;
  
      case '011':
       setCurrentPhoto({name: name, pic: eleventhPic});
      break;
  
      default: break;
    }
  }
  setLastTapTime(now);
  }

// click to open links
export function handleDoubleClickiframe(name, setOpenProjectExpand, setProjectUrl) {

  switch(name) {

    case 'Note': 
      setProjectUrl('https://fullstack-stickynotes.netlify.app/'); 
    break;

    case '3dObject': 
        setProjectUrl('https://yuteoctober.github.io/3d_book/'); 
    break;

    case 'Fortune': 
        setProjectUrl('https://yuteoctober.github.io/week_fortune/'); 
    break;

    default: break; 
  }
}

export function handleDoubleTapiframeMobile(name, lastTapTime, setLastTapTime, setOpenProjectExpand, setProjectUrl) {
  const now = Date.now();
  if (now - lastTapTime < 300) {
    switch(name) {
  
        case 'Note': 
        setProjectUrl('https://fullstack-stickynotes.netlify.app/'); 
        break;

        case '3dObject': 
        setProjectUrl('https://yuteoctober.github.io/3d_book/'); 
        break;

        case 'Fortune': 
        setProjectUrl('https://yuteoctober.github.io/week_fortune/'); 
        break;
  
      default: break; 
    }
  }
  setLastTapTime(now);
  }

export function handleDoubleClickEnterLink(name, handleshow) {

  switch(name) {
    case 'Note': window.open('https://fullstack-stickynotes.netlify.app/', '_blank'); break;
    case 'Type': window.open('https://yuteoctober.github.io/typingGame/', '_blank'); break;
    case '3dObject': window.open('https://yuteoctober.github.io/3d_book/', '_blank'); break;
    case 'Fortune': window.open('https://yuteoctober.github.io/week_fortune/', '_blank'); break;
    case 'Github': 
      handleshow('Github'); 
      break;

    default: break; 
  }
}


export function handleDoubleTapEnterMobile(name, lastTapTime, setLastTapTime, setOpenProjectExpand, setProjectUrl) {
const now = Date.now();
if (now - lastTapTime < 300) {
  switch(name) {
    case 'Note': window.open('https://fullstack-stickynotes.netlify.app/', '_blank'); break;
    case 'Type': window.open('https://yuteoctober.github.io/typingGame/', '_blank'); break;
    case 'Github': window.open('https://github.com/Yuteoctober/wins95Portfolio/', '_blank'); break;
    case '3dObject': window.open('https://yuteoctober.github.io/3d_book/', '_blank'); break;
    case 'Fortune': window.open('https://yuteoctober.github.io/week_fortune/', '_blank'); break;
    default: break; 
  }
}
setLastTapTime(now);
}

export function iconContainerSize(size) {
  switch(size) {
    case 1:
      return {width: '85px', height: '90px'};
    case 2:
      return {width: '80px', height: '85px'};
    case 3:
      return {width: '75px', height: '80px'};
    case 4:
      return {width: '70px', height: '75px'};
    case 5:
      return {width: '65px', height: '70px'};
    default:
      return {width: '65px', height: '70px'};
  }
}
export function iconImgSize(size) {
  switch(size) {
    case 1:
      return {width: '55px'};
    case 2:
      return {width: '50px'};
    case 3:
      return {width: '45px'};
    case 4:
      return {width: '40px'};
    case 5:
      return {width: '35px'};
    default:
      return {width: '35px'};
  }
}
export function iconTextSize(size) {
  switch(size) {
    case 1:
      return {fontSize: '16px', lineHeight: '13px', number: 1};
    case 2:
      return {fontSize: '15px', lineHeight: '12px', number: 2};
    case 3:
      return {fontSize: '14px', lineHeight: '12px', number: 3};
    case 4:
      return {fontSize: '13px', number: 4};
    case 5:
      return {fontSize: '12px', number: 5};
    default:
      return {fontSize: '12px', number: 5};
  }
}