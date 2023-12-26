import React, { useState } from 'react'

const Tabs = () => {

  const[ toggleState, setToggleState] = useState(0)

  const toggleTab=(index)=>{
    
       setToggleState(index);
    // console.log(index)
    }
    let tabsClassName1 = "tabs";
    let contentClassName1 = "content";
  if (toggleState === 1) {
    tabsClassName1 = "tabs active";
    contentClassName1 = "content active-content";
  }
  let tabsClassName3 = "tabs";
  let contentClassName3 = "content";
  if (toggleState === 3) {
  tabsClassName3 = "tabs active";
  contentClassName3 = "content active-content";
}

  let tabsClassName2 = "tabs";
  let contentClassName2 = "content";
if (toggleState === 2) {
  tabsClassName2 = "tabs active";
  contentClassName2 = "content active-content";
}
    

return (
    <div className='justify-center flex'>
    <div className='w-1/2 block  bg-slate-200' >
      <div className='flex justify-evenly'>
       
        <div className={tabsClassName1} onClick={()=>toggleTab(1)}>Tab 1</div>
        <div className={tabsClassName2 } onClick={()=>toggleTab(2)}> Tab 2</div>
        <div className={tabsClassName3} onClick={()=>toggleTab(3)}> Tab 3</div> 
      </div>
        <div className='content-tabs'>
        <div className={contentClassName1}>
          <h2>Content 1</h2>
          <hr/>
          <p>A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.</p>
        </div>
        <div  className={contentClassName2}>
          <h2>Content 2</h2>
          <hr/>
          <p> single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.</p>
        </div>
        <div className={contentClassName3}>
          <h2>Content 3</h2>
          <hr/>
          <p>and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.</p>
        </div>
         
      </div> 
      </div>
      </div>
  )
}

export default Tabs
