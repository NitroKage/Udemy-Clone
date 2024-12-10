import React, { useState,useLayoutEffect,useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import commImage from '../../Assets/InstructorAdminImages/commImage.png'
export default function MessageSectionPage() {
    const [currentchat, setcurrentchat] = useState({});
    const [MessageSend, setMessageSend] = useState('');
const [chatscreenHeight,setchatscreenheight] =useState('');
const [searchuser,setsearchuser] =useState('');
const [filteredMessageData,setfilteredMessageData] = useState([])
const [MessageData,setMessageData] = useState([
    {
        id: '1',
        image: commImage,
        name: 'Dassn chotu',
        LastMessageReadid:'ghjkew',
        chatMessage: [
            {
                id:'ghjkew',
                sent: 'dfghjkl',
                timeStamp: '24-12-2024',
            },
            {
                id:'ghjkfjebjew',
                received: 'ygefuefu',
                timeStamp: '24-12-2024',
            },
        ],
    },
    {
        id: '2',
        image: commImage,
        name: 'Dan chotu',
        LastMessageReadid:'ghjkew',
        chatMessage: [
            {id:'ghjkew',
                sent: 'dfghjkl',
                timeStamp: '24-12-2024',
            },
            {id:'ghjkew',
                received: 'ygefuefu',
                timeStamp: '24-12-2024',
            },
        ],
    },
    {
        id: '3',
        image: commImage,
        name: 'Dan chotu',
        LastMessageReadid:'ghjkew',
        chatMessage: [
            {
                id:'ghjkew',
                sent: 'dfghjkl',
                timeStamp: '24-12-2024',
            },
            {
                id:'ghjkew',
                received: 'ygefuefu',
                timeStamp: '24-12-2024',
            },
        ],
    },
    {
        id: '4',
        image: commImage,
        name: 'Dan chotu',
        LastMessageReadid:'ghjkew',
        chatMessage: [
            {
                id:'ghjkewcejre',
                sent: 'dfghjkl',
                timeStamp: '24-12-2024',
            },
            {
                id:'ghjkejfjrw',
                received: 'ygefuefu',
                timeStamp: '24-12-2024',
            },
        ],
    },
]);

useEffect(()=>{
    setfilteredMessageData(MessageData)
},[MessageData])



    const handlechats = (value,newmessage) => {
        setcurrentchat(value)
        if(newmessage != 0){
            // call an api that will set the current last chat as last chat 
        }
    }

    useLayoutEffect(()=>{
const width = window.innerWidth
if(width >991){
    setchatscreenheight('52vh');
}else{
    setchatscreenheight('unset');
}
    },[])


    const handleDeleteChat =(id) =>{
        setcurrentchat({})
    }

    function findUnreadMessages(data) {
        const { LastMessageReadid, chatMessage } = data;
        const lastMessageIndex = chatMessage.findIndex(message => message.id === LastMessageReadid);
        const unreadMessages = chatMessage.length - (lastMessageIndex + 1);
        return unreadMessages;
    }

    const usersearch =(e)=>{
        setsearchuser(e.target.value)

        if(e.target.value !== ''){
            setfilteredMessageData(MessageData?.filter((value)=>(value?.name)?.toLowerCase().includes((e.target.value).toLowerCase())))
        }else{
            setfilteredMessageData(MessageData)
        }
    }
    return (
        <>
            <div className='messages'>
                <div className="row mt-2">
                    <div className="col-lg-4 col-xs-12 mt-3">
                        <div className="Left-side-message">
                            <div className="inputgrps">
                                <input type="text" placeholder='Search User' value={searchuser} onChange={(e)=>usersearch(e)} />
                                <span><CiSearch /></span>
                            </div>

                            <div className="chats">
                                {
                                    filteredMessageData && filteredMessageData?.length > 0 ?
                                    filteredMessageData?.map((value, index) => {
                                            const newmessage = findUnreadMessages(value);
                                            return (
                                                <div className={`chat ${value?.id == currentchat?.id ? 'active' :''}`} onClick={() => handlechats(value,newmessage)} key={index}>
                                                    <div className='LS'>
                                                        <div className="circle">
                                                            <img src={value?.image} alt="image" width={'100%'} />
                                                        </div>
                                                        <h5>{value?.name}</h5>
                                                    </div>
                                                    {
                                                        newmessage !== '' && newmessage !== undefined && newmessage !== null && newmessage !== 0 ?
                                                            <div className="RS">
                                                                <div className="circle2">
                                                                    <h5>{newmessage}</h5>
                                                                </div>
                                                            </div>
                                                            : ''}
                                                </div>
                                            )
                                        })
                                        : ''}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-xs-12 mt-3">
                        {
                            Object.keys(currentchat).length !== 0 ?
                        
                        <div className="Right-side-message">
                            <div className="top-section">
                                <div className='d-flex align-items-center'>
                                <div className="circle">
                                    <img src={currentchat?.image} alt="image" width={'100%'} />
                                </div>
                                <h5>{currentchat?.name}</h5>
                                </div>
                                <div>
                                    <h5 className="text-danger mb-0" style={{cursor:'pointer'}} onClick={()=>handleDeleteChat(currentchat?.id)}>Delete</h5>
                                </div>
                            </div>

                            <div className="middle-section" style={{height:chatscreenHeight}}>
                                <div className="receivedmessage w-50 mt-2">
                                    <h5>Hi I have Some Querries regarding 2nd Chaper</h5>
                                    <h6 className='text-end'>12-12-2024</h6>
                                </div>
                                <div className="sendmessage w-50 mt-2">
                                    <h5>Hi I have Some Querries regarding 2nd Chaper</h5>
                                    <h6 className='text-end'>12-12-2024</h6>
                                </div>
                            </div>

                            <div className="bottom-section">
                               <div className='d-flex'>
                                <input type="text" className='w-100 me-3' value={MessageSend} onChange={(e)=>setMessageSend(e.target.value)}/>
                                <button className={`sendbtn ${MessageSend !== '' ? 'active' : 'disabled'}`}>Send</button>
                                </div> 
                            </div>
                        </div>
                        :''}
                    </div>
                </div>
            </div>
        </>
    )
}
