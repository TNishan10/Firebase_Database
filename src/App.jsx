import React, {useState, useEffect}from 'react'
import Navbar from './components/Navbar';
import Search from './components/Search';
import {collection, getDocs} from 'firebase/firestore';
import {db} from './config/firebase';
import ContactCard from './components/ContactCard';

const App = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try{
        const contactsRef = collection(db, 'contacts');
        const contactsSnapshot = await getDocs(contactsRef);
        const contactList = contactsSnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        });
        setContacts(contactList);
      }
      catch(error){
        console.log(error);
      }
    };
    getContacts();
  }, []);
  
  return (
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />
      <Search />
       <div className='mt-4 gap-3 flex flex-col'>
        {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact}/>
        ))}
       </div>
    </div>
  )
}
function git(){
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

console.log(git());
export default App;

