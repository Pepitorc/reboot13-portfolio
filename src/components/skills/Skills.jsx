import React from 'react'
import './skills.css'
import '../../App.css'
import Test from '../../assets/opt.svg'
import { UilHtml5, UilCss3Simple, UilJavaScript, UilLaptop, UilCell    } from '@iconscout/react-unicons'
import { Icon } from '@iconify/react';

const Skills = () => {
  function removeopacity(number) {
    var htext = ".h5text" + number;
    var boximg = ".boximg" + number;

    document.querySelector(htext).style.opacity = 0;
    document.querySelector(boximg).style.opacity = 1;

  }
  function addopacity(number) {
    var htext = ".h5text" + number;
    var boximg = ".boximg" + number;
    document.querySelector(htext).style.opacity = 1;
    document.querySelector(boximg).style.opacity = 0;
    return htext
  }

  return (
    
    <>
    <div className="skills">
    <h2 className='heading primary-color'>Skills</h2>
        <div className="boxes">
          <div className="box main" onMouseEnter={() => addopacity(1)} onMouseLeave={() => removeopacity(1)}>
            <span className='boximg1'><UilHtml5 /></span>
            <h5 className='h5text1'>HTML</h5>
          </div>
          <div className="box main" onMouseEnter={() => addopacity(2)} onMouseLeave={() => removeopacity(2)}>
          <span className='boximg2'><UilCss3Simple /></span>
            <h5 className='h5text2'>CSS</h5>
          </div>
          <div className="box main" onMouseEnter={() => addopacity(3)} onMouseLeave={() => removeopacity(3)}>
          <span className='boximg3'><UilJavaScript /></span>
            <h5 className='h5text3'>JavaScript</h5>
          </div>
          <div className="box main" onMouseEnter={() => addopacity(4)} onMouseLeave={() => removeopacity(4)}>
          <span className='boximg4'><UilLaptop /></span>
            <h5 className='h5text4'>Responsive Design</h5>
          </div>
          <div className="box main" onMouseEnter={() => addopacity(5)} onMouseLeave={() => removeopacity(5)}>
          <span className='boximg5'><UilCell  /></span>
            <h5 className='h5text5'>Ui/UX Design</h5>
          </div>
          <div className="box main" onMouseEnter={() => addopacity(6)} onMouseLeave={() => removeopacity(6)}>
          <span className='boximg6' ><Icon icon="simple-icons:react" color="white" /></span>
            <h5 className='h5text6'>React Js</h5>
          </div>
          <div className="box main" onMouseEnter={() => addopacity(7)} onMouseLeave={() => removeopacity(7)}>
          <span className='boximg7'><Icon icon="akar-icons:python-fill" color="white" hFlip={true} vFlip={true} /></span>
            <h5 className='h5text7'>Python</h5>
          </div>
          <div className="box main" onMouseEnter={() => addopacity(8)} onMouseLeave={() => removeopacity(8)}>
          <span className='boximg8'><Icon icon="ant-design:console-sql-outlined" color="white" /></span>
            <h5 className='h5text8'>SQL</h5>
          </div>
          <div className="box main" onMouseEnter={() => addopacity(9)} onMouseLeave={() => removeopacity(9)}>
          <span className='boximg9'><Icon icon="file-icons:c" color="white"/></span>
            <h5 className='h5text9'>C/C++</h5>
          </div>
          <div className="box main" onMouseEnter={() => addopacity(10)} onMouseLeave={() => removeopacity(10)}>
          <span className='boximg10'><Icon icon="cib:typescript" color="white" /></span>
            <h5 className='h5text10'>Typescript</h5>
          </div>
          <div className="box main" onMouseEnter={() => addopacity(11)} onMouseLeave={() => removeopacity(11)}>
          <span className='boximg11'><Icon icon="vscode-icons:file-type-scss" color="white" /></span>
            <h5 className='h5text11'>SCSS</h5>
          </div>
          <div className="box main" onMouseEnter={() => addopacity(12)} onMouseLeave={() => removeopacity(12)}>
          <span className='boximg12'><Icon icon="file-icons:php" color="white" /></span>
            <h5 className='h5text12'>PHP</h5>
          </div>



        </div>

    </div>
       

    </>
  )
}

export default Skills