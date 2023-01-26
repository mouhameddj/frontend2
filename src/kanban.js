/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin,{ Draggable } from "@fullcalendar/interaction" // needed for dayClick

import timeGridPlugin from  '@fullcalendar/timegrid'
import { Col,Card, Row } from 'antd';
import {getDepartements} from "./api";
import"./Style.css";
import { render } from "@testing-library/react";


   
    const index = () => {
      
     
         const [departments, setDepartments] = useState([]);
        
		 
		const handleSelect=(info)=>{
   
            console.log(info);
        }
       
    
     
        
        const drag = () =>{
           
       
         }
		// useEffect dima wost l component mouch lbara (componentmte3ek index hné )
		  useEffect(() => {
     

        let dragable=(document.getElementById("external-event"))
       
        new Draggable(dragable,{
        itemSelector:".fc-event",
        eventData: function(eventEl){
           let id =eventEl.getAttribute("id")  
           let title =eventEl.getAttribute("title")   
           let couleur =eventEl.getAttribute("couleur")         
           return{
            id:id,
            title:title,
            couleur:couleur
           
          }
        
          
        }
    
      })

      getDepartements().then(res=>{
					 
        //les données mte3ek bech yjiw mil back hné lifehom liste des departments w kif ta3mil setDepartments taw yafichehom fil front
        setDepartments(res.data);
    
     }).catch(err=>{
       console.log(err);
       
       
     })
 
				
			});

    
       
       const handleRecieve = (eventInfo)=>{
        console.log(eventInfo);
        let departments = {
        
          id:eventInfo.draggedEl.getAttribute("id"),
         title :eventInfo.draggedEl.getAttribute("title"),
         color :eventInfo.draggedEl.getAttribute("color")
         
        }
       }
    
      

  return (
    <div>
        <Row>
        <Col span={6}>
         <Card>
            <div id="external-event">
       
         <ul>
      {departments.map((item, index) => 
        
           
            <li
            className="fc-event" 
            id={item.id}
            title={item.titre}
            couleur={item.couleurr}
            key={index} 
            style={{backgroundColor:item.couleur}}  >
              {item.titre} {item.couleur }
            </li>
         
        )}
    </ul>
    </div>
         </Card>
        </Col>
        <Col span={18}>

     
        <h1>Index full</h1>
        <FullCalendar
        plugins={[ dayGridPlugin,timeGridPlugin, interactionPlugin ]}
       headerToolbar={{
        left:'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
       }}
      
	   // library mta3 fullcalendar react taw tal9a onclick w ondrop w ... kifeh haw exemple : https://codesandbox.io/s/fullcalendar-react-avoid-drop-on-same-day-wn97b?file=/src/DemoApp.jsx:0-3087
	  
     departments={departments}
     selectable={true}
     select={handleSelect}
     drag={handleRecieve}
 
            />
              </Col>
         </Row>
    </div>
  )
  
}

export default index

